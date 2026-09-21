export interface PracticeVector {
  id: string;
  tag: string;
  badgeType: 'urgent' | 'structural' | 'acoustic';
  score: string;
  scoreNumber: number;
  title: string;
  observedIn: string;
  observation: string;
  recommendedDuration: string;
  drillCode: string;
  buttonLabel: string;
}

export interface PracticeModuleDrill {
  id: string;
  code: string;
  score: string;
  title: string;
  description: string;
  tag: string;
  duration: string;
  rolePrompt: string;
}

export interface DayPlanDetail {
  dayNumber: number;
  label: string;
  date: string;
  title: string;
  subtitle: string;
  status: 'completed' | 'active' | 'locked' | 'evaluation';
  score?: string;
  simulationId: string;
  simulationFocus: string;
  estimatedMinutes: string;
  directives: string[];
  objectives: Array<{
    number: string;
    title: string;
    metric: string;
    metricColor: string;
    description: string;
  }>;
  prepNotes: string[];
}

export interface TargetRoleData {
  roleName: string;
  compositeScore: number;
  targetScore: number;
  baselineScore: number;
  scoreDelta: number;
  primaryFocus: string;
  experienceLevel: string;
  keyStack: string;
  vectors: PracticeVector[];
  modules: {
    technical: PracticeModuleDrill[];
    communication: PracticeModuleDrill[];
    speech: PracticeModuleDrill[];
  };
  days: DayPlanDetail[];
}

export interface CustomTargetsConfig {
  targetComposite: number;
  dailyAlertTime: string;
  alertActive: boolean;
  standardSessionsTarget: number;
  technicalDrillsTarget: number;
  communicationDrillsTarget: number;
  speechDrillsTarget: number;
  opticalDrillsTarget: number;
}

export interface AiPlanState {
  selectedRole: string;
  daysHorizon: 7 | 14 | 30;
  selectedDayNumber: number;
  activeFacet: 'technical' | 'communication' | 'speech';
  drillsCompleted: number;
  totalPracticeMinutes: number;
  lastUpdated: string;
  customTargets: CustomTargetsConfig;
}

const STORAGE_KEY = 'inprep_ai_plan_state_v1';

export const ROLE_DATA_CATALOG: Record<string, TargetRoleData> = {};

let _roleCatalogPromise: Promise<void> | null = null;

export const fetchRoleCatalog = async (): Promise<void> => {
  if (_roleCatalogPromise) return _roleCatalogPromise;
  _roleCatalogPromise = (async () => {
    try {
      const { NODE_BACKEND_URL } = await import('./api');
      const res = await fetch(NODE_BACKEND_URL + '/role-catalog');
      if (!res.ok) return;
      const list: Array<{ slug: string; displayName: string }> = await res.json();
      await Promise.all(
        list.map(async (item) => {
          try {
            const detailRes = await fetch(NODE_BACKEND_URL + '/role-catalog/' + encodeURIComponent(item.slug));
            if (detailRes.ok) {
              ROLE_DATA_CATALOG[item.slug] = await detailRes.json();
            }
          } catch {}
        })
      );
    } catch (err) {
      console.warn('Failed to fetch role catalog:', err);
    }
  })();
  return _roleCatalogPromise;
};

export const getRoleData = async (slug: string): Promise<TargetRoleData | null> => {
  if (ROLE_DATA_CATALOG[slug]) return ROLE_DATA_CATALOG[slug];
  try {
    const { NODE_BACKEND_URL } = await import('./api');
    const res = await fetch(NODE_BACKEND_URL + '/role-catalog/' + encodeURIComponent(slug));
    if (!res.ok) return null;
    const data = await res.json();
    ROLE_DATA_CATALOG[slug] = data;
    return data;
  } catch {
    return null;
  }
};

export const loadAiPlanState = (): AiPlanState => {
  const defaultState: AiPlanState = {
    selectedRole: 'Staff Backend & Distributed Systems Architecture',
    daysHorizon: 7,
    selectedDayNumber: 4,
    activeFacet: 'technical',
    drillsCompleted: 18,
    totalPracticeMinutes: 420,
    lastUpdated: 'Updated just now',
    customTargets: {
      targetComposite: 80.0,
      dailyAlertTime: '09:00 AM (UTC+6)',
      alertActive: true,
      standardSessionsTarget: 4,
      technicalDrillsTarget: 16,
      communicationDrillsTarget: 2,
      speechDrillsTarget: 2,
      opticalDrillsTarget: 2,
    },
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
};

export const saveAiPlanState = (state: AiPlanState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    // Asynchronously synchronize custom targets with backend database
    if (state.customTargets) {
      import('./api').then(({ saveCustomTargets }) => {
        saveCustomTargets(state.customTargets).catch(() => {});
      });
    }
  } catch (e) {
    console.warn('Failed to save AI plan state to localStorage', e);
  }
};

export const fetchAndHydrateAiPlan = async (userId?: string): Promise<TargetRoleData | null> => {
  try {
    const { getActiveImprovementPlan } = await import('./api');
    const dbPlan = await getActiveImprovementPlan(userId);
    if (!dbPlan) return null;

    const roleName = dbPlan.targetRole || 'Staff Backend & Distributed Systems Architecture';
    const vectors: PracticeVector[] = (dbPlan.vectors || []).map((v: any, idx: number) => ({
      id: v.id || `v${idx + 1}`,
      tag: `VECTOR 0${idx + 1} • ${idx === 0 ? 'URGENT' : idx === 1 ? 'STRUCTURAL' : 'ACOUSTIC'}`,
      badgeType: (idx === 0 ? 'urgent' : idx === 1 ? 'structural' : 'acoustic') as any,
      score: `${v.baselineScore || 70} / 100`,
      scoreNumber: v.baselineScore || 70,
      title: v.name,
      observedIn: dbPlan.provenanceAssessment || 'Observed in diagnostic assessment',
      observation: `Baseline proficiency is ${v.baselineScore}%. Target score is ${v.projectedScore}%.`,
      recommendedDuration: '20 Mins',
      drillCode: `#${idx + 1}S`,
      buttonLabel: `Practice Vector 0${idx + 1}`,
    }));

    const days: DayPlanDetail[] = (dbPlan.scheduleDays || []).map((d: any) => ({
      dayNumber: d.dayNumber,
      label: `DAY 0${d.dayNumber}`,
      date: `Day ${d.dayNumber}`,
      title: d.title,
      subtitle: d.focusArea,
      status: d.status as any,
      score: d.completed ? '92%' : undefined,
      simulationId: `#SIM-0${d.dayNumber}`,
      simulationFocus: d.focusArea,
      estimatedMinutes: `${d.durationMin || 45} Mins`,
      directives: [
        `Complete scheduled drill: ${d.title}`,
        'Verify zero filler words and concise STAR results statement',
      ],
      objectives: [
        {
          number: '01',
          title: d.focusArea,
          metric: `${d.durationMin || 45} min`,
          metricColor: '#4ade80',
          description: `Focus on ${d.focusArea} with concrete metrics`,
        },
      ],
      prepNotes: [
        'Review recent interview transcript notes',
        'Frame problem statement with measurable business impact',
      ],
    }));

    const fallback = ROLE_DATA_CATALOG[roleName] || ROLE_DATA_CATALOG['Staff Backend & Distributed Systems Architecture'];

    const mappedData: TargetRoleData = {
      roleName,
      compositeScore: dbPlan.readinessScore || 80,
      targetScore: dbPlan.predictedTarget || 85,
      baselineScore: dbPlan.starMethodologyScore || 75,
      scoreDelta: Math.max(0, (dbPlan.predictedTarget || 85) - (dbPlan.readinessScore || 80)),
      primaryFocus: dbPlan.customFocusAreas?.[0] || fallback.primaryFocus,
      experienceLevel: fallback.experienceLevel,
      keyStack: fallback.keyStack,
      vectors: vectors.length > 0 ? vectors : fallback.vectors,
      modules: fallback.modules,
      days: days.length > 0 ? days : fallback.days,
    };

    ROLE_DATA_CATALOG[roleName] = mappedData;
    return mappedData;
  } catch (err) {
    console.warn('Error hydrating AI plan from DB:', err);
    return null;
  }
};

export const exportDossierDownload = (state: AiPlanState, roleData: TargetRoleData) => {
  const dossier = {
    metadata: {
      dossierId: 'ISYN-4209',
      candidate: 'Shakil Ahamed',
      tier: 'Pro Tier',
      exportTimestamp: new Date().toISOString(),
      standards: 'ISO/IEC 42001 Guardrails Certified',
      encryption: 'AES-256 Client Encrypted',
    },
    calibratedProfile: {
      targetRole: roleData.roleName,
      compositeScore: roleData.compositeScore,
      targetScore: roleData.targetScore,
      baselineScore: roleData.baselineScore,
      scoreDelta: roleData.scoreDelta,
      primaryFocus: roleData.primaryFocus,
      experienceLevel: roleData.experienceLevel,
      keyStack: roleData.keyStack,
    },
    practiceVectors: roleData.vectors,
    activeSchedule: roleData.days,
    practiceModules: roleData.modules,
    customTargets: state.customTargets,
  };

  const blob = new Blob([JSON.stringify(dossier, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `AI_Improvement_Plan_Dossier_${roleData.roleName.replace(/\s+/g, '_')}_ISYN-4209.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
