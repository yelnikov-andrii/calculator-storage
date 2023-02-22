import React, {Dispatch, SetStateAction} from 'react';

interface Props {
  value: string | undefined;
  checkedRadio: string | undefined;
  setCheckedRadio: Dispatch<SetStateAction<string | undefined>>;
}

export const RadioInput: React.FC <Props> = ({value, checkedRadio, setCheckedRadio}) => {
  return (
    <div className='radioInput'>
      <label htmlFor={value} className="radioInput__label">
        {value}
      </label>
      <input
        type="radio"
        className='radioInput__input'
        id={value}
        value={value}
        checked={value === checkedRadio}
        onChange={(e) => {
          setCheckedRadio(e.target.value)
        }}
      />
    </div>
  );
};

