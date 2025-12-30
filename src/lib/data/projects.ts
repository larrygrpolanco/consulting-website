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
		title: 'Taped Chinese',
		description: 'A modern web-based language learning platform digitizing FSI course materials with a vintage cassette aesthetic.',
		longDescription: 'Standard Chinese Platform transforms the comprehensive FSI course (originally used to train diplomats) into an accessible, interactive format for modern learners. The platform preserves the original 9-module structure while adding interactive features and a user-friendly interface.',
		tags: ['Education Software', 'Web App', 'SvelteKit'],
		year: '2024',
		client: 'Internal Product',
		media: [
			{ type: 'image', url: '/images/taped-chinese.webp', alt: 'Taped Chinese Interface' }
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
