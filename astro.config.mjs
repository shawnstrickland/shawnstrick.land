import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://shawnstrick.land',
  integrations: [tailwind()],
  redirects: {
    // Old Hugo URL for this post. Kept so existing links keep working.
    '/posts/referencing_git_file_versions_in_perpetutity':
      '/posts/referencing-git-file-versions-in-perpetuity',
  },
});
