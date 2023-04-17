export const operate = (operator, accValue, inputValue) => {
  switch (operator) {
    case '+':
      return accValue + inputValue;
    case '-':
      return accValue - inputValue;
    case '*':
      return accValue * inputValue;
    case '/':
      return accValue / inputValue;
    case '=':
      return inputValue;
  }
};
