import Button from './Button';

type Field = {
  label: string;
  type: 'operator' | 'number' | 'specialChar';
};

type FieldMapProps = {
  operators: Field[];
  specialChars: Field[];
  numbers: Field[];
  onClickSpecialChars: { [key: string]: () => void };
  onClickNumbers: (value: string) => void;
  onClickOperator: (value: string) => void;
};

const colors = { operator: '#f69a07', number: '#313131', specialChar: '#9f9f9f' };
const FieldMap: React.FC<FieldMapProps> = ({
  operators,
  specialChars,
  numbers,
  onClickSpecialChars,
  onClickNumbers,
  onClickOperator
}) => {
  console.log(onClickSpecialChars);
  return (
    <div className="calcContainer">
      <div className="special-char">
        {specialChars.map((field, index) => (
          <Button
            key={index}
            label={field.label}
            color={colors[field.type]}
            fontSize="0.5rem"
            textColor="#000000"
            onClick={onClickSpecialChars[field.value]}
          />
        ))}
      </div>
      <div className="operators">
        {operators.map((field, index) => (
          <Button
            key={index}
            label={field.label}
            color={colors[field.type]}
            onClick={() => onClickOperator(field.value)}
          />
        ))}
      </div>
      <div className="numbers">
        {numbers.map((field, index) => (
          <Button
            key={index}
            label={field.label}
            color={colors[field.type]}
            onClick={() => onClickNumbers(field.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default FieldMap;
