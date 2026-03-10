export interface Project {
	slug: string;
	title: string;
	description: string;
	longDescription: string;
	tags: string[];
	year: string;
	client: string;
	media: {
		type: 'image' | 'video';
		url: string;
		alt?: string;
	}[];
	website?: string;
	repository?: string;
}

export const projects: Project[] = [
	{
		slug: 'taped-chinese',
		title: 'Taped Chinese',
		description:
			'A web-based language learning platform digitizing FSI course materials with a vintage cassette aesthetic.',
		longDescription:
			'Standard Chinese Platform transforms the comprehensive FSI course (originally used to train diplomats) into an accessible, interactive format for modern learners. The platform preserves the original 9-module structure while adding interactive features and a user-friendly interface.',
		tags: ['Education Software', 'Web App', 'SvelteKit'],
		year: '2025',
		client: '',
		media: [{ type: 'image', url: '/images/taped-chinese.webp', alt: 'Taped Chinese Interface' }],
		website: 'https://tapedchinese.com',
		repository: 'https://github.com/larrygrpolanco/standard-chinese-platform'
	},
	{
		slug: 'korean-learning',
		title: '한국어 학습 플랫폼',
		description:
			'A web platform supplementing the KLEAR Integrated Korean textbook series with LLM-powered interactive practice.',
		longDescription:
			"Built for college-level Korean courses at USF in collaboration with Professor Jihye Kim. Each lesson maps to a textbook chapter and provides conversations and vocabulary in context, grammar conjugation tables and pattern explanations, and AI-powered roleplay scenarios for speaking practice. Students use the platform outside the classroom to reinforce what they're learning. Built with SvelteKit and deployed on Vercel.",
		tags: ['Education Software', 'Web App', 'SvelteKit', 'LLM'],
		year: '2025',
		client: 'USF / Prof. Jihye Kim',
		media: [
			{
				type: 'image',
				url: '/images/korean-learning.webp',
				alt: 'Korean learning platform lesson view'
			}
		],
		website: 'https://chaonelearn.com'
	},
	{
		slug: 'ita-trainer',
		title: 'ITA Interactional Competence Trainer',
		description:
			'A voice-based practice tool for international teaching assistants to build classroom interactional skills with an AI student.',
		longDescription:
			"Each activity isolates one interactional skill — managing turns, checking understanding, redirecting off-topic students, handling confusion — and wraps it in a tightly scoped roleplay scenario. The AI student's behavior is scripted to create the exact moment where that skill is needed. After the session, a separate LLM reviews the full transcript and returns coaching feedback: one strength, one next step, and a skill status. Built with Next.js, LiveKit, and the OpenAI Realtime API. Developed in active collaboration with applied linguistics researchers at USF.",
		tags: ['Voice AI', 'Ed Tech', 'Next.js', 'LiveKit', 'Research Collab'],
		year: '2025',
		client: 'USF Research Lab',
		media: [
			{ type: 'image', url: '/images/ita-trainer.webp', alt: 'ITA Trainer practice interface' }
		],
		website: 'https://ita-trainer.vercel.app/',
    repository: 'https://github.com/larrygrpolanco/ita-trainer'
	},
	{
		slug: 'fulbright-planner',
		title: 'Fulbright Planner',
		description: 'Reducing lesson planning time using structured AI prompting.',
		longDescription:
			'A tool designed for educators to reduce weekly lesson planning time by up to 4 hours through structured, pedagogically-sound AI prompt engineering.',
		tags: ['Bespoke Ed Software', 'Productivity', 'LLM'],
		year: '2025',
		client: 'Fulbright Program',
		media: [{ type: 'image', url: '/images/fulbright-planner.webp', alt: 'Fulbright Planner UI' }],
		website: 'https://fulbright-lesson-planner.vercel.app/',
		repository: 'https://github.com/larrygrpolanco/ETA-lesson-planner'
	},
	{
		slug: 'kpop-research-app',
		title: 'K-Pop Accents Research Explorer',
		description:
			'A proof of concept for turning a published linguistics paper into an interactive web experience.',
		longDescription:
			'Built around the paper "I Want to Be Born with That Pronunciation": Metalinguistic Comments About K-Pop Idols\' Inner Circle Accents by Jihye Kim and Luoxiangyu Zhang. The app makes the research data explorable: browse and filter fan comments from the dataset, view idol profiles, watch the analyzed YouTube videos, and read plain-language explainers on the linguistic concepts. An experiment in using web affordances — filtering, search, linking — to make academic findings accessible without dumbing them down.',
		tags: ['Research Dissemination', 'SvelteKit', 'Data Visualization', 'POC'],
		year: '2024',
		client: 'Research POC',
		media: [
			{
				type: 'image',
				url: '/images/kpop-research-app.webp',
				alt: 'K-Pop accents research explorer'
			}
		],
		website: 'https://research-paper-webapp-poc.vercel.app/'
	},
	{
		slug: 'lin2002-grader',
		title: 'LIN2002 Grading Assistant',
		description:
			"An AI-powered essay grader that generates written feedback in the instructor's voice for a linguistics and film studies course.",
		longDescription:
			"Students in LIN2002 write essays analyzing films and citing specific scenes with timestamps. This app grades those essays and generates feedback in the instructor's voice. Paste in a student essay, select the film module, click Grade. The app sends the essay to Gemini along with a system prompt, few-shot examples drawn from previously graded work, and the specific rubric — then returns a numerical score and a paragraph of written feedback ready to copy and send. Built with SvelteKit and Google Gemini.",
		tags: ['AI Grading', 'SvelteKit', 'Gemini', 'Ed Tech'],
		year: '2025',
		client: 'USF Linguistics Dept.',
		media: [
			{
				type: 'image',
				url: '/images/lin2002-grader.webp',
				alt: 'LIN2002 grading assistant interface'
			}
		]
	}
];
