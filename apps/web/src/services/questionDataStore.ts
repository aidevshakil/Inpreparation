export interface QuestionDossierItem {
  id: string;
  number: string;
  title: string;
  category: string;
  score: number;
  benchmarkScore: number;
  durationSeconds: number;
  wpm: number;
  gazeAlignment: number;
  fillerTokens: number;
  flagged: boolean;
  questionPrompt: string;
  candidateTranscript: string;
  highlightTokens: Array<{
    text: string;
    type: 'good' | 'warning' | 'error';
    note: string;
  }>;
  starRubric: {
    situationTask: number;
    actionExecution: number;
    resultMetrics: number;
    systemsDepth: number;
    architecturalTradeoffs: number;
  };
  coachingCritique: {
    strengths: string[];
    criticalGaps: string[];
    modelSuggestedRewrite: string;
  };
  drillPrompt: string;
}

export const QUESTION_DATA_MAP: Record<string, QuestionDossierItem> = {};

let _questionCatalogPromise: Promise<Record<string, QuestionDossierItem>> | null = null;

export const fetchQuestionDossierCatalog = async (): Promise<Record<string, QuestionDossierItem>> => {
  if (_questionCatalogPromise) return _questionCatalogPromise;
  _questionCatalogPromise = (async () => {
    try {
      const { NODE_BACKEND_URL } = await import('./api');
      const res = await fetch(NODE_BACKEND_URL + '/question-dossiers/catalog');
      if (res.ok) {
        const list: QuestionDossierItem[] = await res.json();
        list.forEach((item) => {
          QUESTION_DATA_MAP[item.id] = item;
        });
      }
    } catch (err) {
      console.warn('Failed to fetch question dossier catalog:', err);
    }
    return QUESTION_DATA_MAP;
  })();
  return _questionCatalogPromise;
};


export function syncQuestionDataFromDb(dbDossiers: any[]) {
  if (!Array.isArray(dbDossiers)) return;
  dbDossiers.forEach((d) => {
    const qKey = `Q${d.questionNumber}`;
    if (QUESTION_DATA_MAP[qKey]) {
      QUESTION_DATA_MAP[qKey].score = d.score || QUESTION_DATA_MAP[qKey].score;
      if (d.questionText) QUESTION_DATA_MAP[qKey].questionPrompt = d.questionText;
      if (d.candidateAnswer) QUESTION_DATA_MAP[qKey].candidateTranscript = d.candidateAnswer;
      if (d.suggestedRewrite) QUESTION_DATA_MAP[qKey].coachingCritique.modelSuggestedRewrite = d.suggestedRewrite;
      if (d.durationSec) QUESTION_DATA_MAP[qKey].durationSeconds = d.durationSec;
      if (d.wpm) QUESTION_DATA_MAP[qKey].wpm = d.wpm;
      if (d.fillerWords !== undefined) QUESTION_DATA_MAP[qKey].fillerTokens = d.fillerWords;
      if (d.category) QUESTION_DATA_MAP[qKey].category = d.category;
      if (d.strengths && Array.isArray(d.strengths) && d.strengths.length > 0) {
        QUESTION_DATA_MAP[qKey].coachingCritique.strengths = d.strengths;
      }
      if (d.weaknesses && Array.isArray(d.weaknesses) && d.weaknesses.length > 0) {
        QUESTION_DATA_MAP[qKey].coachingCritique.criticalGaps = d.weaknesses;
      }
      if (d.breakdown && typeof d.breakdown === 'object') {
        QUESTION_DATA_MAP[qKey].starRubric = {
          ...QUESTION_DATA_MAP[qKey].starRubric,
          ...d.breakdown,
        };
      }
    }
  });
}

export async function fetchAndHydrateQuestionDossiers(userId?: string): Promise<Record<string, QuestionDossierItem>> {
  await fetchQuestionDossierCatalog();
  try {
    const { getQuestionPerformanceDossiers } = await import('./api');
    const rawList = await getQuestionPerformanceDossiers(userId);
    if (Array.isArray(rawList) && rawList.length > 0) {
      syncQuestionDataFromDb(rawList);
    }
  } catch (err) {
    console.warn('Could not hydrate question dossiers from DB:', err);
  }
  return QUESTION_DATA_MAP;
}

