import React from 'react';
import { MyInput } from './MyInput';
import { Range } from './Range';
import { InputContext } from '../../context/context';

export const Ranges: React.FC = () => {
  const {storage, transfer} = React.useContext(InputContext);
  return (
    <div className='container'>
    <div className='ranges'>
      <Range
        title="Storage"
      >
        <MyInput
          name="storage"
          min={1}
          max={1000}
          step="1"
          value={storage.value}
          change={storage.onchange}
        />
      </Range>
      <Range 
        title="Transfer"
      >
        <MyInput 
          name="transfer"
          min={1}
          max={1000}
          step="1"
          value={transfer.value}
          change={transfer.onchange}
        />
      </Range>
    </div>
    </div>
  );
};

