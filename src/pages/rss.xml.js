import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Aluno de Astro | Blog',
    description: 'Minha jornada aprendendo Astro',
    site: 'https://tutorial-blog-astro1.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt-br</language>`,
  });
}