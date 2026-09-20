export const QUESTION_DOSSIER_CATALOG: any[] = [
  {
    id: 'Q1',
    number: 'Question 01',
    title: 'Asyncio Event Loop & PyEval GIL Contention in Ingress',
    category: 'Concurrency & Runtimes',
    score: 86.0,
    benchmarkScore: 80.0,
    durationSeconds: 142,
    wpm: 144,
    gazeAlignment: 94,
    fillerTokens: 1,
    flagged: false,
    questionPrompt:
      'Explain how CPython handles GIL contention when asynchronous socket handlers encounter synchronous CPU-bound cryptographic token validations. What architectural separation prevents event-loop starvation?',
    candidateTranscript:
      '"In our ingress gateway, we ensure that no cryptographic hashing runs directly on the asyncio event loop thread. Because the CPython GIL is only released during IO system calls via Py_BEGIN_ALLOW_THREADS, synchronous HMAC validation would block the entire loop and cause epoll dispatch timeouts. We immediately offload cryptographic workloads to a ProcessPoolExecutor with max_workers pinned to available physical cores. This maintains sub-5ms loop tick latency while isolating CPU contention from network I/O."',
    highlightTokens: [
      { text: 'no cryptographic hashing runs directly on the asyncio event loop', type: 'good', note: 'Strong immediate BLUF architectural boundary definition.' },
      { text: 'Py_BEGIN_ALLOW_THREADS', type: 'good', note: 'Accurate CPython C-API internal mechanism citation.' },
      { text: 'ProcessPoolExecutor with max_workers pinned', type: 'good', note: 'Defensible multi-process isolation architecture.' },
    ],
    starRubric: { situationTask: 88, actionExecution: 86, resultMetrics: 84, systemsDepth: 90, architecturalTradeoffs: 82 },
    coachingCritique: {
      strengths: [
        'Precise citation of CPython GIL thread-release mechanics.',
        'Immediate BLUF answer delivery within the first 15 seconds.',
        'Clean distinction between process pool and thread pool boundaries.',
      ],
      criticalGaps: [
        'Could quantify IPC serialization overhead for large token payloads.',
        'Omitted mention of uvloop or libuv high-performance alternatives.',
      ],
      modelSuggestedRewrite:
        '"We enforce zero CPU-bound work on the asyncio loop. Synchronous HMAC calculations are dispatched to a pre-warmed ProcessPoolExecutor using shared-memory buffers to avoid IPC serialization overhead, maintaining <3ms loop tick latency even during 100k auth RPS bursts."',
    },
    drillPrompt: 'Drill Q1: CPython GIL Eviction & ProcessPool IPC Optimization',
  },
  {
    id: 'Q2',
    number: 'Question 02',
    title: 'Structured 3-Pillar Architectural BLUF Framing Under Cold Boot',
    category: 'Architecture & Communication',
    score: 82.0,
    benchmarkScore: 80.0,
    durationSeconds: 168,
    wpm: 140,
    gazeAlignment: 92,
    fillerTokens: 2,
    flagged: false,
    questionPrompt:
      'Walk me through the disaster recovery sequence when an entire Redis cache cluster experiences cold restart under peak live traffic of 80,000 queries per second.',
    candidateTranscript:
      '"Our disaster recovery sequence adheres to three deterministic pillars: Ingress Shedding, Probabilistic Cache Warming, and Database Circuit Breaking. First, we immediately engage circuit breakers at the gateway layer using probabilistic early expiration to reject non-critical reads. Second, we warm cache entries via Kafka change-data-capture replay rather than allowing incoming web requests to hit the primary PostgreSQL shards. Third, we establish connection pooling queues to enforce strict 1,200 max active backend queries."',
    highlightTokens: [
      { text: 'three deterministic pillars', type: 'good', note: 'Clean Minto Pyramid 3-pillar structure.' },
      { text: 'Kafka change-data-capture replay', type: 'good', note: 'Shields primary database from thundering herd.' },
      { text: 'strict 1,200 max active backend queries', type: 'good', note: 'Clear quantitative capacity ceiling.' },
    ],
    starRubric: { situationTask: 84, actionExecution: 82, resultMetrics: 80, systemsDepth: 83, architecturalTradeoffs: 81 },
    coachingCritique: {
      strengths: [
        'Well-organized 3-pillar Minto hierarchy.',
        'Addressed thundering herd mitigation using CDC asynchronous warming.',
      ],
      criticalGaps: ['Did not quantify cache hit ratio progression during warming phases.'],
      modelSuggestedRewrite:
        '"We deploy a 3-pillar defense: 1) Leaky-bucket gateway shedding, 2) Asynchronous CDC cache pre-warming via Debezium and Kafka, and 3) Strict PgBouncer connection ceilings to guarantee database stability during the 90-second cold-cache recovery window."',
    },
    drillPrompt: 'Drill Q2: Cold Cache Reboot & CDC Asynchronous Warming Strategy',
  },
  {
    id: 'Q3',
    number: 'Question 03',
    title: 'Distributed Lock Lease Expiration & Fencing Token Monotonicity',
    category: 'Distributed Systems',
    score: 84.0,
    benchmarkScore: 80.0,
    durationSeconds: 155,
    wpm: 138,
    gazeAlignment: 90,
    fillerTokens: 1,
    flagged: false,
    questionPrompt:
      'Why is a standard Redis distributed lock (SETNX with TTL) insufficient for mutual exclusion in storage engines, and how do fencing tokens resolve this limitation?',
    candidateTranscript:
      '"A standard Redis lock with TTL cannot guarantee safety in the presence of arbitrary client pauses, such as garbage collection, network latency, or disk swapping. If Client 1 acquires the lock with a 10-second TTL and enters a 12-second GC pause, Redis will expire the lock and grant it to Client 2. When Client 1 resumes, it mistakenly assumes it still holds the lock and writes to storage, corrupting data. Fencing tokens solve this by issuing a monotonically increasing token from ZooKeeper or Raft; the storage engine rejects any write containing a token lower than the highest recorded token."',
    highlightTokens: [
      { text: 'arbitrary client pauses, such as garbage collection', type: 'good', note: 'Accurately articulates the Martin Kleppmann Redlock critique.' },
      { text: 'monotonically increasing token', type: 'good', note: 'Identifies the crucial invariant required for storage safety.' },
      { text: 'storage engine rejects any write containing a token lower', type: 'good', note: 'Correct placement of verification at the storage layer.' },
    ],
    starRubric: { situationTask: 86, actionExecution: 84, resultMetrics: 82, systemsDepth: 88, architecturalTradeoffs: 80 },
    coachingCritique: {
      strengths: [
        'Accurate explanation of physical clock vs logical monotonicity.',
        'Demonstrates deep understanding of end-to-end consensus semantics.',
      ],
      criticalGaps: ['Could discuss compare-and-swap (CAS) database versioning constraints.'],
      modelSuggestedRewrite:
        '"Redis TTL locks fail under GC pauses because lease expiration happens asynchronously. Fencing tokens eliminate this hazard by requiring storage engines to validate that token_v > last_committed_token, converting distributed lock safety into a deterministic storage-level CAS invariant."',
    },
    drillPrompt: 'Drill Q3: Distributed Lock Fencing Tokens & Storage CAS Validation',
  },
  {
    id: 'Q4',
    number: 'Question 04',
    title: 'Distributed Backpressure & Token-Bucket Clock Drift Reconciliation',
    category: 'Distributed Systems & Concurrency',
    score: 68.0,
    benchmarkScore: 80.0,
    durationSeconds: 110,
    wpm: 158,
    gazeAlignment: 82,
    fillerTokens: 6,
    flagged: true,
    questionPrompt:
      'Design a resilient distributed rate limiter operating across 3 geographical regions, shielding downstream microservices from burst ingress while reconciling clock skew across clusters.',
    candidateTranscript:
      '"I would place a Redis cluster backed by a Lua script to atomically decrement token counts. In the event of Redis CPU saturation, clients should fall back to local in-memory leaky-bucket queues. However, during severe burst ingress, dropping excess requests with HTTP 429 and Retry-After headers is essential to shield the application pods. We would then just retry after a couple seconds once things settle down..."',
    highlightTokens: [
      { text: 'Redis cluster backed by a Lua script to atomically decrement', type: 'good', note: 'Standard rate limiting approach using Redis EVAL single-thread atomicity.' },
      { text: 'dropping excess requests with HTTP 429 and Retry-After headers', type: 'good', note: 'Correct standard backpressure signaling.' },
      { text: 'We would then just retry after a couple seconds once things settle down...', type: 'error', note: 'CRITICAL GAP: Lacks exponential backoff with full jitter; will cause thundering herd synchronization.' },
    ],
    starRubric: { situationTask: 72, actionExecution: 68, resultMetrics: 64, systemsDepth: 65, architecturalTradeoffs: 71 },
    coachingCritique: {
      strengths: [
        'Correctly identified Lua script atomicity on Redis single thread.',
        'Utilized HTTP 429 backpressure status code and Retry-After header.',
      ],
      criticalGaps: [
        'Premature conclusion in under 90 seconds without discussing NTP clock drift across geographical regions.',
        'Omitted full-jitter exponential backoff, leaving system vulnerable to retry resonance waves.',
        'Did not specify local in-memory token allocation to avoid cross-region network hop latency.',
      ],
      modelSuggestedRewrite:
        '"We deploy a hybrid rate-limiter: Each region maintains local in-memory token buckets refreshed asynchronously via Redis EVAL scripts every 50ms, eliminating cross-region latency on the critical path. When local limits exceed thresholds, we return HTTP 429 with full-jitter exponential backoff (min: 100ms, max: 2000ms). Clock skew between regions is reconciled using logical monotonic epoch counters rather than physical NTP wall-clocks."',
    },
    drillPrompt: 'Targeted Drill: Token-Bucket Clock Skew & Drift Resilience (#42S)',
  },
  {
    id: 'Q5',
    number: 'Question 05',
    title: 'Distributed Consensus Invariant Defense Under Arbitrary GC Pauses',
    category: 'Consensus & Fault Tolerance',
    score: 78.0,
    benchmarkScore: 80.0,
    durationSeconds: 148,
    wpm: 142,
    gazeAlignment: 88,
    fillerTokens: 3,
    flagged: false,
    questionPrompt:
      'In a 5-node Raft cluster, explain how leader leases guarantee linearizable reads without executing full round-trip log entries, and how physical clock skew affects this guarantee.',
    candidateTranscript:
      '"In Raft, executing linearizable reads typically requires verifying leader authority via heartbeat roundtrip to a majority quorum before serving each read. Leader leases optimize this by allowing the leader to serve reads locally as long as the current lease has not expired. The lease duration must be strictly shorter than the election timeout minus maximum bounded clock drift. If clocks drift beyond this bound or a GC pause exceeds the lease window, a new leader could be elected, resulting in stale reads. To guarantee safety, we must either enforce TrueTime/NTP error bounds or fall back to Read-Index checks."',
    highlightTokens: [
      { text: 'verifying leader authority via heartbeat roundtrip to a majority quorum', type: 'good', note: 'Correct standard Raft read-path invariant.' },
      { text: 'election timeout minus maximum bounded clock drift', type: 'good', note: 'Critical timing safety inequality.' },
      { text: 'fall back to Read-Index checks', type: 'good', note: 'Safe fallback when physical clock skew bounds cannot be guaranteed.' },
    ],
    starRubric: { situationTask: 80, actionExecution: 78, resultMetrics: 76, systemsDepth: 81, architecturalTradeoffs: 75 },
    coachingCritique: {
      strengths: [
        'Accurately defined the lease duration vs election timeout equation.',
        'Correctly proposed Read-Index verification as a physical clock agnostic fallback.',
      ],
      criticalGaps: ['Could elaborate on batching and pipelining Read-Index requests to mitigate latency.'],
      modelSuggestedRewrite:
        '"Leader leases bypass log round-trips by granting the leader a time-bound lease: duration = election_timeout - (heartbeat_interval + max_drift). If clock drift bounds cannot be strictly guaranteed, Read-Index verification batches multiple read requests into a single quorum confirmation roundtrip, achieving linearizability without wall-clock dependency."',
    },
    drillPrompt: 'Drill Q5: Raft Leader Leases & Read-Index Linearizability',
  },
];
