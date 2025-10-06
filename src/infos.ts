import { ref } from 'vue';
import { marked } from 'marked';

interface InfoFrontmatter {
  title: string;
  img: string;
  alt: string;
  after_question: number;
}

export interface ParsedInfo extends InfoFrontmatter {
  path: string;
  content: string;
}

function parseFrontmatter(rawContent: string): ParsedInfo {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = rawContent.match(frontmatterRegex);

  const defaultData: ParsedInfo = {
    path: '',
    title: '',
    img: '',
    alt: '',
    after_question: 0,
    content: marked(rawContent)
  };

  if (!match) {
    return defaultData;
  }

  const frontmatterText = match[1];
  const bodyContent = match[2];

  const frontmatter: Partial<InfoFrontmatter> = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');

      if (key === 'after_question') {
        frontmatter[key] = parseInt(value, 10);
      } else {
        frontmatter[key as keyof InfoFrontmatter] = value as any;
      }
    }
  });

  return {
    path: '',
    title: frontmatter.title || '',
    img: frontmatter.img || '',
    alt: frontmatter.alt || '',
    after_question: frontmatter.after_question || 0,
    content: marked(bodyContent)
  };
}

const modules = import.meta.glob('./infos/*.md', { query: '?raw', import: 'default', eager: true });

export const infos = ref<ParsedInfo[]>(
  Object.entries(modules).map(([path, content]) => ({
    ...parseFrontmatter(content as string),
    path
  }))
);
