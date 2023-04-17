type FieldType = {
  type: 'number' | 'operator' | 'specialChar';
  value?: string;
  label: string;
  onClick?: () => void;
};

const fields: FieldType[] = [
  { type: 'operator', value: '+', label: '+' },
  { type: 'operator', value: '-', label: '-' },
  { type: 'operator', value: '*', label: '*' },
  { type: 'operator', value: '/', label: '/' },
  { type: 'operator', value: '=', label: '=' },
  { type: 'number', value: '1', label: '1' },
  { type: 'number', value: '2', label: '2' },
  { type: 'number', value: '3', label: '3' },
  { type: 'number', value: '4', label: '4' },
  { type: 'number', value: '5', label: '5' },
  { type: 'number', value: '6', label: '6' },
  { type: 'number', value: '7', label: '7' },
  { type: 'number', value: '8', label: '8' },
  { type: 'number', value: '9', label: '9' },
  { type: 'number', value: '0', label: '0' },
  { type: 'number', value: '.', label: '.' },
  { type: 'specialChar', value: 'clear', label: 'c' },
  { type: 'specialChar', value: 'sign', label: '+/-' },
  { type: 'specialChar', value: 'percent', label: '%' }
];

export default fields;
