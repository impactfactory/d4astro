
/* Mode Toggle *********************************
export const btn = document.querySelector(".mode-toggle");
export const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
export const currentTheme = localStorage.getItem("theme");

if (prefersDarkScheme.matches && currentTheme == "dark") {
  document.body.classList.add("dark");
} else if (prefersDarkScheme.matches && currentTheme == "light") {
  document.body.classList.remove("dark");
} else if (prefersDarkScheme.matches) {
  document.body.classList.add("dark");
} else if (prefersDarkScheme.matches == false && currentTheme == "dark") {
  document.body.classList.add("dark");
} else if (prefersDarkScheme.matches == false && currentTheme == "light") {
} else if (prefersDarkScheme.matches == false) {
} else {
}

export function toggleMode() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    var theme = "light";
    localStorage.setItem("theme", theme);
  } else {
    document.body.classList.add("dark");
    var theme = "dark";
    localStorage.setItem("theme", theme);
  }
}



/* Stuff from before *********************************/
export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'de_CH',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Deutsch: 'de',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
	de: {
		'Navigation': [
			{ text: 'Einf??hrung', link: 'de/introduction' },
			{ text: 'Seite 2', link: 'de/page-2' },
			{ text: 'Seite 3', link: 'de/page-3' },
		],
		'Mehr...': [{ text: 'Seite 4', link: 'de/page-4' }],
	},
};
