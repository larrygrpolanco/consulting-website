export interface Tool {
	slug: string;
	title: string;
	description: string;
	longDescription: string;
	category: string;
	tags: string[];
	year: string;
	status: 'live' | 'beta' | 'in-development';
	repository: string;
	liveUrl?: string;
	license: string;
}

export const tools: Tool[] = [
	{
		slug: 'autoanki',
		title: 'AutoAnki',
		description: 'Turn a PDF or text file into a ready-to-import Anki vocabulary deck with TTS audio.',
		longDescription:
			"AutoAnki extracts vocabulary from lesson materials, writes five unique example sentences per word grounded in SLA research (Krashen's i+1), generates TTS audio via OpenAI, and packages everything as a ready-to-import .apkg file. Each word produces 5 card types: recognition, fill-in-blank, production, comprehension, and listening.",
		category: 'Learning Tools',
		tags: ['Python', 'CLI', 'LLM', 'TTS', 'Anki'],
		year: '2025',
		status: 'live',
		repository: 'https://github.com/larrygrpolanco/AutoAnki-SLA',
		license: 'MIT'
	},
	{
		slug: 'scholar-scraper',
		title: 'Scholar Keyword Scraper',
		description:
			'Search Google Scholar and ERIC, then auto-deduplicate and score results by relevance.',
		longDescription:
			'A Python tool for broad literature sweeps across multiple academic databases. Scrapes Google Scholar and ERIC for papers matching your keyword pairs, removes duplicates using fuzzy title matching, and labels each paper High / Medium / Low relevance. Supports chunked collection with automatic checkpointing so you can stop and resume without re-doing work.',
		category: 'Research Tools',
		tags: ['Python', 'Selenium', 'Web Scraping', 'NLP'],
		year: '2025',
		status: 'live',
		repository: 'https://github.com/larrygrpolanco/scholar-keyword-scrapper',
		license: 'MIT'
	},
	{
		slug: 'cc-news-corpus',
		title: 'CC-NEWS Corpus Pipeline',
		description:
			'Reproducible pipeline for building a targeted research corpus from the Common Crawl web archive.',
		longDescription:
			'A three-phase pipeline for extracting and analyzing a targeted corpus from Common Crawl. Phase 1 uses the CDX index to identify matching URLs without downloading the full archive. Phase 2 extracts only the relevant WARC segments locally or via AWS S3/EC2. Phase 3 parses HTML to retrieve article text and metadata. Built to extract 13,000+ Brookings Institution policy articles for NLP and discourse analysis research.',
		category: 'Research Tools',
		tags: ['Python', 'Data Engineering', 'AWS', 'NLP', 'Common Crawl'],
		year: '2025',
		status: 'live',
		repository: 'https://github.com/larrygrpolanco/CC-NEWS-Corpus',
		license: 'MIT'
	},
	{
		slug: 'llm-temperature-consistency',
		title: 'LLM Temperature & Consistency',
		description:
			'Replication package studying how temperature settings affect LLM annotation reliability.',
		longDescription:
			'A fully reproducible research package testing how OpenAI temperature settings (0.0–2.0) affect consistency and accuracy when using LLMs for rhetorical move-step annotation. Key finding: temperatures of 0.0–0.2 give significantly more consistent results without hurting accuracy; temperatures above 1.6 produce unusable output. Includes all scripts, config, and step-by-step instructions accessible to non-programmers.',
		category: 'Research Tools',
		tags: ['Python', 'OpenAI', 'Applied Linguistics', 'Replication'],
		year: '2025',
		status: 'live',
		repository: 'https://github.com/larrygrpolanco/llm-temperature-consistency',
		license: 'MIT'
	}
];
