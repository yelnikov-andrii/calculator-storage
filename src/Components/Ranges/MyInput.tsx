import React from 'react';

interface Props {
  name: string;
  min: number;
  max: number;
  step: string;
  value: number;
  change: ((newValue: number) => void);
}

export const MyInput: React.FC <Props> = ({name, min, max, step, value, change}) => {
  return (
    <div className='myInput'>
      <div className='myInput__block'>
      <span className='myInput__txt'>
        {min}
      </span>
      <input
        className='myInput__range'
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          change(+e.target.value);
        }}
      />
      <span className='myInput__txt'>
        {max}
      </span>
      </div>
      <input 
        type="text"
        value={value}
        className="myInput__value"
        onChange={(e) => {
          if (!isNaN(+e.target.value) && +e.target.value >= min && +e.target.value <= max) {
            change(+e.target.value);
          }
        }}
      />
    </div>
  );
};

