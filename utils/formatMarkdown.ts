export function formatMarkdown(content: string) {
  const checkedRegex = /\-   \\\[x\]/g;
  const uncheckedRegex = /\-   \\\[ \]/g;

  content = content.replace(checkedRegex, "- [x]");
  content = content.replace(uncheckedRegex, "- [ ]");

  return content;
};