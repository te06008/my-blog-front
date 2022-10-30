export const tagParser = (tagString: string): string[] => {
  const removedTag = tagString.replaceAll(' ', '');
  if (removedTag.length === 0) {
    return [];
  }
  const divideTag = removedTag.split(',');
  return divideTag;
};
