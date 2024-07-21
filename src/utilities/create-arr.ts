const createArr = (data: []) => {
  const arr = [];
  if (data)
    for (let i = 0; i < data.length; i++) {
      arr.push(i);
    }
  return arr;
};
export default createArr;
