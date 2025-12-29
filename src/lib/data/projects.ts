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
	{
		slug: 'project-1',
		title: 'No Moss',
		description: 'Capstone project for final year of university. Fullstack web app built with Nuxt 4.',
		longDescription: 'Capstone project for final year of university. Worked in a team of 5 and partnered with a company called No Moss: a purpose centric organization who promotes purpose centric work practices such as purpose reflection and career alignment. Built a fullstack web app using Nuxt 4 to help users track their purpose and goals.',
		tags: ['Purpose Discovery', 'Fullstack Development', 'Nuxt 4'],
		year: '2025',
		client: 'University',
		media: [
			{ type: 'image', url: '/projects/project-1/1.webp', alt: 'No Moss 1' },
			{ type: 'video', url: '/projects/project-1/2.mp4' },
			{ type: 'video', url: '/projects/project-1/3.mp4' },
			{ type: 'video', url: '/projects/project-1/4.mp4' },
			{ type: 'image', url: '/projects/project-1/5.webp', alt: 'No Moss 5' }
		]
	},
	{
		slug: 'project-2',
		title: 'MTech',
		description: 'A platform for technical education and resource management.',
		longDescription: 'MTech is a comprehensive platform designed to streamline technical education and resource allocation for engineering students and faculty.',
		tags: ['Education Tech', 'React', 'TypeScript'],
		year: '2024',
		client: 'MTech Inc.',
		media: [
			{ type: 'image', url: '/projects/project-2/1.webp', alt: 'MTech 1' },
			{ type: 'video', url: '/projects/project-2/2.mp4' },
			{ type: 'image', url: '/projects/project-2/3.webp', alt: 'MTech 3' },
			{ type: 'image', url: '/projects/project-2/4.webp', alt: 'MTech 4' },
			{ type: 'video', url: '/projects/project-2/5.mp4' }
		]
	},
	{
		slug: 'project-3',
		title: 'Kora',
		description: 'Interactive language learning platform with a focus on Korean.',
		longDescription: 'Kora is an interactive platform that leverages modern pedagogical theories to provide a deep and engaging Korean language learning experience.',
		tags: ['Linguistics', 'Interactive', 'Next.js'],
		year: '2024',
		client: 'Kora Education',
		media: [
			{ type: 'image', url: '/projects/project-3/1.webp', alt: 'Kora 1' },
			{ type: 'video', url: '/projects/project-3/2.mp4' },
			{ type: 'image', url: '/projects/project-3/3.webp', alt: 'Kora 3' },
			{ type: 'image', url: '/projects/project-3/4.webp', alt: 'Kora 4' },
			{ type: 'video', url: '/projects/project-3/5.mp4' }
		]
	},
	{
		slug: 'project-4',
		title: 'Portfolio v1',
		description: 'Initial version of my personal portfolio showcasing creative development.',
		longDescription: 'The first iteration of my personal portfolio, focusing on clean design and experimental web technologies to showcase my journey as a creative developer.',
		tags: ['Creative Dev', 'SvelteKit', 'GSAP'],
		year: '2023',
		client: 'Personal',
		media: [
			{ type: 'image', url: '/projects/project-4/1.webp', alt: 'Portfolio v1 1' },
			{ type: 'video', url: '/projects/project-4/2.mp4' },
			{ type: 'image', url: '/projects/project-4/3.webp', alt: 'Portfolio v1 3' },
			{ type: 'image', url: '/projects/project-4/4.webp', alt: 'Portfolio v1 4' },
			{ type: 'image', url: '/projects/project-4/5.webp', alt: 'Portfolio v1 5' }
		]
	}
];
