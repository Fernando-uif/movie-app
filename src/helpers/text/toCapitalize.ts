export const toCapitalize = (completeWord: string, characterToSplit: string) => {
  const arrayWords = completeWord.split(characterToSplit);

  const allWord = arrayWords.map((word) => {
    const firsLetter = word.slice(0, 1).toUpperCase();
    const restWord = word.slice(1, word.length);
    const completeWord = `${firsLetter}${restWord}`;
    return completeWord;
  });

  return allWord.join(" ");
};
