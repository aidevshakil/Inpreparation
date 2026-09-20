export interface PracticeVectorDef {
  category: string;
  name: string;
  baselineScore: number;
  projectedScore: number;
}

export interface PracticeModuleDef {
  category: string;
  title: string;
  recommendedMin: number;
  priority: string;
}

export interface ScheduleDayDef {
  dayNumber: number;
  title: string;
  focusArea: string;
  durationMin: number;
  drills: string[];
}

export const PRACTICE_VECTOR_CATALOG: PracticeVectorDef[] = [
  { category: 'technical', name: 'P99 Tail-Latency SLA Justification under Network Partition', baselineScore: 68, projectedScore: 86 },
  { category: 'star', name: 'STAR Impact Quantification in Distributed Incident Post-Mortems', baselineScore: 72, projectedScore: 88 },
  { category: 'communication', name: 'Acoustic Pacing & Vocal Pitch Compression during Failure Mode Drills', baselineScore: 74, projectedScore: 85 },
  { category: 'systemDesign', name: 'CPython GIL vs Tokio Thread-Pool Concurrency Articulation', baselineScore: 70, projectedScore: 90 },
  { category: 'behavioral', name: 'Executive Framing of Cross-Org Technical Decisions', baselineScore: 71, projectedScore: 87 },
  { category: 'pacing', name: 'Steady-Cadence Delivery under High-Pressure Prompts', baselineScore: 73, projectedScore: 86 },
  { category: 'structure', name: 'BLUF-First Response Structuring for Ambiguous Prompts', baselineScore: 70, projectedScore: 88 },
  { category: 'gaze', name: 'Sustained Gaze Alignment during Whiteboard Deep-Dives', baselineScore: 75, projectedScore: 88 },
];

export const PRACTICE_MODULE_CATALOG: PracticeModuleDef[] = [
  { category: 'systemDesign', title: 'Sub-5ms Epoll Latency & ProcessPool Isolation Drill', recommendedMin: 25, priority: 'CRITICAL FOCUS' },
  { category: 'technical', title: 'Split-Brain Quorum & Raft Leader Election State Machine', recommendedMin: 30, priority: 'CRITICAL FOCUS' },
  { category: 'star', title: 'STAR Structural Velocity & Non-Technical Executive Framing', recommendedMin: 20, priority: 'HIGH PRIORITY' },
  { category: 'communication', title: 'Controlled Pitch Modulation under Contention Scenarios', recommendedMin: 15, priority: 'FOUNDATIONAL' },
  { category: 'behavioral', title: 'Cross-Org Conflict Resolution Behavioral Deep-Dive', recommendedMin: 20, priority: 'HIGH PRIORITY' },
  { category: 'pacing', title: 'Metronome-Guided Response Pacing Drill', recommendedMin: 15, priority: 'FOUNDATIONAL' },
  { category: 'structure', title: 'BLUF & Pyramid Principle Answer Structuring', recommendedMin: 20, priority: 'HIGH PRIORITY' },
  { category: 'gaze', title: 'Gaze & Camera-Framing Coaching', recommendedMin: 10, priority: 'FOUNDATIONAL' },
];

export const SCHEDULE_DAY_CATALOG: ScheduleDayDef[] = [
  { dayNumber: 1, title: 'STAR Incident Calibration', focusArea: 'Quantified Metrics & Pacing', durationMin: 35, drills: ['Drill #ST-101', 'Drill #AC-204'] },
  { dayNumber: 2, title: 'GIL & Kernel Epoll Deep-Dive', focusArea: 'Concurrency & Runtimes', durationMin: 45, drills: ['Drill #SYS-301', 'Drill #SYS-302'] },
  { dayNumber: 3, title: 'Distributed Consensus & Raft', focusArea: 'Partition Tolerances & Quorum', durationMin: 40, drills: ['Drill #RAFT-101'] },
  { dayNumber: 4, title: 'Live Deliberate Practice', focusArea: 'Consensus Replication Walkthrough', durationMin: 50, drills: ['Drill #SYS-404', 'Acoustic Compression #AC-301'] },
  { dayNumber: 5, title: 'Post-Mortem Executive Framing', focusArea: 'Behavioral Leadership & Blameless Culture', durationMin: 35, drills: ['Drill #EXEC-102'] },
  { dayNumber: 6, title: 'Full Simulation Dry Run', focusArea: 'Multi-Variant Staff Assessment', durationMin: 60, drills: ['Sim #SIM-9001'] },
  { dayNumber: 7, title: 'Comprehensive Diagnostic Benchmark', focusArea: 'Final Readiness Validation', durationMin: 45, drills: ['Final Evaluation'] },
];
