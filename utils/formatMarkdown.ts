function fixAsterisk(content: string) {
  const doubleAsterisk = /\*\*/g;
  const firstChar = /^[^\,\.\:\;\s]/g;
  const endChar = /[^\,\.\:\;\s]$/g;
  const breakLine = /\n([\s]*)$/g;

  const pieces =  content.split(doubleAsterisk);

  let isFirst = true;
  let needSpace = false;
  content = pieces.reduce((prev, cur) => {
    if(!isFirst && cur.match(firstChar) && needSpace) {
      needSpace = false;
      cur = " " + cur;
    } else {
      needSpace = false;
    };

    isFirst = false;

    if(cur.match(endChar)) {
      needSpace = true;
    } else if(cur.match(breakLine)) {
      isFirst = true;
    };
    
    prev.push(cur);
    return prev;
  }, [] as string[]).join("**");

  return content;
};

export function formatMarkdown(content: string) {
  const checkedRegex = /\-   \\\[x\]/g;
  const uncheckedRegex = /\-   \\\[ \]/g;

  content = content.replace(checkedRegex, "- [x]");
  content = content.replace(uncheckedRegex, "- [ ]");

  content = fixAsterisk(content);

  return content;
};