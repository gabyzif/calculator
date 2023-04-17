import Display from './UI/Display';
import FieldMap from './UI/FieldMap';
import fields from './Content/fields';
import { useState } from 'react';
import { operate } from './utils/functions';

const Container = ({}) => {
  const [currentOperator, setCurrentOperator] = useState();
  const [parcialResult, setParcialResult] = useState(0);

  const [total, setTotal] = useState('0');
  const [expectsOperand, setExpectsOperand] = useState(false);

  const operators = fields.filter((field) => field.type === 'operator');
  const specialChars = fields.filter((field) => field.type === 'specialChar');
  const numbers = fields.filter((field) => field.type === 'number');

  const clearScreen = () => {
    setTotal('0');
  };

  const reverseSign = () => {
    setTotal(String(-parseFloat(total)));
  };

  const percentage = () => {
    setTotal(String(parseFloat(total) / 100));
  };

  const addDecimalPoint = () => {
    if (expectsOperand) {
      setTotal('0.');
    } else if (!total.includes('.')) setTotal(total + '.');
    setExpectsOperand(false);
  };

  const onClickNumbers = (value) => {
    if (value === '.') addDecimalPoint();
    console.log(value);
    if (expectsOperand) {
      setTotal(String(value));
      setExpectsOperand(false);
    } else setTotal(total === '0' ? String(value) : total + value);
  };

  const onClickOperator = (operator) => {
    const inputValue = parseFloat(total);
    if (parcialResult === null) {
      setParcialResult(inputValue);
    } else {
      if (currentOperator) {
        const resultValue = operate(currentOperator, parcialResult, inputValue);
        setParcialResult(resultValue);
        setTotal(String(resultValue));
      }
    }
    setExpectsOperand(true);
    setCurrentOperator(operator);
  };

  const specialCharMap = {
    clear: () => clearScreen(),
    percent: () => percentage(),
    sign: () => reverseSign()
  };

  return (
    <div>
      <Display total={total} />
      <FieldMap
        operators={operators}
        specialChars={specialChars}
        numbers={numbers}
        onClickSpecialChars={specialCharMap}
        onClickOperator={onClickOperator}
        onClickNumbers={onClickNumbers}
      />
    </div>
  );
};

export default Container;
