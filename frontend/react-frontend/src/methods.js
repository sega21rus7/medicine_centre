export function replaceLineBreaks(line) {
  if (line) {
    return line.replace(/<br>/g, '\n')
  }
}

export function getFullName(user) {
  const lastName = user.last_name;
  const firstName = user.first_name;
  const middleName = user.middle_name;

  if (lastName && firstName && middleName)
    return `${lastName} ${firstName} ${middleName}`;
  return user.username;
}
