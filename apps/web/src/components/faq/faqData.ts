export interface FaqQuestion {
  id: string;
  question: string;
  answer: string;
  tags?: string[];
}

export interface FaqCategory {
  id: string;
  name: string;
  iconName: string;
  count: number;
  subtitle?: string;
  badge?: string;
  description?: string;
  questions: FaqQuestion[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    iconName: 'Rocket',
    count: 4,
    questions: [
      {
        id: 'gs-1',
        question: 'What is Inprep AI?',
        answer: 'Inprep AI is an executive-tier multimodal interview intelligence platform. It simulates high-stakes technical, behavioral, and leadership interviews using generative AI combined with real-time biometric vocal insights and computer vision ergonomic diagnostics.'
      },
      {
        id: 'gs-2',
        question: 'Who is Inprep AI for?',
        answer: 'Inprep AI is designed for software engineers, product leaders, engineering managers, data scientists, and senior tech executives preparing for competitive FAANG, scale-up, and Fortune 500 interviews.'
      },
      {
        id: 'gs-3',
        question: 'Do I need prior interview experience to use Inprep AI?',
        answer: 'Not at all. Inprep AI adapts to all experience levels—from junior engineers seeking foundational confidence to VP/Director candidates refining board-level storytelling and architectural trade-off articulation.'
      },
      {
        id: 'gs-4',
        question: 'How do I get started?',
        answer: 'Simply sign up for a free account, upload your CV or select a targeted job role, customize your desired difficulty and simulation mode, and begin your first live practice simulation in under 60 seconds.'
      }
    ]
  },
  {
    id: 'profile-cv',
    name: 'Profile & CV Upload',
    iconName: 'FileText',
    count: 4,
    questions: [
      {
        id: 'cv-1',
        question: 'Can I upload my CV / Resume?',
        answer: 'Yes! You can upload your CV or resume in PDF, DOCX, DOC, or TXT format (up to 15MB). Our semantic parser extracts your core tech stack, project ownership, leadership milestones, and architecture patterns to create a tailored interview blueprint.'
      },
      {
        id: 'cv-2',
        question: 'Can I build my profile without uploading a CV?',
        answer: 'Absolutely. If you prefer not to upload a resume, you can manually configure your target role, seniority level (Junior to Staff/Executive), primary tech stack, and focus competencies from our guided onboarding flow.'
      },
      {
        id: 'cv-3',
        question: 'What does the AI do with my CV?',
        answer: 'The AI parses your work history and technical achievements solely to contextualize drill questions and benchmark your responses against industry standards. Your data is isolated in your encrypted private workspace and is never used to train public models.'
      },
      {
        id: 'cv-4',
        question: 'Can I edit my profile parameters after CV analysis?',
        answer: 'Yes, you can edit, augment, or regenerate your parsed profile parameters, key skills, and domain focus at any time directly in your account profile settings.'
      }
    ]
  },
  {
    id: 'practice-assessment',
    name: '5–Question Practice & Assessment',
    iconName: 'Mic',
    count: 5,
    questions: [
      {
        id: 'pa-1',
        question: 'How many questions are in a practice interview?',
        answer: 'Standard simulation sessions feature 5 high-impact, calibrated questions targeting foundational depth, system design trade-offs, situational leadership, behavioral STAR execution, and recovery under pressure.'
      },
      {
        id: 'pa-2',
        question: 'What is the AI Career Assessment?',
        answer: 'The AI Career Assessment is an upfront diagnostic evaluation that analyzes your resume, career goals, and technical baseline to recommend personalized practice tracks, difficulty curves, and target skill benchmarks.'
      },
      {
        id: 'pa-3',
        question: 'Is the assessment the same as the actual mock interview?',
        answer: 'The assessment is a comprehensive diagnostic mapping tool that pinpoints your strengths and growth areas. The mock interview is the live interactive simulation where you actively speak, code, and answer questions under realistic interview conditions.'
      },
      {
        id: 'pa-4',
        question: 'How does the 5–question interview flow work?',
        answer: 'The session starts with role orientation, followed by a warm-up behavioral inquiry, two deep-dive technical or architecture questions with dynamic follow-ups, a high-stakes scenario challenge, and concludes with instant multimodal scorecards.'
      },
      {
        id: 'pa-5',
        question: 'Can I retake an interview?',
        answer: 'Yes! You can retake any completed simulation as many times as you like to practice alternate technical explanations, optimize cadence, and monitor your score improvements over time.'
      }
    ]
  },
  {
    id: 'multimodal-evaluation',
    name: 'Multimodal Evaluation',
    iconName: 'Activity',
    count: 4,
    questions: [
      {
        id: 'me-1',
        question: 'What dimensions does Inprep AI evaluate?',
        answer: 'Inprep AI evaluates four synchronized core dimensions: Technical Depth & Correctness (architectural trade-offs, algorithms, edge-cases), Communication Structure (STAR framework, conciseness, clarity), Speech Intelligence (WPM pace, verbal fillers, pause cadence), and Presentation Ergonomics (framing, eye line alignment, ambient lighting).'
      },
      {
        id: 'me-2',
        question: 'Does the score come from only one AI model?',
        answer: 'No. We utilize an ensemble evaluation architecture combining specialized acoustic speech analyzers, local computer vision models, and fine-tuned LLM evaluators cross-checked against rubric committees from Tier-1 tech organizations.'
      },
      {
        id: 'me-3',
        question: 'Is the AI score absolute or a hiring guarantee?',
        answer: 'The score is an objective diagnostic readiness benchmark designed to mirror top-tier hiring bar standards. While it dramatically increases candidate offer conversion rates, hiring decisions ultimately rest with human hiring committees.'
      },
      {
        id: 'me-4',
        question: 'How is the overall composite score calculated?',
        answer: 'The composite Interview Readiness Index (0–100%) is calculated via weighted aggregation across Technical rigor (40%), Communication & STAR structure (30%), Speech cadence (15%), and Presentation hygiene (15%).'
      }
    ]
  },
  {
    id: 'vision-camera',
    name: 'Computer Vision & Camera',
    iconName: 'Video',
    count: 5,
    subtitle: 'Responsible Vision Guarantee',
    badge: 'Observable Signals Only',
    description: 'We believe candidates deserve full clarity on how camera data is handled. Inprep AI adheres to strict ethical computer vision principles—focusing exclusively on professional presentation and video hygiene.',
    questions: [
      {
        id: 'vc-1',
        question: 'Why does Inprep AI use camera analysis?',
        answer: 'Camera analysis helps you eliminate subconscious video call distractions—such as improper head-and-shoulders framing, low lighting, or poor eye-line orientation—ensuring your virtual presence looks executive and professional.'
      },
      {
        id: 'vc-2',
        question: 'What observable signals does the camera measure?',
        answer: 'The camera exclusively measures physical presentation ergonomics: face bounding box position, head orientation angle relative to the screen, head-and-shoulders framing margins, and lighting contrast.'
      },
      {
        id: 'vc-3',
        question: 'Does Inprep AI detect emotions, honesty, or psychology?',
        answer: 'No. We strictly reject pseudo-scientific emotion detection, psychological profiling, personality archetypes, or honesty scoring. Our computer vision models operate solely on objective geometric framing and lighting telemetry.'
      },
      {
        id: 'vc-4',
        question: 'Can it determine if I am "confident"?',
        answer: 'Inprep AI does not claim to measure internal emotional states like confidence. Instead, we measure tangible delivery signals: steady eye contact orientation, absence of nervous filler spikes, and stable vocal cadence.'
      },
      {
        id: 'vc-5',
        question: 'Is a camera strictly required for all practice rounds?',
        answer: 'No! Camera analysis is 100% optional. You can practice in audio-only mode or text mode at any time without penalty.'
      }
    ]
  },
  {
    id: 'speech-cadence',
    name: 'Speech Intelligence & Cadence',
    iconName: 'BarChart2',
    count: 3,
    questions: [
      {
        id: 'sc-1',
        question: 'What does speech analysis measure?',
        answer: 'Our acoustic speech intelligence engine measures three objective vocal delivery parameters: Speaking Pace (WPM tracking against optimal 130–160 WPM executive rhythm), Filler Word Density (detecting pauses and verbal crutches like "um", "ah", "like"), and Cadence & Pause Structure (silence ratio and transition smoothness).'
      },
      {
        id: 'sc-2',
        question: 'Does speech analysis judge my accent or mother tongue?',
        answer: 'No, absolutely not. Inprep AI does not evaluate or penalize regional accents, non-native accents, or mother tongues. The analysis focuses entirely on objective acoustics: pacing stability, clarity, and the absence of rapid run-on phrasing.'
      },
      {
        id: 'sc-3',
        question: 'How do I improve my speaking based on the AI feedback?',
        answer: 'Every feedback report includes actionable cadence drills, audio waveform replay with timestamped filler alerts, and practice prompts designed to help you replace nervous verbal ticks with confident, deliberate pauses.'
      }
    ]
  },
  {
    id: 'answer-blueprints',
    name: 'Feedback & Answer Blueprints',
    iconName: 'Award',
    count: 3,
    questions: [
      {
        id: 'ab-1',
        question: 'What happens immediately after completing an interview?',
        answer: 'Within 3 to 5 seconds of finishing your last question, Inprep AI generates a comprehensive diagnostic dossier containing your composite readiness score, competency radar breakdown, question-by-question semantic analysis, and full audio/transcript replay.'
      },
      {
        id: 'ab-2',
        question: 'What is an AI Suggested Answer Blueprint?',
        answer: 'An AI Suggested Answer Blueprint is an exemplary, Staff-level model response tailored to the exact question asked, demonstrating optimal STAR structure, concrete quantifiable impact metrics, and senior architectural trade-offs.'
      },
      {
        id: 'ab-3',
        question: 'What is the AI Improvement Plan?',
        answer: 'The AI Improvement Plan is an algorithmic roadmap generated from your diagnostic scorecard that pinpoints your top 3 growth opportunities and provides targeted follow-up drill exercises.'
      }
    ]
  },
  {
    id: 'credits-billing',
    name: 'AI Credits & Billing',
    iconName: 'CreditCard',
    count: 5,
    questions: [
      {
        id: 'cb-1',
        question: 'What are AI credits and how do they work?',
        answer: 'AI credits are the universal compute currency that powers Inprep AI. Credits are spent when conducting live interactive voice simulations, semantic CV parsing, and generating deep-dive diagnostic dossiers and model blueprints.'
      },
      {
        id: 'cb-2',
        question: 'What consumes AI credits?',
        answer: 'A standard 30-minute full multimodal mock interview consumes ~250 credits. Shorter targeted drills consume 75–150 credits, comprehensive CV analysis consumes 100 credits, and instant answer blueprint generation consumes 25 credits.'
      },
      {
        id: 'cb-3',
        question: 'Can I use Inprep AI for free?',
        answer: 'Yes! The Free Starter tier grants you 150 free credits every month, access to our 50+ role question library, and 1 full interview simulation per month with zero credit card required.'
      },
      {
        id: 'cb-4',
        question: 'Can I buy top-up credits without upgrading my plan?',
        answer: 'Yes! You can purchase standalone Add-On Credit Packs (1,000 credits for $10, 2,500 credits for $20, or 5,000 credits for $35) at any time. Add-on credits never expire and roll over indefinitely.'
      },
      {
        id: 'cb-5',
        question: 'Can I cancel or change plans anytime?',
        answer: 'Yes, you have complete flexibility. You can upgrade, downgrade, or cancel your subscription at any time directly in your account settings with a single click. There are zero cancellation fees or lock-in contracts.'
      }
    ]
  },
  {
    id: 'privacy-security',
    name: 'Responsible AI & Privacy',
    iconName: 'Shield',
    count: 3,
    questions: [
      {
        id: 'ps-1',
        question: 'Can AI decide whether I will get a job?',
        answer: 'No. Inprep AI is exclusively a candidate preparation and diagnostic coaching platform. We do not make automated hiring decisions, filter candidates on behalf of employers, or share your practice scores with external recruiters.'
      },
      {
        id: 'ps-2',
        question: 'Is my CV and interview recording private?',
        answer: 'Yes, 100%. All video analysis is computed ephemerally in local browser memory buffers with zero biometric models stored on disk. Spoken transcripts and CV analyses are encrypted with 256-bit AES in your private isolated workspace.'
      },
      {
        id: 'ps-3',
        question: 'Does Inprep AI sell my personal data or audio?',
        answer: 'Never. We uphold a strict zero-monetization-of-user-data policy. Your voice recordings, transcripts, and resume details are never sold, rented, or used to train third-party public foundational models.'
      }
    ]
  },
  {
    id: 'tech-support',
    name: 'Technical Support & Setup',
    iconName: 'Wrench',
    count: 2,
    questions: [
      {
        id: 'ts-1',
        question: 'Why isn’t my camera or microphone connecting?',
        answer: 'Ensure that your browser has granted camera and microphone permissions to Inprep AI (look for the lock or camera icon in your address bar). Also, make sure no other video conferencing app (like Zoom, Teams, or Meet) is currently locking your hardware.'
      },
      {
        id: 'ts-2',
        question: 'What browsers are supported?',
        answer: 'Inprep AI is optimized for modern desktop Chromium browsers (Google Chrome, Microsoft Edge, Brave), Mozilla Firefox, and Apple Safari on macOS, Windows, and Linux.'
      }
    ]
  }
];
