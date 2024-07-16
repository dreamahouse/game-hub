const sliceWord = (word: string, index: number) => {
  return word.length > index ? word.slice(0, index) + "..." : word;
};
export default sliceWord;
