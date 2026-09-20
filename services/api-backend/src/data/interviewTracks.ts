export interface InterviewTrack {
  trackId: string;
  name: string;
  domain: string;
  skills: string[];
  difficulty: string;
  seniorityFit: string[];
  questionsCount: number;
  estimatedDuration: string;
  responseMode: string;
  defaultRationale: string;
  rubricSummary: { title: string; weight: string; description: string }[];
  concurrencyTarget?: string;
}

export const INTERVIEW_TRACKS: InterviewTrack[] = [
  {
    trackId: 'SIM-ARCH-16',
    name: 'Staff Backend & Distributed Systems Architecture',
    domain: 'Distributed Systems',
    skills: ['Go', 'Kafka', 'Distributed Consensus', 'CAP Theorem', 'PostgreSQL', 'Raft', 'Paxos', 'Backend'],
    difficulty: 'Advanced (L6+)',
    seniorityFit: ['staff', 'principal', 'senior'],
    questionsCount: 6,
    estimatedDuration: '18-20 Mins',
    responseMode: 'Camera + Voice',
    defaultRationale: 'Staff-level depth on partitioning, consensus, and high-QPS systems.',
    concurrencyTarget: '250k QPS/SEC',
    rubricSummary: [
      { title: 'Distributed Systems Rigor', weight: '35%', description: 'Partitioning & Raft consensus' },
      { title: 'Architectural Trade-Offs', weight: '30%', description: 'CAP theorem & cost vs latency' },
      { title: 'Leadership & STAR', weight: '20%', description: 'Cross-org governance & mentoring' },
      { title: 'Communication Clarity', weight: '15%', description: 'Concise executive pacing' },
    ],
  },
  {
    trackId: 'SIM-STREAM-04',
    name: 'High-Throughput Streaming & Event-Driven Systems',
    domain: 'Distributed Infrastructure',
    skills: ['Kafka', 'Event Sourcing', 'Outbox Pattern', 'Go', 'Tail Latency', 'Backend'],
    difficulty: 'Advanced',
    seniorityFit: ['senior', 'staff'],
    questionsCount: 6,
    estimatedDuration: '15-18 Mins',
    responseMode: 'Camera + Voice',
    defaultRationale: 'Kafka partition rebalancing, idempotent consumers, and sub-10ms tail SLAs.',
    rubricSummary: [
      { title: 'Streaming Depth', weight: '40%', description: 'Kafka & event sourcing' },
      { title: 'Reliability Patterns', weight: '30%', description: 'Idempotency & outbox' },
      { title: 'Communication', weight: '30%', description: 'Trade-off articulation' },
    ],
  },
  {
    trackId: 'SIM-LEAD-08',
    name: 'Engineering Leadership & Architectural Reviews',
    domain: 'Staff Technical IC & Governance',
    skills: ['STAR Method', 'Architectural Governance', 'Conflict Resolution', 'RFC Authoring', 'Leadership'],
    difficulty: 'Advanced',
    seniorityFit: ['staff', 'principal', 'senior'],
    questionsCount: 5,
    estimatedDuration: '15-18 Mins',
    responseMode: 'Voice / Video',
    defaultRationale: 'STAR behavioral defense of cross-org technical decisions.',
    rubricSummary: [
      { title: 'STAR Structure', weight: '35%', description: 'Situation, task, action, result' },
      { title: 'Executive Framing', weight: '35%', description: 'Non-adversarial persuasion' },
      { title: 'Impact Metrics', weight: '30%', description: 'Quantified outcomes' },
    ],
  },
  {
    trackId: 'SIM-DB-02',
    name: 'Database Internals, Concurrency & Storage Engines',
    domain: 'Backend Storage',
    skills: ['PostgreSQL', 'MVCC', 'Redis', 'Distributed Locking', 'Query Tuning', 'SQL', 'Backend'],
    difficulty: 'Int-Adv',
    seniorityFit: ['mid', 'senior'],
    questionsCount: 6,
    estimatedDuration: '12-15 Mins',
    responseMode: 'System Audio',
    defaultRationale: 'PostgreSQL MVCC, distributed locking, and isolation levels.',
    rubricSummary: [
      { title: 'DB Internals', weight: '45%', description: 'MVCC & locking' },
      { title: 'Query Optimization', weight: '30%', description: 'Indexes & tuning' },
      { title: 'Communication', weight: '25%', description: 'Clarity' },
    ],
  },
  {
    trackId: 'SIM-CLOUD-11',
    name: 'Cloud Infrastructure Resilience & Kubernetes Observability',
    domain: 'Cloud & Reliability',
    skills: ['Kubernetes', 'AWS', 'DynamoDB', 'Chaos Engineering', 'Prometheus', 'DevOps', 'SRE'],
    difficulty: 'Intermediate',
    seniorityFit: ['mid', 'senior'],
    questionsCount: 5,
    estimatedDuration: '15 Mins',
    responseMode: 'Camera + Voice',
    defaultRationale: 'Chaos engineering, pod disruption budgets, and ingress fallback.',
    rubricSummary: [
      { title: 'K8s Resilience', weight: '40%', description: 'PDBs & ingress' },
      { title: 'Observability', weight: '30%', description: 'Prometheus & tracing' },
      { title: 'Chaos & Recovery', weight: '30%', description: 'Failure modes' },
    ],
  },
  {
    trackId: 'SIM-FE-05',
    name: 'Senior Frontend Architecture & Performance',
    domain: 'Frontend',
    skills: ['React', 'TypeScript', 'Web Performance', 'State Management', 'Frontend', 'Next.js'],
    difficulty: 'Advanced',
    seniorityFit: ['senior', 'staff'],
    questionsCount: 5,
    estimatedDuration: '14-16 Mins',
    responseMode: 'Camera + Voice',
    defaultRationale: 'React rendering internals, hydration, and Core Web Vitals at scale.',
    rubricSummary: [
      { title: 'React Depth', weight: '40%', description: 'Reconciliation & hydration' },
      { title: 'Performance', weight: '35%', description: 'Core Web Vitals' },
      { title: 'Architecture', weight: '25%', description: 'Module boundaries' },
    ],
  },
  {
    trackId: 'SIM-ML-07',
    name: 'Applied Machine Learning Systems Design',
    domain: 'ML Engineering',
    skills: ['Machine Learning', 'PyTorch', 'MLOps', 'Feature Stores', 'Python', 'AI'],
    difficulty: 'Advanced',
    seniorityFit: ['senior', 'staff'],
    questionsCount: 6,
    estimatedDuration: '18 Mins',
    responseMode: 'Camera + Voice',
    defaultRationale: 'Feature stores, training pipelines, and model serving at scale.',
    rubricSummary: [
      { title: 'ML Systems', weight: '45%', description: 'Serving & retraining' },
      { title: 'Data Pipelines', weight: '30%', description: 'Feature stores' },
      { title: 'Business Impact', weight: '25%', description: 'Metric tradeoffs' },
    ],
  },
  {
    trackId: 'SIM-MOBILE-09',
    name: 'Mobile Engineering: Cross-Platform Architecture',
    domain: 'Mobile',
    skills: ['Flutter', 'Dart', 'React Native', 'iOS', 'Android', 'Mobile'],
    difficulty: 'Intermediate',
    seniorityFit: ['mid', 'senior'],
    questionsCount: 5,
    estimatedDuration: '13-15 Mins',
    responseMode: 'Camera + Voice',
    defaultRationale: 'Cross-platform state management, offline sync, and release engineering.',
    rubricSummary: [
      { title: 'Mobile Architecture', weight: '40%', description: 'State & sync' },
      { title: 'Platform Depth', weight: '35%', description: 'iOS/Android specifics' },
      { title: 'Release Ops', weight: '25%', description: 'CI/CD & rollout' },
    ],
  },
  {
    trackId: 'SIM-SEC-12',
    name: 'Application Security & Threat Modeling',
    domain: 'Security',
    skills: ['Security', 'OWASP', 'Threat Modeling', 'Cryptography', 'Auth'],
    difficulty: 'Advanced',
    seniorityFit: ['senior', 'staff'],
    questionsCount: 5,
    estimatedDuration: '15 Mins',
    responseMode: 'Voice / Video',
    defaultRationale: 'STRIDE threat modeling, secret rotation, and zero-trust architecture.',
    rubricSummary: [
      { title: 'Threat Modeling', weight: '40%', description: 'STRIDE & attack trees' },
      { title: 'Crypto Depth', weight: '30%', description: 'Primitives & protocols' },
      { title: 'Response Posture', weight: '30%', description: 'IR & recovery' },
    ],
  },
  {
    trackId: 'SIM-DATA-14',
    name: 'Data Engineering & Analytics Pipelines',
    domain: 'Data',
    skills: ['Spark', 'Airflow', 'Snowflake', 'SQL', 'Python', 'Data Engineering', 'ETL'],
    difficulty: 'Intermediate',
    seniorityFit: ['mid', 'senior'],
    questionsCount: 5,
    estimatedDuration: '14 Mins',
    responseMode: 'System Audio',
    defaultRationale: 'Batch and streaming ETL, orchestration, and warehouse modeling.',
    rubricSummary: [
      { title: 'Pipeline Design', weight: '45%', description: 'Batch & streaming' },
      { title: 'Modeling', weight: '30%', description: 'Dimensional & lakehouse' },
      { title: 'Operations', weight: '25%', description: 'Backfills & lineage' },
    ],
  },
];
