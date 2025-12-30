export interface Tool {
	slug: string;
	title: string;
	description: string; // Short description for list view
	longDescription: string; // Detailed description for tool page
	category: string; // "Research Tools" | "Learning Apps" | etc.
	tags: string[]; // Tech tags: Python, Web, LLM, etc.
	year: string;
	status: 'live' | 'beta' | 'in-development';
	repository: string; // GitHub URL
	documentation?: string; // Docs URL (optional)
	liveUrl?: string; // Demo URL (optional)
	downloadUrl?: string; // Download URL (optional)
	license: string; // "MIT" typically
	media: {
		type: 'image' | 'video';
		url: string;
		alt?: string;
	}[];
}

export const tools: Tool[] = [
	{
		slug: 'fulbright-lesson-planner',
		title: 'Fulbright Lesson Planner',
		description: 'Lesson planning tool for Fulbright English Teaching Assistants',
		longDescription:
			'A web-based lesson planning tool designed specifically for Fulbright English Teaching Assistants. Features include curriculum-aligned templates, activity suggestions, and time management helpers. Built to streamline the planning process while maintaining pedagogical best practices.',
		category: 'Learning Apps',
		tags: ['Web', 'SvelteKit', 'Education'],
		year: '2024',
		status: 'live',
		repository: 'https://github.com/larrygrpolanco',
		license: 'MIT',
		media: [
			{
				type: 'image',
				url: '/images/fulbright-planner.webp',
				alt: 'Fulbright Lesson Planner interface'
			}
		]
	},
	{
		slug: 'sabr-autocoder',
		title: 'SABR AutoCoder',
		description: 'LLM-assisted pipeline for qualitative coding and discourse analysis',
		longDescription:
			'SABR (System for Automated Behavioral Research) is an LLM-powered tool for qualitative researchers. It automates the coding process for discourse analysis, genre analysis, and move-step coding while maintaining transparency and reproducibility. Researchers can define custom coding schemes and SABR applies them consistently across large datasets.',
		category: 'Research Tools',
		tags: ['Python', 'LLM', 'NLP', 'Qualitative Research'],
		year: '2024',
		status: 'live',
		repository: 'https://github.com/larrygrpolanco',
		documentation: 'https://docs.example.com/sabr',
		license: 'MIT',
		media: [
			{
				type: 'image',
				url: '/images/sabr-hero.webp',
				alt: 'SABR AutoCoder dashboard'
			}
		]
	},
	{
		slug: 'genre-analysis-tool',
		title: 'Genre Analysis Tool',
		description: 'Automated move-step analysis for applied linguistics research',
		longDescription:
			'An automated tool for conducting move-step analysis in genre studies. Upload texts, define your analytical framework, and the tool identifies moves and steps according to your schema. Designed for researchers working with Swalesian genre analysis or similar methodologies.',
		category: 'Research Tools',
		tags: ['Python', 'NLP', 'Genre Analysis', 'Web'],
		year: '2025',
		status: 'in-development',
		repository: 'https://github.com/larrygrpolanco',
		license: 'MIT',
		media: [
			{
				type: 'image',
				url: '/images/genre-tool-hero.webp',
				alt: 'Genre Analysis Tool interface'
			}
		]
	}
];
