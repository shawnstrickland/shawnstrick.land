# shawnstrick.land

Personal site, built with [Astro](https://astro.build) and Tailwind CSS.

## Local development

```sh
npm ci          # install dependencies
npm run dev     # dev server at http://localhost:4321
npm run build   # static build into dist/
```

## Adding content

Content is Markdown in `src/content/`. Add a file and it shows up on the site.

| Folder | Becomes | Key front matter |
|---|---|---|
| `src/content/posts/` | `/posts/<filename>/` | `title`, `pubDate`, `description`, `tags`, `draft` |
| `src/content/lessons/` | `/lessons/<filename>/` | `title`, `description`, `pubDate`, `free`, `videoUrl`, `level`, `lsProductId` |
| `src/content/downloads/` | listed on `/downloads/` | `title`, `description`, `pubDate`, `price`, `fileUrl`, `lsProductId`, `type` |

The schemas are in `src/content/config.ts`; the build fails with a clear error if front matter is missing or wrong.

Images and files go in `public/` and are served from the site root (`public/pdfs/x.pdf` → `/pdfs/x.pdf`).

Paid lessons and downloads link to Lemon Squeezy checkout using `lsProductId`. A paid lesson with no product ID shows "Coming soon".

## Deploying

`.github/workflows/deploy.yml` builds on every push. Pushes to `main` also sync `dist/` to the `shawnstrick.land` S3 bucket and invalidate the CloudFront cache. A deploy can also be started manually from the Actions tab.

Required repository secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`.
