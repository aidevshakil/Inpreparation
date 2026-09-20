export const ROLE_DATA_CATALOG: Record<string, any> = {
  'Staff Backend & Distributed Systems Architecture': {
    roleName: 'Staff Backend & Distributed Systems Architecture',
    compositeScore: 80.0,
    targetScore: 85.0,
    baselineScore: 74.8,
    scoreDelta: 5.2,
    primaryFocus: 'Sub-80 Boundary & Concurrency',
    experienceLevel: 'Senior (L5 transitioning to L6 Staff)',
    keyStack: 'Python, Raft, Rate Limiting, PgBouncer',
    vectors: [
      { id: 'v1', tag: 'VECTOR 01 • URGENT', badgeType: 'urgent', score: '69.0 / 100', scoreNumber: 69.0, title: 'Distributed Backpressure & Token-Bucket Clock Drift', observedIn: 'Observed in #SIM-PY-8821 Q4 (Question Performance #41)', observation: 'Candidate omitted full-jitter exponential backoff in Redis Lua script and failed clock drift reconciliation under burst ingress across multiple availability zones.', recommendedDuration: '15 Mins (#42S)', drillCode: '#42S', buttonLabel: 'Practice Vector 01' },
      { id: 'v2', tag: 'VECTOR 02 • STRUCTURAL', badgeType: 'structural', score: '76.4 / 100', scoreNumber: 76.4, title: 'Exhaustive Completeness & Failure Trade-off Proofs', observedIn: 'Observed in Communication Analytics #38', observation: 'Candidate truncated distributed failure modes when concluding under 90 seconds. Minto Pyramid adherence dropped to 72% on quantitative trade-off evidence.', recommendedDuration: '20 Mins (#38)', drillCode: '#38', buttonLabel: 'Practice Vector 02' },
      { id: 'v3', tag: 'VECTOR 03 • ACOUSTIC/OPTIC', badgeType: 'acoustic', score: '84% Alignment', scoreNumber: 84.0, title: 'Optical Framing Consistency During Whiteboard Articulation', observedIn: 'Observed in Presentation Analytics #40', observation: 'Candidate tilted 6.2° horizontally and shifted out of the primary center cone during Question 4 diagram explanation, lowering visual authority metrics.', recommendedDuration: '5 Mins (#40)', drillCode: '#40', buttonLabel: 'Calibrate Framing' },
    ],
    modules: {
      technical: [
        { id: 'm-tc-1', code: 'DRILL #TC-12', score: '69/100', title: 'Redis Lua Script Atomic Boundary', description: 'Practice writing and explaining single-threaded EVAL scripts with deterministic key-hashing logic.', tag: '12 Mins • Code + Oral', duration: '12 Mins', rolePrompt: 'Technical Drill: Single-Threaded Redis Lua Script Atomicity & Sharded Key Hashes' },
        { id: 'm-tc-2', code: 'DRILL #TC-18', score: '76/100', title: 'PgBouncer Pool Saturation Profiling', description: 'Simulates synchronous database contention and requires proposing session-level connection pooling.', tag: '15 Mins • Architecture', duration: '15 Mins', rolePrompt: 'Architecture Drill: PostgreSQL Connection Saturation & PgBouncer Session Pooling' },
        { id: 'm-tc-3', code: 'DRILL #TC-24', score: '84/100', title: 'Raft Quorum Heartbeats & Split-Brain', description: 'Verbal defense of leader leases and epoch counter enforcement under network partition.', tag: '10 Mins • Verbal Defense', duration: '10 Mins', rolePrompt: 'Verbal Defense Drill: Raft Quorum Heartbeats, Split-Brain & Leader Leases' },
      ],
      communication: [
        { id: 'm-cm-1', code: 'DRILL #CM-08', score: '72/100', title: 'BLUF 20-Second Atomic Invariant Lead', description: 'Enforces stating the top-line distributed invariant within the opening 20 seconds before elaborating.', tag: '8 Mins • Verbal Framing', duration: '8 Mins', rolePrompt: 'Communication Drill: BLUF Bottom-Line-Up-Front 20-Second Architecture Opening' },
        { id: 'm-cm-2', code: 'DRILL #CM-14', score: '78/100', title: 'Minto Pyramid Trade-off Hierarchy', description: 'Structure 3-pillar engineering decisions using quantitative latency, throughput, and memory bounds.', tag: '12 Mins • Structural Defense', duration: '12 Mins', rolePrompt: 'Structure Drill: Minto Pyramid 3-Pillar Quantitative Trade-off Defense' },
        { id: 'm-cm-3', code: 'DRILL #CM-21', score: '85/100', title: 'Executive Summary Closing Synthesis', description: 'Deliver a crisp 30-second final wrap-up synthesizing constraints, telemetry guards, and next steps.', tag: '6 Mins • Executive Delivery', duration: '6 Mins', rolePrompt: 'Closing Synthesis Drill: 30-Second Executive Summary & Boundary Safeguards' },
      ],
      speech: [
        { id: 'm-sp-1', code: 'DRILL #SP-04', score: '74/100', title: 'Filler Token Suppression (Um / Like)', description: 'Eliminate cognitive hesitation tokens during complex architecture calculations and diagramming pauses.', tag: '10 Mins • Acoustic Filter', duration: '10 Mins', rolePrompt: 'Speech Calibration: Filler Token Elimination During Whiteboard Architecture' },
        { id: 'm-sp-2', code: 'DRILL #SP-11', score: '81/100', title: 'Cadence Control (135–148 WPM Band)', description: 'Train vocal pacing to prevent rushed delivery during intense technical edge-case cross-examination.', tag: '14 Mins • Pacing Trainer', duration: '14 Mins', rolePrompt: 'Cadence Calibration: 140 WPM Stable Pacing Under Technical Pressure' },
        { id: 'm-sp-3', code: 'DRILL #SP-19', score: '88/100', title: 'Resonant Authority & Pitch Inflection', description: 'Maintain commanding vocal inflection and steady breath support throughout multi-minute system proofs.', tag: '8 Mins • Vocal Dynamics', duration: '8 Mins', rolePrompt: 'Vocal Presence Drill: Resonance & Pitch Inflection for Staff Engineers' },
      ],
    },
    days: [
      { dayNumber: 1, label: 'DAY 01', date: 'Oct 21 • 5 Questions Defended', title: 'Asyncio Loop & GIL Contention', subtitle: 'Python Concurrency', status: 'completed', score: '86/100', simulationId: 'SIM-PY-9101', simulationFocus: 'Python Event Loop, Thread Pools, and GIL Lock Eviction', estimatedMinutes: '35 Mins',
        directives: ['State event loop threading architecture before discussing async libraries.', 'Quantify CPU-bound offloading vs I/O-bound cooperative multitasking.', 'Maintain steady 140 WPM pacing without hesitation tokens.'],
        objectives: [
          { number: '01', title: 'GIL Lock Boundaries', metric: '< 15s Window', metricColor: '#38bdf8', description: 'Explain PyEval_SaveThread boundary semantics for C-extension task offloading.' },
          { number: '02', title: 'Thread Pool Saturation', metric: 'Quantitative Limits', metricColor: '#a855f7', description: 'Define exact max_workers sizing formulas based on core count and IO wait multiplier.' },
          { number: '03', title: 'Cooperative Yielding', metric: 'Deterministic Loops', metricColor: '#f43f5e', description: 'Identify starvation risks when tight computation loops omit asyncio.sleep(0) yield points.' },
          { number: '04', title: 'Optical Frame Center', metric: '> 92% Gaze Lock', metricColor: '#38bdf8', description: 'Maintain upright posture within primary cone during code trace walk-through.' },
        ],
        prepNotes: ['CPython GIL release occurs during blocking I/O calls via Py_BEGIN_ALLOW_THREADS.', 'Asyncio runs on a single thread; CPU-bound tasks must be executed via concurrent.futures.ProcessPoolExecutor.', 'Demonstrate knowledge of uvloop as a drop-in libuv replacement.'],
      },
      { dayNumber: 2, label: 'DAY 02', date: 'Oct 22 • 4 Diagnostic Scenarios', title: 'Communication & BLUF Framing', subtitle: 'Answer Structure', status: 'completed', score: '82/100', simulationId: 'SIM-PY-9102', simulationFocus: 'BLUF Framing and Structured 3-Pillar Answer Hierarchy', estimatedMinutes: '40 Mins',
        directives: ['State high-level system decision within opening 20 seconds.', 'Group architecture into Ingress, Storage, and Telemetry tiers.', 'Conclude with quantifiable latency and fault recovery bounds.'],
        objectives: [
          { number: '01', title: 'Top-Line Executive Thesis', metric: '< 20s Opening', metricColor: '#38bdf8', description: 'State the chosen architectural tradeoff before walking through component blocks.' },
          { number: '02', title: 'Minto Structural Grouping', metric: '3-Pillar Framework', metricColor: '#a855f7', description: 'Ensure each architecture layer maps back to core SLOs and SLA guarantees.' },
          { number: '03', title: 'Failure Mode Defense', metric: 'P99.9 Recovery', metricColor: '#f43f5e', description: 'Explicitly describe fallback behavior when cache tier suffers cold reboot.' },
          { number: '04', title: 'Visual Presence', metric: '> 90% Gaze Lock', metricColor: '#38bdf8', description: 'Maintain level eyeline to lens when delivering critical trade-off thesis.' },
        ],
        prepNotes: ['BLUF (Bottom Line Up Front) reduces listener cognitive load by 40%.', 'Use MECE (Mutually Exclusive, Collectively Exhaustive) partitions when categorizing bottlenecks.', 'Always cite P99 numbers rather than average latencies.'],
      },
      { dayNumber: 3, label: 'DAY 03', date: 'Oct 23 • Redlock & ZooKeeper Deep Dive', title: 'Distributed Lock & Fencing Tokens', subtitle: 'Consensus & Leases', status: 'completed', score: '84/100', simulationId: 'SIM-PY-9103', simulationFocus: 'Distributed Mutexes, ZooKeeper Ephemeral Nodes, and Fencing Tokens', estimatedMinutes: '35 Mins',
        directives: ['Explain why simple Redis SETNX with TTL is unsafe under Martin Kleppmann GC pause scenarios.', 'Describe monotonically incrementing fencing tokens at the storage layer.', 'Compare Redlock clock-drift assumptions with Paxos/Raft linearizable reads.'],
        objectives: [
          { number: '01', title: 'GC Pause Vulnerability', metric: '< 25s Explanation', metricColor: '#38bdf8', description: 'Demonstrate how client GC pauses allow lock lease expiration while client still acts.' },
          { number: '02', title: 'Fencing Token Enforcement', metric: 'Storage Invariant', metricColor: '#a855f7', description: 'Show how database validates token version N > last_seen_token to reject stale writes.' },
          { number: '03', title: 'Consensus Leader Leases', metric: 'Clock Skew Bound', metricColor: '#f43f5e', description: 'Analyze physical clock drift vs true-time sync in consensus heartbeats.' },
          { number: '04', title: 'Whiteboard Optical Alignment', metric: '> 88% Cone', metricColor: '#38bdf8', description: 'Keep chest visible while sketching lock acquisition timeline sequence diagram.' },
        ],
        prepNotes: ['Martin Kleppmann critique of Redlock: Redis uses physical clocks, which cannot guarantee mutual exclusion without fencing tokens.', 'Chubby & ZooKeeper utilize sequence numbers as native fencing tokens.', 'Database storage layer MUST enforce monotonicity to achieve safety.'],
      },
      { dayNumber: 4, label: 'DAY 04', date: 'Oct 24 • Flagged Vector Triggered #41', title: 'Technical Answer Completeness & Boundary Trade-off Proofs', subtitle: 'Rate Limiter Backpressure Defense', status: 'active', score: '69/100', simulationId: 'SIM-PY-9204', simulationFocus: 'Staff Backend & Concurrency Defense Simulation (Flagged Vector #41)', estimatedMinutes: '35–45 minutes total',
        directives: ['Lead immediately with the core distributed invariant (e.g. CAS atomicity or quorum write guarantees) within first 25 seconds.', 'Quantify Redis memory overhead vs local in-process cache hit ratios under thundering herds. Do not use generic words.', 'Explicitly detail NTP clock skew reconciliation and fencing token validation during network partition split-brain scenarios.'],
        objectives: [
          { number: '01', title: 'BLUF Framing', metric: '< 25s Window', metricColor: '#38bdf8', description: 'Lead immediately with the core distributed invariant (e.g., CAS atomicity or quorum write guarantees) before dissecting architecture.' },
          { number: '02', title: 'Concrete Trade-offs', metric: 'Numbers > Adjectives', metricColor: '#a855f7', description: 'Quantify Redis memory overhead vs local in-process cache hit ratios under thundering herds. Do not use generic words like "fast" or "heavy".' },
          { number: '03', title: 'Boundary Defense', metric: 'P99.9 Edge Cases', metricColor: '#f43f5e', description: 'Explicitly detail NTP clock skew reconciliation and fencing token validation during network partition split-brain scenarios.' },
          { number: '04', title: 'Optical Framing', metric: '> 90% Gaze Lock', metricColor: '#38bdf8', description: 'Maintain chest-up framing cone and direct lens gaze while organizing spontaneous architecture calculations on your scratchpad.' },
        ],
        prepNotes: ['Token-Bucket with Redis: Use EVAL to run decrement and refill atomically in a single script.', 'Under burst ingress across multiple availability zones, local in-memory token buffers reduce cross-AZ network hop latencies by 85%.', 'HTTP 429 response must include Retry-After header with exponential jitter to prevent synchronized retry waves.'],
      },
      { dayNumber: 5, label: 'DAY 05', date: 'Oct 25 • Est. 30m', title: 'Distributed Consensus & Clock Drift Under GC Pauses', subtitle: 'Storage Engines & Consensus', status: 'locked', score: 'Est. 30m', simulationId: 'SIM-PY-9205', simulationFocus: 'Distributed Consensus, Raft Leader Leases, and Multi-Cluster Quorums', estimatedMinutes: '30 Mins',
        directives: ['State atomic invariants upfront using BLUF framing within the first 25 seconds.', 'Explicitly defend clock drift reconciliation trade-offs under high-throughput partition.', 'Maintain eye-line stability and optical center cone framing >90% throughout.'],
        objectives: [
          { number: '01', title: 'Leader Lease Monotonicity', metric: '< 20s Window', metricColor: '#38bdf8', description: 'Defend how Raft leader heartbeat renewals avoid split-brain when clock skews by 250ms.' },
          { number: '02', title: 'Quorum Read Guarantees', metric: 'Read-Index vs Lease', metricColor: '#a855f7', description: 'Compare performance and consistency guarantees between Read-Index and Leader Leases.' },
          { number: '03', title: 'Cascading Partition Failover', metric: 'Cluster Health', metricColor: '#f43f5e', description: 'Detail recovery sequence when minority cluster partition heals after 10 minutes of divergence.' },
          { number: '04', title: 'Gaze Stability', metric: '> 90% Lock', metricColor: '#38bdf8', description: 'Hold optical alignment while defending quorum mathematics.' },
        ],
        prepNotes: ['Raft Paper Section 8: Leader leases require bounded clock drift to ensure linearizability.', 'If physical clocks can drift unbounded, Read-Index verification through quorum roundtrip is mandatory.', 'Log compaction snapshots prevent unbounded memory growth in persistent state machines.'],
      },
      { dayNumber: 6, label: 'DAY 06', date: 'Oct 26 • Est. 45m', title: 'PostgreSQL Connection Pool & PgBouncer Starvation', subtitle: 'Storage Engines & Connection Pooling', status: 'locked', score: 'Est. 45m', simulationId: 'SIM-PY-9206', simulationFocus: 'PostgreSQL Thread Models, Transaction Isolation, and Pool Starvation', estimatedMinutes: '45 Mins',
        directives: ['Contrast PostgreSQL process-based connection model with MySQL thread pool architecture.', 'Analyze transaction-level vs session-level PgBouncer pooling implications on prepared statements.', 'Address connection leak detection under unhandled exception handlers.'],
        objectives: [
          { number: '01', title: 'Process Architecture Bottlenecks', metric: 'Memory & Context Switching', metricColor: '#38bdf8', description: 'Demonstrate why 500+ direct PostgreSQL connections degrade throughput due to context switching.' },
          { number: '02', title: 'Pool Mode Incompatibilities', metric: 'Session vs Transaction', metricColor: '#a855f7', description: 'Explain why transaction pooling breaks SET SESSION AUTHORIZATION and PREPARE statements.' },
          { number: '03', title: 'Connection Starvation Circuit Breakers', metric: 'P99.9 Shedding', metricColor: '#f43f5e', description: 'Propose queue length limits and fast-fail shed policies before pool exhaustion.' },
          { number: '04', title: 'Gaze Centering', metric: '> 88% Lock', metricColor: '#38bdf8', description: 'Maintain authoritative lens gaze while delivering database scaling calculations.' },
        ],
        prepNotes: ['Each Postgres backend process allocates ~5-10MB private RAM + shared buffers context overhead.', 'PgBouncer transaction pooling enables 10,000 client connections multiplexed onto 50 Postgres backends.', 'For prepared statements with transaction pooling, use protocol-level named prepares supported in modern PgBouncer.'],
      },
      { dayNumber: 7, label: 'DAY 07', date: 'Oct 27 • Evaluation', title: 'Staff L6 Capstone Mock: Cycle Audit & Synthesis', subtitle: 'Comprehensive Staff Defense Simulation', status: 'evaluation', score: 'Evaluation', simulationId: 'SIM-PY-9207', simulationFocus: 'Full 5-Question Staff L6 Capstone Mock Defense with Longitudinal Evaluation', estimatedMinutes: '50 Mins',
        directives: ['Defend end-to-end multi-region distributed system under catastrophic availability zone loss.', 'Maintain BLUF framing, quantitative trade-offs, and steady vocal cadence across all 5 prompts.', 'Achieve >= 85.0 composite score to certify transition into Staff Engineering band.'],
        objectives: [
          { number: '01', title: 'Full Capstone Synthesis', metric: '5-Prompt Defense', metricColor: '#38bdf8', description: 'Deliver comprehensive answers across systems, concurrency, leadership, and operational triage.' },
          { number: '02', title: 'Staff L6 Benchmark Attainment', metric: '>= 85.0 Composite', metricColor: '#a855f7', description: 'Outperform baseline 74.8 across all 14 technical skill vectors and 3 delivery channels.' },
          { number: '03', title: 'Longitudinal Delta Audit', metric: '+10.2 pt Horizon', metricColor: '#f43f5e', description: 'Verify empirical growth against initial Diagnostic Intake (#19) baseline scores.' },
          { number: '04', title: 'Executive Stage Presence', metric: '> 95% Gaze & Optical', metricColor: '#38bdf8', description: 'Demonstrate pristine visual stability and vocal authority throughout capstone mock.' },
        ],
        prepNotes: ['Staff L6 expectations emphasize strategic business alignment, operational maturity, and cross-functional leadership.', 'Show clear understanding of organizational blast radius and fail-safe rollout stages.', 'Cross-reference architecture with real-world post-mortems.'],
      },
    ],
  },

  'Principal Distributed Systems Architect': {
    roleName: 'Principal Distributed Systems Architect',
    compositeScore: 84.5,
    targetScore: 90.0,
    baselineScore: 78.2,
    scoreDelta: 6.3,
    primaryFocus: 'Consensus Invariants & Byzantine Faults',
    experienceLevel: 'Staff (L6 transitioning to L7 Principal)',
    keyStack: 'Paxos, TLA+, Consensus, eBPF, Distributed Storage',
    vectors: [
      { id: 'v1', tag: 'VECTOR 01 • URGENT', badgeType: 'urgent', score: '64.2 / 100', scoreNumber: 64.2, title: 'Multi-Paxos Quorum Intersections & Split-Brain Proofs', observedIn: 'Observed in Skill Analytics #37 (Consensus Invariant Track)', observation: 'Candidate struggled to formalize phase-1b promise reconciliation when concurrent proposers interleaved ballots under non-deterministic network delays.', recommendedDuration: '20 Mins (#42P)', drillCode: '#42P', buttonLabel: 'Practice Vector 01' },
      { id: 'v2', tag: 'VECTOR 02 • STRUCTURAL', badgeType: 'structural', score: '71.0 / 100', scoreNumber: 71.0, title: 'Formal Invariant Modeling & Proof Framing', observedIn: 'Observed in Communication Analytics #38', observation: 'Candidate jumped to implementation details before defining state-machine safety properties and linearizable read conditions.', recommendedDuration: '18 Mins (#38P)', drillCode: '#38P', buttonLabel: 'Practice Vector 02' },
      { id: 'v3', tag: 'VECTOR 03 • ACOUSTIC/OPTIC', badgeType: 'acoustic', score: '79% Alignment', scoreNumber: 79.0, title: 'Executive Strategic Cadence & Pitch Stability', observedIn: 'Observed in Speech Analytics #39', observation: 'Pacing accelerated to 162 WPM during Byzantine fault defense, compromising authoritative delivery.', recommendedDuration: '10 Mins (#39P)', drillCode: '#39P', buttonLabel: 'Calibrate Cadence' },
    ],
    modules: {
      technical: [
        { id: 'm-tc-p1', code: 'DRILL #PA-01', score: '64/100', title: 'Multi-Paxos Phase 1 & 2 Conflict Resolution', description: 'Defend ballot preemption and promise reconciliation under split-brain networks.', tag: '15 Mins • Formal Defense', duration: '15 Mins', rolePrompt: 'Principal Drill: Multi-Paxos Phase 1b Promise Reconciliation & Ballot Collisions' },
        { id: 'm-tc-p2', code: 'DRILL #PA-02', score: '72/100', title: 'TLA+ Safety Property Specification', description: 'Verbal articulation of temporal logic safety invariants and liveness guarantees.', tag: '15 Mins • Architecture', duration: '15 Mins', rolePrompt: 'Principal Drill: Temporal Logic Invariants & State Machine Safety Properties' },
        { id: 'm-tc-p3', code: 'DRILL #PA-03', score: '82/100', title: 'eBPF Kernel-Bypass High-Throughput I/O', description: 'Explain XDP packet filtering and ring-buffer zero-copy socket multiplexing.', tag: '12 Mins • Kernel Systems', duration: '12 Mins', rolePrompt: 'Principal Drill: eBPF XDP Packet Bypass & Zero-Copy Socket Ingress' },
      ],
      communication: [
        { id: 'm-cm-p1', code: 'DRILL #CM-P1', score: '71/100', title: 'Executive Whitepaper & Board Framing', description: 'Synthesize multi-year infrastructure roadmaps into crisp CAPEX/OPEX ROI proposals.', tag: '12 Mins • Strategic Delivery', duration: '12 Mins', rolePrompt: 'Strategic Framing Drill: Multi-Year Infrastructure Modernization Roadmap' },
        { id: 'm-cm-p2', code: 'DRILL #CM-P2', score: '80/100', title: 'Controversial Architectural Alignment', description: 'Navigating trade-offs between conflicting principal engineering stakeholders.', tag: '15 Mins • Negotiation', duration: '15 Mins', rolePrompt: 'Leadership Drill: Cross-Department Architectural Disagreement & Consensus' },
        { id: 'm-cm-p3', code: 'DRILL #CM-P3', score: '86/100', title: 'High-Stakes Technical Crisis De-escalation', description: 'Deliver structured situation reports during catastrophic regional cloud outages.', tag: '10 Mins • Incident Command', duration: '10 Mins', rolePrompt: 'Incident Command Drill: Multi-Region Outage Situation Briefing' },
      ],
      speech: [
        { id: 'm-sp-p1', code: 'DRILL #SP-P1', score: '76/100', title: 'Gravitas & Cadence Deceleration', description: 'Maintain measured 130 WPM speech tempo during high-cognitive-load proofs.', tag: '10 Mins • Tempo Trainer', duration: '10 Mins', rolePrompt: 'Principal Presence: Measured 130 WPM Gravitas & Breath Support' },
        { id: 'm-sp-p2', code: 'DRILL #SP-P2', score: '84/100', title: 'Question Socratic Reframing', description: 'Technique for clarifying ambiguous scope with commanding collaborative tone.', tag: '8 Mins • Verbal Strategy', duration: '8 Mins', rolePrompt: 'Socratic Framing Drill: Dissecting Underspecified Distributed Requirements' },
        { id: 'm-sp-p3', code: 'DRILL #SP-P3', score: '91/100', title: 'Tone Modulation for Multi-Tier Audiences', description: 'Seamlessly shift between assembly/kernel depth and C-suite business impact.', tag: '12 Mins • Register Shift', duration: '12 Mins', rolePrompt: 'Register Modulation Drill: Deep Systems Mechanics to Executive Strategy' },
      ],
    },
    days: [],
  },

  'Senior Site Reliability & Concurrency Engineer': {
    roleName: 'Senior Site Reliability & Concurrency Engineer',
    compositeScore: 82.0,
    targetScore: 88.0,
    baselineScore: 76.5,
    scoreDelta: 5.5,
    primaryFocus: 'P99 Latency & Connection Pooling',
    experienceLevel: 'Senior Engineer (IC5 transitioning to IC6)',
    keyStack: 'Linux Kernel, AsyncIO, PgBouncer, Envoy, Prometheus',
    vectors: [
      { id: 'v1', tag: 'VECTOR 01 • URGENT', badgeType: 'urgent', score: '67.5 / 100', scoreNumber: 67.5, title: 'Epoll Event Loop Exhaustion & Tail Latencies', observedIn: 'Observed in Skill Analytics #37 (Linux Kernel)', observation: 'Candidate struggled to diagnose socket starvation caused by head-of-line blocking in epoll dispatch loops under high packet queue depth.', recommendedDuration: '15 Mins (#SRE-01)', drillCode: '#SRE-01', buttonLabel: 'Practice Vector 01' },
      { id: 'v2', tag: 'VECTOR 02 • STRUCTURAL', badgeType: 'structural', score: '74.8 / 100', scoreNumber: 74.8, title: 'Root Cause Attribution Under Cascading Failures', observedIn: 'Observed in Communication Analytics #38', observation: 'Candidate offered multiple speculative diagnoses rather than using systematic binary search attribution across telemetry traces.', recommendedDuration: '18 Mins (#SRE-02)', drillCode: '#SRE-02', buttonLabel: 'Practice Vector 02' },
      { id: 'v3', tag: 'VECTOR 03 • ACOUSTIC/OPTIC', badgeType: 'acoustic', score: '81% Alignment', scoreNumber: 81.0, title: 'Stress-Resilient Cadence & Zero Filler Tokens', observedIn: 'Observed in Speech Analytics #39', observation: 'Vocal frequency rose by 45 Hz under simulated incident escalation, signaling perceived panic to interviewers.', recommendedDuration: '10 Mins (#SRE-03)', drillCode: '#SRE-03', buttonLabel: 'Calibrate Presence' },
    ],
    modules: {
      technical: [
        { id: 'm-sre-1', code: 'DRILL #SRE-11', score: '67/100', title: 'Linux Epoll & TCP Socket Buffer Tuning', description: 'Solve receive buffer overflow (SO_RCVBUF) and connection reset storms under syn-flood burst.', tag: '14 Mins • Kernel Systems', duration: '14 Mins', rolePrompt: 'SRE Drill: Linux TCP Buffer Tuning & Epoll Edge-Triggered Starvation' },
        { id: 'm-sre-2', code: 'DRILL #SRE-12', score: '75/100', title: 'Envoy Adaptive Concurrency Limits', description: 'Implement gradient controller algorithms to shed non-critical requests based on P99 round-trip time.', tag: '12 Mins • Service Mesh', duration: '12 Mins', rolePrompt: 'SRE Drill: Envoy Adaptive Concurrency Limits & Gradient Controller Tuning' },
        { id: 'm-sre-3', code: 'DRILL #SRE-13', score: '86/100', title: 'Post-Mortem & Remediation SLA Defense', description: 'Verbal defense of preventative engineering milestones following production database corruption.', tag: '10 Mins • Reliability Strategy', duration: '10 Mins', rolePrompt: 'SRE Drill: Comprehensive Post-Mortem Defense & Preventative Action Items' },
      ],
      communication: [
        { id: 'm-cm-s1', code: 'DRILL #CM-S1', score: '74/100', title: 'Structured Fault Tree Attribution', description: 'Walk through cascading failure paths using structured MECE branch elimination.', tag: '10 Mins • Triage Framing', duration: '10 Mins', rolePrompt: 'Triage Framing: Fault Tree Branch Elimination During Outage Investigation' },
        { id: 'm-cm-s2', code: 'DRILL #CM-S2', score: '81/100', title: 'SLO / Error Budget Negotiation', description: 'Explain to product stakeholders why deployment velocity must halt due to error budget burn.', tag: '12 Mins • Stakeholder Alignment', duration: '12 Mins', rolePrompt: 'SLO Defense: Halting Feature Deployments on 30-Day Error Budget Burn' },
        { id: 'm-cm-s3', code: 'DRILL #CM-S3', score: '89/100', title: 'Incident Commander Public Broadcast', description: 'Deliver concise 45-second company-wide status update on payment gateway degradation.', tag: '8 Mins • Crisis Broadcast', duration: '8 Mins', rolePrompt: 'Crisis Broadcast: 45-Second Incident Commander Live Update' },
      ],
      speech: [
        { id: 'm-sp-s1', code: 'DRILL #SP-S1', score: '79/100', title: 'Pitch Stabilization Under Interruption', description: 'Prevent pitch elevation when an interviewer abruptly interrupts your explanation.', tag: '10 Mins • Vocal Composure', duration: '10 Mins', rolePrompt: 'Vocal Composure: Maintaining Steady Low Register Under Harsh Interruption' },
        { id: 'm-sp-s2', code: 'DRILL #SP-S2', score: '85/100', title: 'Pacing Regulation During Time Pressure', description: 'Anchor vocal delivery at exactly 142 WPM when given 60 seconds to summarize root cause.', tag: '8 Mins • Pacing Trainer', duration: '8 Mins', rolePrompt: 'Pacing Trainer: 60-Second Rapid Summary at Exact 142 WPM' },
        { id: 'm-sp-s3', code: 'DRILL #SP-S3', score: '90/100', title: 'Crisp Terminal Articulation', description: 'End sentences with definitive falling inflections rather than questioning uptalk.', tag: '6 Mins • Delivery Polish', duration: '6 Mins', rolePrompt: 'Articulation Polish: Eliminating Uptalk on Technical Architecture Decisions' },
      ],
    },
    days: [],
  },

  'Staff Infrastructure & Platform Lead': {
    roleName: 'Staff Infrastructure & Platform Lead',
    compositeScore: 83.0,
    targetScore: 89.0,
    baselineScore: 77.0,
    scoreDelta: 6.0,
    primaryFocus: 'Kubernetes Multi-Cluster Scheduling & Service Mesh',
    experienceLevel: 'Staff Lead (L6)',
    keyStack: 'K8s, Istio, Terraform, Go, Prometheus',
    vectors: [
      { id: 'v1', tag: 'VECTOR 01 • URGENT', badgeType: 'urgent', score: '66.0 / 100', scoreNumber: 66.0, title: 'Cross-Region Envoy Rate Limiting Failover', observedIn: 'Observed in Presentation #40 (Service Mesh)', observation: 'Candidate failed to account for cross-region latency overhead during synchronous rate limit checks across AWS regions.', recommendedDuration: '15 Mins (#INF-01)', drillCode: '#INF-01', buttonLabel: 'Practice Vector 01' },
      { id: 'v2', tag: 'VECTOR 02 • STRUCTURAL', badgeType: 'structural', score: '75.2 / 100', scoreNumber: 75.2, title: 'Architectural Trade-off Prioritization Framework', observedIn: 'Observed in Communication Analytics #38', observation: 'Candidate presented migration steps without clear dependency ordering and zero-downtime database rollback plans.', recommendedDuration: '18 Mins (#INF-02)', drillCode: '#INF-02', buttonLabel: 'Practice Vector 02' },
      { id: 'v3', tag: 'VECTOR 03 • ACOUSTIC/OPTIC', badgeType: 'acoustic', score: '83% Alignment', scoreNumber: 83.0, title: 'Whiteboard Diagramming Geometry & Gaze Centering', observedIn: 'Observed in Presentation Analytics #40', observation: 'Candidate stood side-on for >35% of diagram explanation, occluding critical control-plane data flow labels.', recommendedDuration: '8 Mins (#INF-03)', drillCode: '#INF-03', buttonLabel: 'Calibrate Whiteboard' },
    ],
    modules: {
      technical: [
        { id: 'm-inf-1', code: 'DRILL #INF-10', score: '66/100', title: 'Multi-Cluster K8s Scheduling Topology', description: 'Design topology spread constraints and pod anti-affinity across multiple AWS failure domains.', tag: '14 Mins • Kubernetes', duration: '14 Mins', rolePrompt: 'Platform Drill: Kubernetes Multi-Cluster Scheduling & Topology Spread Constraints' },
        { id: 'm-inf-2', code: 'DRILL #INF-11', score: '76/100', title: 'Zero-Downtime Schema Migration at Scale', description: 'Formulate expand-and-contract migration patterns for tables handling 50k writes/sec.', tag: '15 Mins • Database Platforms', duration: '15 Mins', rolePrompt: 'Platform Drill: Zero-Downtime Expand-Contract Schema Migration for 50k TPS' },
        { id: 'm-inf-3', code: 'DRILL #INF-12', score: '85/100', title: 'Service Mesh mTLS Certificate Rotation', description: 'Verbal defense of automated SPIFFE/SPIRE certificate rotation without ingress interruption.', tag: '10 Mins • Security Architecture', duration: '10 Mins', rolePrompt: 'Platform Drill: Automated SPIRE/Istio mTLS Certificate Rotation at Scale' },
      ],
      communication: [
        { id: 'm-cm-i1', code: 'DRILL #CM-I1', score: '75/100', title: 'Platform Adoption & Developer Experience Pitch', description: 'Convince 20 product engineering teams to migrate to internal developer platform without mandate.', tag: '12 Mins • Internal Evangelism', duration: '12 Mins', rolePrompt: 'Platform Leadership: Internal Developer Platform IDP Adoption & Developer Experience' },
        { id: 'm-cm-i2', code: 'DRILL #CM-I2', score: '82/100', title: 'Cloud Cost Optimization (FinOps) Defense', description: 'Present $1.2M cloud infrastructure efficiency initiative to VP of Engineering.', tag: '10 Mins • FinOps Strategy', duration: '10 Mins', rolePrompt: 'FinOps Leadership Drill: Defending Cloud Cost Optimization Strategy to VP Eng' },
        { id: 'm-cm-i3', code: 'DRILL #CM-I3', score: '88/100', title: 'RFC Architecture Review Defense', description: 'Defend RFC design decisions against rigorous technical scrutiny in architecture committee.', tag: '15 Mins • RFC Defense', duration: '15 Mins', rolePrompt: 'Architecture Committee: Defending Platform RFC Under Technical Cross-Examination' },
      ],
      speech: [
        { id: 'm-sp-i1', code: 'DRILL #SP-I1', score: '81/100', title: 'Clarity in Technical Jargon Articulation', description: 'Pronounce complex distributed primitives with crisp diction and steady vocal projection.', tag: '8 Mins • Diction Polish', duration: '8 Mins', rolePrompt: 'Diction Polish: Clear Articulation of Complex Infrastructure Primitives' },
        { id: 'm-sp-i2', code: 'DRILL #SP-I2', score: '86/100', title: 'Whiteboard Narration Flow (Talk-While-Draw)', description: 'Maintain fluid vocal narration without awkward silence while sketching network topology.', tag: '10 Mins • Whiteboard Delivery', duration: '10 Mins', rolePrompt: 'Whiteboard Polish: Fluid Talk-While-Draw Synchronization for Architecture' },
        { id: 'm-sp-i3', code: 'DRILL #SP-I3', score: '92/100', title: 'Strategic Emphasis & Kinetic Pauses', description: 'Use deliberate 2-second pauses before key design takeaways to maximize audience retention.', tag: '6 Mins • Strategic Delivery', duration: '6 Mins', rolePrompt: 'Strategic Delivery: Kinetic Pausing & Emphasis for Staff Architects' },
      ],
    },
    days: [],
  },
};

Object.keys(ROLE_DATA_CATALOG).forEach((k) => {
  if (ROLE_DATA_CATALOG[k].days.length === 0) {
    ROLE_DATA_CATALOG[k].days = ROLE_DATA_CATALOG['Staff Backend & Distributed Systems Architecture'].days.map(
      (d: any) => ({ ...d })
    );
  }
});
