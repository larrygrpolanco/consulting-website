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
}

export const projects: Project[] = [
	// {
	// 	slug: 'sabr-genre-analysis',
	// 	title: 'SABR / Genre Analysis Tool',
	// 	description: 'Automating qualitative coding frameworks with high human agreement.',
	// 	longDescription: 'How we automated a manual coding framework (Genre Analysis "Moves & Steps") to reach 78% human agreement using custom Python/LLM workflows.',
	// 	tags: ['Research Instrumentation', 'NLP', 'Python'],
	// 	year: '2024',
	// 	client: 'University Research Lab',
	// 	media: [
	// 		{ type: 'image', url: '/projects/sabr/1.webp', alt: 'SABR Tool Interface' }
	// 	]
	// },
	{
		slug: 'taped-chinese',
		title: 'TapedChinese',
		description: 'A production-grade language platform with LLM-generated content.',
		longDescription: 'Developing a comprehensive language learning platform that utilizes Generative AI to create infinite, level-appropriate practice material aligned with specific pedagogy.',
		tags: ['Bespoke Ed Software', 'AI', 'SvelteKit'],
		year: '2024',
		client: 'Educational Startup',
		media: [
			{ type: 'image', url: '/images/taped-chinese.webp', alt: 'TapedChinese Dashboard' }
		]
	},
	{
		slug: 'fulbright-planner',
		title: 'Fulbright Planner',
		description: 'Reducing lesson planning time using structured AI prompting.',
		longDescription: 'A tool designed for educators to reduce weekly lesson planning time by up to 4 hours through structured, pedagogically-sound AI prompt engineering.',
		tags: ['Bespoke Ed Software', 'Productivity', 'LLM'],
		year: '2023',
		client: 'Fulbright Program',
		media: [
			{ type: 'image', url: '/projects/fulbright/1.webp', alt: 'Fulbright Planner UI' }
		]
	},
	{
		slug: 'conference-app',
		title: 'Conference Companion App',
		description: 'Increasing audience engagement through real-time interaction.',
		longDescription: 'Real-time web apps that allow conference audiences to interact with a speaker\'s data or models during a talk, turning static presentations into interactive experiences.',
		tags: ['Interactive Dissemination', 'Real-time', 'WebSockets'],
		year: '2024',
		client: 'TESOL/AAAL presenters',
		media: [
			{ type: 'image', url: '/projects/conference-app/1.webp', alt: 'Conference App Interaction' }
		]
	},
	{
		slug: 'cancer-research-data',
		title: 'Cancer Research Data Pipeline',
		description: 'Managing large-scale, sensitive datasets with high fidelity.',
		longDescription: 'Professional cleaning, organization, and harmonization of large-scale, sensitive cancer research datasets to prepare them for rigorous academic analysis.',
		tags: ['Research Instrumentation', 'Data Engineering', 'Healthcare'],
		year: '2023',
		client: 'Medical Research Center',
		media: [
			{ type: 'image', url: '/projects/cancer-research/1.webp', alt: 'Data Pipeline Visualization' }
		]
	}
];
