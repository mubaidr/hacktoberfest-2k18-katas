export const stringRepeat = (string, number) => {
  // TO IMPLEMENT IN ANOTHER PR
  if (
    typeof string !== 'string' || // first arg. should be a string
    string.length === 0 || // string lenght should be >=0
    isNaN(number) || // number should not be NaN
    parseInt(number) !== number || // number should be decimal
    typeof number !== 'number' || // type of number should be `number`
    number <= 0 // number should be greater than zero
  ) {
    throw new Error('Invalid arguments!');
  }

  let result = '';
  for (let i = 0; i < number; i += 1) {
    result += string;
  }
  return result;
};
