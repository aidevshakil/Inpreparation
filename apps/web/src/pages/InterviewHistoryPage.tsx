import React, { useEffect, useMemo, useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { InterviewHistoryKpiCards, InterviewHistoryKpiData } from '../components/interview-history/InterviewHistoryKpiCards';
import { InterviewHistoryFilterBar } from '../components/interview-history/InterviewHistoryFilterBar';
import { InterviewHistorySessionList, HistorySessionItem } from '../components/interview-history/InterviewHistorySessionList';
import { InterviewHistoryDossierDrawer, DossierSessionDetail } from '../components/interview-history/InterviewHistoryDossierDrawer';
import { InterviewHistoryPolicyBanner } from '../components/interview-history/InterviewHistoryPolicyBanner';
import { useAuth } from '../context/AuthContext';
import { getUserSimulationHistory } from '../services/api';

interface InterviewHistoryPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToAssessment?: () => void;
  onNavigateToPerformance?: () => void;
  onNavigateToResult?: (sessionId?: string) => void;
}

interface RawSession {
  id: string;
  roleTrack: string;
  seniorityLevel: string;
  overallScore: number;
  technicalScore: number;
  structureScore: number;
  pacingScore: number;
  gazeScore: number;
  wpmAverage: number;
  fillerCount: number;
  durationSeconds: number;
  status: string;
  feedbackSummary: string | null;
  createdAt: string;
  answers?: Array<{
    id: string;
    questionNumber: number;
    starScore: number;
    coachingNotes: string | null;
  }>;
}

const formatDate = (iso: string): string => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs.toString().padStart(2, '0')}s total`;
};

const shortCode = (id: string): string => `#SIM-${id.slice(-6).toUpperCase()}`;

const scoreBand = (score: number): { text: string; color: string } => {
  if (score >= 85) return { text: 'STRONG', color: '#38bdf8' };
  if (score >= 78) return { text: 'SOLID', color: '#818cf8' };
  if (score >= 70) return { text: 'DEVELOPING', color: '#fbbf24' };
  return { text: 'FOUNDATIONAL', color: '#f87171' };
};

const mapToHistoryItem = (s: RawSession): HistorySessionItem => {
  const answersCount = s.answers?.length ?? 0;
  const totalQuestions = Math.max(5, answersCount);
  const isCompleted = s.status === 'completed';
  const isInProgress = s.status === 'in_progress';
  const band = scoreBand(s.overallScore);

  return {
    id: s.id,
    codeBadge: shortCode(s.id),
    title: s.roleTrack,
    subtext: `${s.seniorityLevel} • Rubric v4.2 Deterministic`,
    date: formatDate(s.createdAt),
    duration: formatDuration(s.durationSeconds),
    progressText: isCompleted
      ? `${answersCount}/${totalQuestions} Defended`
      : isInProgress
        ? `${answersCount}/${totalQuestions} In Progress`
        : `${answersCount}/${totalQuestions} Synthesizing`,
    progressPercent: isCompleted ? 100 : Math.round((answersCount / totalQuestions) * 100),
    statusType: isCompleted ? 'defended' : isInProgress ? 'in_progress' : 'synthesizing',
    score: isCompleted ? s.overallScore : undefined,
    scoreStatusText: isCompleted ? band.text : 'Score Pending',
    scoreStatusColor: isCompleted ? band.color : '#64748b',
    isPending: !isCompleted,
  };
};

const mapToDossier = (s: RawSession): DossierSessionDetail => {
  const strengths: string[] = [];
  if (s.technicalScore >= 85) strengths.push(`Strong technical rigor (${s.technicalScore}/100).`);
  if (s.structureScore >= 85) strengths.push(`Clear STAR structure with well-scoped narrative (${s.structureScore}/100).`);
  if (s.pacingScore >= 85) strengths.push(`Measured pacing under time pressure (${s.pacingScore}/100).`);
  if (strengths.length === 0 && s.feedbackSummary) strengths.push(s.feedbackSummary);

  const weakest = Math.min(s.technicalScore, s.structureScore, s.pacingScore);
  let growthVector: string | undefined;
  let growthDetail: string | undefined;
  if (weakest < 80) {
    if (weakest === s.pacingScore) {
      growthVector = 'Delivery Pacing';
      growthDetail = 'Focus on maintaining consistent WPM and reducing filler density in mid-answer transitions.';
    } else if (weakest === s.structureScore) {
      growthVector = 'Answer Structure';
      growthDetail = 'Tighten STAR framing — lead with situation-task, quantify results.';
    } else {
      growthVector = 'Technical Depth';
      growthDetail = 'Deepen precision in system-design tradeoffs and quantitative reasoning.';
    }
  }

  const durationMinutes = s.durationSeconds / 60;
  const fillerRatePct =
    durationMinutes > 0 ? Math.min(100, (s.fillerCount / (s.wpmAverage * durationMinutes)) * 100) : 0;

  return {
    id: s.id,
    codeBadge: shortCode(s.id),
    title: s.roleTrack,
    date: formatDate(s.createdAt),
    overallScore: s.overallScore,
    seniorityLevel: s.seniorityLevel,
    wpm: s.wpmAverage,
    fillerRatePct,
    gazeScore: s.gazeScore,
    strengths,
    growthVector,
    growthDetail,
  };
};

export const InterviewHistoryPage: React.FC<InterviewHistoryPageProps> = ({
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToCategories,
  onNavigateToSearch,
  onNavigateToAi,
  onNavigateToAssessment,
  onNavigateToPerformance,
  onNavigateToResult,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('history');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [rawSessions, setRawSessions] = useState<RawSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    if (!user?.id) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    getUserSimulationHistory(user.id)
      .then((res) => {
        if (cancelled) return;
        const history = (res?.history ?? []) as RawSession[];
        // newest first for UI
        const sorted = [...history].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        setRawSessions(sorted);
        if (sorted.length > 0) setSelectedSessionId(sorted[0].id);
      })
      .catch((err) => console.warn('Failed to load simulation history:', err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  const filteredSessions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return rawSessions.filter((s) => {
      if (statusFilter !== 'all' && s.status !== statusFilter) return false;
      if (!q) return true;
      return (
        s.roleTrack.toLowerCase().includes(q) ||
        s.seniorityLevel.toLowerCase().includes(q) ||
        (s.feedbackSummary?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [rawSessions, searchQuery, statusFilter]);

  const sessionItems = useMemo(() => filteredSessions.map(mapToHistoryItem), [filteredSessions]);

  const kpiData: InterviewHistoryKpiData = useMemo(() => {
    const completed = rawSessions.filter((s) => s.status === 'completed');
    const inProgress = rawSessions.filter((s) => s.status === 'in_progress');
    const processing = rawSessions.filter((s) => s.status !== 'completed' && s.status !== 'in_progress');
    const defendedQuestions = completed.reduce((acc, s) => acc + (s.answers?.length ?? 0), 0);
    const avg =
      completed.length > 0
        ? completed.reduce((acc, s) => acc + s.overallScore, 0) / completed.length
        : 0;
    const first = completed[completed.length - 1];
    const baselineDelta = first && completed.length > 1 ? avg - first.overallScore : 0;
    const latest = rawSessions[0] ?? null;

    return {
      totalSessions: rawSessions.length,
      completedCount: completed.length,
      inProgressCount: inProgress.length,
      processingCount: processing.length,
      defendedQuestions,
      averageBenchmark: avg,
      baselineDelta,
      latestSessionCode: latest ? shortCode(latest.id) : null,
      latestScore: latest?.status === 'completed' ? latest.overallScore : null,
      latestDate: latest ? formatDate(latest.createdAt) : null,
      latestTitle: latest ? latest.roleTrack : null,
    };
  }, [rawSessions]);

  const selectedDossier = useMemo(() => {
    if (!selectedSessionId) return null;
    const raw = rawSessions.find((s) => s.id === selectedSessionId);
    return raw ? mapToDossier(raw) : null;
  }, [rawSessions, selectedSessionId]);

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'search' && onNavigateToSearch) onNavigateToSearch();
    else if (key === 'performance' && onNavigateToPerformance) onNavigateToPerformance();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
    else if (key === 'assessment' && onNavigateToAssessment) onNavigateToAssessment();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#07090e',
        color: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <DashboardNavbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 65px)', overflow: 'hidden' }}>
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          creditsRemaining={user?.creditsRemaining ?? 840}
          totalCredits={user?.totalCredits ?? 1000}
        />

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              padding: '28px 32px 64px 32px',
              maxWidth: '1440px',
              width: '100%',
              margin: '0 auto',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '16px' }}>
              Candidate Studio / Preparation / Active Module
            </div>

            <InterviewHistoryKpiCards data={kpiData} />

            <InterviewHistoryFilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              statusFilter={statusFilter}
              onStatusFilterChange={setStatusFilter}
              totalCount={rawSessions.length}
              filteredCount={filteredSessions.length}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.9fr) minmax(320px, 1.1fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              <InterviewHistorySessionList
                sessions={sessionItems}
                selectedSessionId={selectedSessionId}
                onSelectSession={setSelectedSessionId}
                loading={loading}
              />

              <InterviewHistoryDossierDrawer
                session={selectedDossier}
                onOpenDebrief={() =>
                  selectedSessionId && onNavigateToResult && onNavigateToResult(selectedSessionId)
                }
              />
            </div>

            <InterviewHistoryPolicyBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewHistoryPage;
