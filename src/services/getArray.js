// Takes in csv string and returns Array throws error if value is NaN
export default str => {
  let array = str.split(',');
  return array.map(val => {
    let num = parseInt(val);
    if (isNaN(num)) {
      throw 'Input Contains Invalid Number';
    }
    return num;
  });
};
