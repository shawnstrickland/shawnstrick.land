// Matches Hugo's tag URLs, e.g. "version control" -> "version-control".
export function tagSlug(tag: string): string {
  return tag.toLowerCase().trim().replace(/\s+/g, '-');
}
