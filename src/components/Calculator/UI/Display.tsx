import React from 'react';

type DisplayProps = {
  total: string;
};

const Display: React.FC<DisplayProps> = ({ total }) => {
  return (
    <div className="flex flex-col items-end m-3">
      <div className="text-white text-3xl mb-1">{total}</div>
    </div>
  );
};

export default Display;
