// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://arden.nl',
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    // The design's code blocks are unhighlighted paper-2 panels; plain
    // pre/code lets the .prose styles own them.
    syntaxHighlight: false,
    // External links in md/mdx content open in a new tab, same as the
    // hand-written ones in the templates.
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }]],
  },
});