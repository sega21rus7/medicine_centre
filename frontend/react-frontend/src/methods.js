export function replaceLineBreaks(line) {
  if (line) {
    return line.replace(/<br>/g, '\n')
  }
}
