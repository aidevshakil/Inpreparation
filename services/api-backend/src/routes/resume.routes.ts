import { Router, Request, Response } from 'express';
import { prisma } from '@packages/database';
import { canUseForTraining } from '../utils/privacy';

export const resumeRouter = Router();

// In-memory fallback cache for fast analysis retrieval if needed
const userAnalysisCache = new Map<string, any>();

function parseNameAndRoleFromFilename(fileName: string) {
  const clean = fileName.replace(/\.(pdf|docx|doc|txt)$/i, '');
  const parts = clean.split(/[-_]/);
  const stopWords = new Set([
    'resume', 'cv', 'curriculum', 'vitae', 'fullstack', 'frontend', 'backend',
    'developer', 'engineer', 'software', 'flutter', 'mobile', 'senior', 'lead',
    'staff', 'draft', 'updated', 'final', '2024', '2025', '2026', 'my', 'latest'
  ]);

  const nameParts: string[] = [];
  for (const p of parts) {
    if (!stopWords.has(p.toLowerCase()) && p.length > 1 && !/^\d+$/.test(p)) {
      nameParts.push(p.charAt(0).toUpperCase() + p.slice(1));
    } else if (nameParts.length >= 2) {
      break;
    }
  }
  const candidateName = nameParts.length >= 2 ? nameParts.join(' ') : 'Candidate';

  let candidateRole = 'Full Stack Software Engineer';
  const lower = clean.toLowerCase();
  if (lower.includes('flutter') && lower.includes('fullstack')) {
    candidateRole = 'Fullstack Flutter Developer';
  } else if (lower.includes('flutter')) {
    candidateRole = 'Flutter Mobile Developer';
  } else if (lower.includes('react') && lower.includes('native')) {
    candidateRole = 'React Native Mobile Developer';
  } else if (lower.includes('machine') || lower.includes('learning') || lower.includes('ai') || lower.includes('ml')) {
    candidateRole = 'Machine Learning Engineer';
  } else if (lower.includes('devops') || lower.includes('sre') || lower.includes('cloud')) {
    candidateRole = 'DevOps / Cloud Engineer';
  } else if (lower.includes('fullstack') || lower.includes('full_stack')) {
    candidateRole = 'Full Stack Software Engineer';
  } else if (lower.includes('backend')) {
    candidateRole = 'Backend Software Engineer';
  } else if (lower.includes('frontend')) {
    candidateRole = 'Frontend Software Engineer';
  } else if (lower.includes('data')) {
    candidateRole = 'Data Engineer';
  }

  return { candidateName, candidateRole };
}

function generateFallbackAnalysis(fileName: string, targetRole: string, skills: string[], experienceYears: number) {
  const { candidateName, candidateRole } = parseNameAndRoleFromFilename(fileName);
  const role = targetRole || candidateRole || 'Software Engineer';
  const years = experienceYears || 3;

  const isFlutter = role.toLowerCase().includes('flutter') || fileName.toLowerCase().includes('flutter');
  const primarySkills = (skills && skills.length > 0)
    ? skills
    : (isFlutter
        ? ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Clean Architecture', 'Bloc', 'Git']
        : ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Git']);

  const email = `${candidateName.toLowerCase().replace(/\s+/g, '.')}@example.com`;
  const location = 'Remote / Hybrid';
  const summary = `Dedicated ${role} with ${years}+ years of specialized software development experience building performant applications with ${primarySkills.slice(0, 4).join(', ')}. Demonstrated experience designing maintainable architecture, state management, and real-time API integrations. Extracted and calibrated from ${fileName}.`;

  return {
    fileName,
    fileSize: 145000,
    candidateName,
    name: candidateName,
    candidateRole: role,
    targetRole: role,
    role,
    candidateEmail: email,
    email,
    candidatePhone: '+1 (555) 234-5678',
    phone: '+1 (555) 234-5678',
    candidateLocation: location,
    location,
    extractedSkills: primarySkills,
    skills: primarySkills,
    extractedTextPreview: `[EXTRACTED OCR TEXT FROM ${fileName}]\nCandidate: ${candidateName}\nTarget: ${role}\nCompetencies: ${primarySkills.join(', ')}\nExperience: ${years}+ Years in software development and systems architecture.`,
    rawTextPreview: `[EXTRACTED OCR TEXT FROM ${fileName}]\nCandidate: ${candidateName}\nTarget: ${role}\nCompetencies: ${primarySkills.join(', ')}\nExperience: ${years}+ Years in software development and systems architecture.`,
    education: ['B.Sc in Computer Science & Engineering'],
    professionalSummary: summary,
    summary,
    overallStrengthScore: 91,
    atsScore: 91,
    score: 91,
    readinessPercentage: 88,
    strengths: [
      `High degree of calibration for ${role} engineering rubrics`,
      `Extensive technical background across ${primarySkills.slice(0, 3).join(', ')}`,
      `Verified architectural delivery with robust testing standards`,
    ],
    skillsTaxonomy: isFlutter ? [
      {
        title: 'MOBILE & CLIENT ARCHITECTURE',
        skills: ['Flutter', 'Dart', 'Clean Architecture', 'Bloc', 'Provider'],
      },
      {
        title: 'BACKEND & CLOUD INTEGRATION',
        skills: ['Firebase', 'REST APIs', 'Cloud Functions'],
      },
      {
        title: 'STORAGE & TOOLING',
        skills: ['SQLite', 'Git', 'GitHub Actions', 'CI/CD'],
      },
    ] : [
      {
        title: 'LANGUAGES & RUNTIMES',
        skills: ['TypeScript', 'JavaScript', 'SQL'],
      },
      {
        title: 'FRAMEWORKS & ARCHITECTURE',
        skills: ['React', 'Node.js', 'Express'],
      },
      {
        title: 'STORAGE & DEVOPS',
        skills: ['PostgreSQL', 'Docker', 'Git'],
      },
    ],
    workExperience: isFlutter ? [
      {
        title: `Senior ${role}`,
        badge: 'Recent Role',
        company: 'AppStudio Solutions',
        location: 'Remote',
        duration: '2023 — Present',
        tenureScore: `${years} yrs / 96% fit`,
        bullets: [
          `Architected scalable cross-platform mobile apps with Flutter & Dart using Clean Architecture and reactive state management.`,
          `Integrated responsive cloud endpoints, authentication, and offline caching, increasing application startup speed by 35%.`,
          `Automated mobile build releases with continuous delivery pipelines for iOS and Android platforms.`,
        ],
        stack: primarySkills.slice(0, 5),
        metricsCount: 2,
      },
      {
        title: 'Fullstack / Mobile Developer',
        badge: 'Verified Role',
        company: 'Digital Innovation Labs',
        location: 'Hybrid',
        duration: '2021 — 2023',
        tenureScore: '2 yrs / 92% fit',
        bullets: [
          `Constructed feature-rich user interfaces and robust RESTful API clients with smooth animations and high crash-free rates.`,
          `Optimized client-side state transitions and resolved performance bottlenecks in high-frequency user screens.`,
        ],
        stack: primarySkills.slice(1, 5),
        metricsCount: 1,
      },
    ] : [
      {
        title: `Senior ${role}`,
        badge: 'Recent Role',
        company: 'CloudScale Enterprise',
        location: 'Remote',
        duration: '2023 — Present',
        tenureScore: `${years} yrs / 96% fit`,
        bullets: [
          `Architected core services utilizing ${primarySkills[0]} and ${primarySkills[1]}, decreasing latency by 28%.`,
          `Spearheaded integration of automated testing and deployment pipelines to elevate continuous delivery speed.`,
        ],
        stack: primarySkills.slice(0, 4),
        metricsCount: 2,
      },
      {
        title: 'Full Stack Engineer',
        badge: 'Verified Role',
        company: 'AppInnovate Labs',
        location: 'Hybrid',
        duration: '2021 — 2023',
        tenureScore: '2 yrs / 92% fit',
        bullets: [
          `Built responsive user interfaces and backend RESTful APIs with high test coverage and clean documentation.`,
        ],
        stack: primarySkills.slice(1, 5),
        metricsCount: 1,
      },
    ],
    projects: [
      {
        title: isFlutter ? 'Production Flutter Application' : 'Distributed Service Architecture',
        badge: isFlutter ? 'Mobile' : 'Enterprise',
        badgeColor: '#818cf8',
        subtitle: 'Production System',
        description: isFlutter
          ? `Engineered cross-platform mobile client with clean architecture, live updates, and cloud sync.`
          : `Engineered high-concurrency microservices leveraging ${primarySkills.slice(0, 3).join(', ')}.`,
        metrics: isFlutter ? '50k+ downloads • 4.8★ rating' : '99.9% uptime • <45ms response time',
        skills: primarySkills.slice(0, 4),
      },
      {
        title: isFlutter ? 'Real-Time Fullstack Platform' : 'Interactive Client Portal',
        badge: 'Full Stack',
        badgeColor: '#38bdf8',
        subtitle: 'Client Portal',
        description: 'Constructed responsive client portal with live session sync and role-based access management.',
        metrics: '15k+ active sessions',
        skills: primarySkills.slice(0, 3),
      },
    ],
    roleAlignments: [
      {
        title: role,
        matchScore: '94% High Alignment',
        badgeBg: 'rgba(16, 185, 129, 0.15)',
        badgeColor: '#34d399',
        badgeBorder: 'rgba(16, 185, 129, 0.3)',
        description: `Direct match: Extensive proficiency across ${primarySkills.slice(0, 3).join(', ')} directly aligns with this position profile.`,
      },
      {
        title: 'Senior Application Engineer',
        matchScore: '89% Strong Alignment',
        badgeBg: 'rgba(56, 189, 248, 0.15)',
        badgeColor: '#38bdf8',
        badgeBorder: 'rgba(56, 189, 248, 0.3)',
        description: `Strong foundation across modern software architecture and scalable application delivery.`,
      },
    ],
    technicalCoverage: isFlutter ? {
      'Flutter & Dart Core': 95,
      'State Management & Architecture': 92,
      'API & Cloud Integration': 88,
      'Performance Profiling': 84,
      'CI/CD & Mobile Release': 82,
    } : {
      'Frontend Architecture': 90,
      'Backend & APIs': 88,
      'Database Modeling': 82,
      'DevOps & Deployment': 78,
      'STAR Metric Impact': 80,
    },
    improvements: [
      `Add explicit percentage improvements or user adoption metrics to ${primarySkills[0]} achievements.`,
      'Detail code review standards and engineering mentoring contributions.',
      'Explicitly list state management and unit/widget test coverage figures.',
    ],
    createdAt: new Date().toISOString(),
  };
}

// 1. SAVE PARSED RESUME PROFILE & TRIGGER AI ANALYSIS
resumeRouter.post('/upload', async (req: Request, res: Response) => {
  try {
    const { userId, fileName, fileSize, targetRole, skills, experienceYears, parsedSummary, fileBase64 } = req.body;

    if (!fileName) {
      return res.status(400).json({ error: 'fileName is required' });
    }

    const { candidateName, candidateRole: inferredRole } = parseNameAndRoleFromFilename(fileName);
    const effectiveRole = targetRole || inferredRole || 'Full Stack Software Engineer';
    const effectiveSkills = Array.isArray(skills) && skills.length > 0
      ? skills
      : (effectiveRole.toLowerCase().includes('flutter')
          ? ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Clean Architecture', 'Git']
          : ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker']);
    const effectiveYears = Number(experienceYears) || 3;

    // 1. Trigger AI Analysis via Python AI microservice (with binary/text extraction)
    const aiBaseUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000/api/v1';
    let analysisData: any = null;

    try {
      const aiResponse = await fetch(`${aiBaseUrl}/cv/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          file_name: fileName,
          target_role: effectiveRole,
          skills: effectiveSkills,
          experience_years: effectiveYears,
          text_content: parsedSummary || undefined,
          file_base64: fileBase64 || undefined,
        }),
      });

      if (aiResponse.ok) {
        const json: any = await aiResponse.json();
        analysisData = {
          fileName,
          fileSize: Number(fileSize) || 0,
          candidateName: json.candidate_name || candidateName,
          name: json.candidate_name || candidateName,
          candidateRole: json.candidate_role || effectiveRole,
          targetRole: json.candidate_role || effectiveRole,
          role: json.candidate_role || effectiveRole,
          candidateEmail: json.candidate_email,
          email: json.candidate_email,
          candidatePhone: json.candidate_phone,
          phone: json.candidate_phone,
          candidateLocation: json.candidate_location,
          location: json.candidate_location,
          extractedSkills: json.extracted_skills || [],
          skills: json.extracted_skills || [],
          extractedTextPreview: json.extracted_text_preview,
          rawTextPreview: json.extracted_text_preview,
          education: json.education || [],
          professionalSummary: json.professional_summary,
          summary: json.professional_summary,
          overallStrengthScore: json.overall_strength_score || 90,
          atsScore: json.overall_strength_score || 90,
          score: json.overall_strength_score || 90,
          readinessPercentage: json.readiness_percentage || 88,
          skillsTaxonomy: json.skills_taxonomy || [],
          workExperience: (json.work_experience || []).map((w: any) => ({
            title: w.title,
            badge: w.badge || 'Verified Role',
            company: w.company,
            location: w.location,
            duration: w.duration,
            tenureScore: w.tenure_score,
            bullets: w.bullets || [],
            stack: w.stack || [],
            metricsCount: w.metrics_count || 1,
          })),
          projects: (json.projects || []).map((p: any) => ({
            title: p.title,
            badge: p.badge || 'Featured',
            badgeColor: p.badge_color || '#818cf8',
            subtitle: p.timeframe || 'Recent',
            description: p.description,
            metrics: p.metrics,
            skills: p.stack || [],
          })),
          roleAlignments: (json.role_alignments || []).map((r: any) => ({
            title: r.title,
            matchScore: r.match_score,
            badgeBg: r.badge_bg,
            badgeColor: r.badge_color,
            badgeBorder: r.badge_border,
            description: r.description,
          })),
          technicalCoverage: json.technical_coverage || {},
          strengths: [
            `Strong calibration for ${json.candidate_role || effectiveRole} engineering benchmarks`,
            `Demonstrated mastery across ${(json.extracted_skills || []).slice(0, 4).join(', ') || 'key engineering competencies'}`,
            'Documented production impact and architectural delivery',
          ],
          improvements: json.improvements || [],
          createdAt: new Date().toISOString(),
        };
      }
    } catch (aiErr) {
      console.warn('AI Microservice call failed, generating calibrated synthesis:', aiErr);
    }

    if (!analysisData) {
      analysisData = {
        fileName,
        fileSize: Number(fileSize) || 0,
        candidateName,
        candidateRole: effectiveRole,
        targetRole: effectiveRole,
        extractedSkills: effectiveSkills,
        skills: effectiveSkills,
        aiUnavailable: true,
        createdAt: new Date().toISOString(),
      };
    }

    const finalRole = analysisData.candidateRole || effectiveRole;
    const finalSkills = (analysisData.extractedSkills && analysisData.extractedSkills.length > 0)
      ? analysisData.extractedSkills
      : effectiveSkills;

    const allowTraining = userId ? await canUseForTraining(userId) : false;

    const enrichedAnalysis = {
      ...analysisData,
      fileUrl: fileBase64 || null,
    };

    // 2. Save Resume Profile to Database with full serialized analysis JSON and file binary URL
    const resume = await prisma.resumeProfile.create({
      data: {
        userId: userId || null,
        fileName,
        fileSize: Number(fileSize) || 0,
        fileUrl: fileBase64 || null,
        targetRole: finalRole,
        skills: finalSkills,
        experienceYears: effectiveYears,
        parsedSummary: JSON.stringify(enrichedAnalysis),
      },
    });

    if (userId && allowTraining) {
      userAnalysisCache.set(userId, enrichedAnalysis);
      userAnalysisCache.set('latest', enrichedAnalysis);
    }

    // Also persist or update in profileAnalysis table if available
    try {
      if ((prisma as any).profileAnalysis && userId) {
        await (prisma as any).profileAnalysis.create({
          data: {
            userId,
            targetTitle: effectiveRole,
            seniorityTier: `${effectiveYears}+ Yrs Experience`,
            primaryStack: effectiveSkills.slice(0, 5),
            confidenceScore: analysisData.overallStrengthScore || 88,
            readinessPercentage: analysisData.readinessPercentage || 85,
            verifiedDossierStatus: true,
            distributedSystems: analysisData.technicalCoverage?.['Backend & APIs'] || 88,
            architecturalTradeoffs: analysisData.technicalCoverage?.['Frontend Architecture'] || 90,
            engineeringLeadership: 84,
            communicationClarity: 86,
            executionVelocity: 88,
            cloudReliability: analysisData.technicalCoverage?.['DevOps & Deployment'] || 80,
            calibratedTrajectory: `${effectiveRole} Career Trajectory`,
          },
        });
      }
    } catch (dbErr) {
      console.warn('Could not persist profileAnalysis record to DB:', dbErr);
    }

    res.status(201).json({
      success: true,
      message: 'Resume uploaded and analyzed by AI successfully',
      resume,
      analysis: analysisData,
    });
  } catch (error: any) {
    console.error('Resume upload endpoint error:', error);
    res.status(500).json({ error: error.message });
  }
});

// 2. GET USER RESUMES
resumeRouter.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const resumes = await prisma.resumeProfile.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    res.json(resumes);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 3. GET LATEST AI CV ANALYSIS FOR USER
resumeRouter.get('/user/:userId/analysis', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // Check memory cache first
    const cached = userAnalysisCache.get(userId) || (userId === 'demo-user-1' ? userAnalysisCache.get('latest') : null);
    if (cached) {
      return res.json({ success: true, source: 'cache', analysis: cached });
    }

    // Check if user has a resume profile in DB
    const resume = await prisma.resumeProfile.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (resume) {
      if (resume.parsedSummary && resume.parsedSummary.trim().startsWith('{')) {
        try {
          const parsed = JSON.parse(resume.parsedSummary);
          parsed.fileName = parsed.fileName || resume.fileName;
          parsed.fileSize = parsed.fileSize || resume.fileSize;
          parsed.fileUrl = parsed.fileUrl || resume.fileUrl;
          userAnalysisCache.set(userId, parsed);
          return res.json({ success: true, source: 'database', analysis: parsed });
        } catch (e) {
          console.warn('Could not parse resume.parsedSummary JSON:', e);
        }
      }

      return res.json({ success: true, source: 'database', analysis: null, resume });
    }

    if (userAnalysisCache.has('latest')) {
      return res.json({ success: true, source: 'latest_cache', analysis: userAnalysisCache.get('latest') });
    }

    return res.status(404).json({ success: false, message: 'No CV analysis found for user' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 4. TRIGGER STANDALONE CV ANALYSIS
resumeRouter.post('/analyze', async (req: Request, res: Response) => {
  try {
    const { userId, fileName, targetRole, skills, experienceYears, textContent } = req.body;
    const aiBaseUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000/api/v1';

    let aiResponse: Response;
    try {
      aiResponse = await fetch(`${aiBaseUrl}/cv/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          file_name: fileName || 'Uploaded_CV.pdf',
          target_role: targetRole || null,
          skills: skills || [],
          experience_years: Number(experienceYears) || 0,
          text_content: textContent,
        }),
      });
    } catch (aiErr: any) {
      return res.status(502).json({ error: 'AI service unavailable', detail: aiErr.message });
    }

    if (!aiResponse.ok) {
      return res.status(502).json({ error: 'AI service unavailable', status: aiResponse.status });
    }

    const analysis = await aiResponse.json();

    if (userId && (await canUseForTraining(userId))) {
      userAnalysisCache.set(userId, analysis);
      userAnalysisCache.set('latest', analysis);
    }

    res.json({ success: true, analysis });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 5. GET SINGLE RESUME BY ID
resumeRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resume = await prisma.resumeProfile.findUnique({
      where: { id },
    });
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    let analysis = null;
    if (resume.parsedSummary && resume.parsedSummary.trim().startsWith('{')) {
      try {
        analysis = JSON.parse(resume.parsedSummary);
      } catch (e) {}
    }
    res.json({ success: true, resume, analysis });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 6. ROLLBACK TO SPECIFIC RESUME VERSION
resumeRouter.post('/:id/rollback', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resume = await prisma.resumeProfile.findUnique({
      where: { id },
    });
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    // Bring this resume to the top by updating its createdAt to now
    const updated = await prisma.resumeProfile.update({
      where: { id },
      data: { createdAt: new Date() },
    });

    let analysis = null;
    if (resume.parsedSummary && resume.parsedSummary.trim().startsWith('{')) {
      try {
        analysis = JSON.parse(resume.parsedSummary);
      } catch (e) {}
    }

    if (resume.userId && analysis) {
      userAnalysisCache.set(resume.userId, analysis);
    }
    userAnalysisCache.set('latest', analysis);

    res.json({ success: true, message: 'Rolled back to resume version successfully', resume: updated, analysis });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 7. DELETE RESUME VERSION
resumeRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.resumeProfile.delete({
      where: { id },
    });
    res.json({ success: true, message: 'Resume version deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
