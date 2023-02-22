import React from 'react';
import { InputContext } from '../../context/context';
import { RadioInput } from './RadioInput';

interface Props {
  title: string;
  icon: string;
  color: string;
  minPrice: number;
  transferCoef: number;
  storageCoef?: number;
  radio: boolean;
  radioValueOne?: string;
  radioValueTwo?: string;
  maxPrice?: number;
  storageCoefArr?: number[];
  forFree?: number;
}

export const GraphItem: React.FC <Props> = ({title, icon, color, minPrice, transferCoef, storageCoef, radio, radioValueOne, radioValueTwo, maxPrice, storageCoefArr, forFree}) => {
  const {transfer, storage} = React.useContext(InputContext);
  const [checkedRadio, setCheckedRadio] = React.useState(radioValueOne);
  const [storageCoefRecount, setStorageCoefRecount] = React.useState(storageCoef || 0);
  let sum = minPrice || 0;

  React.useEffect(() => {
    if (radio === true) {
      setCoefStorage();
    }
  }, [checkedRadio]);

  const setCoefStorage = () => {
    if (storageCoefArr) {
      if (checkedRadio === radioValueOne) {
        setStorageCoefRecount(storageCoefArr[0]);
      }

      if (checkedRadio === radioValueTwo) {
        setStorageCoefRecount(storageCoefArr[1]);
      }
    }
  };

  const getSum = (sum: number) => {
      const newSum = transferCoef * transfer.value + storageCoefRecount * storage.value;
      if (newSum > minPrice) {
        sum = newSum;
      }
  
      if (maxPrice && maxPrice < newSum) {
        sum = maxPrice;
      }
  
      if (forFree) {
        if (storage.value > forFree && transfer.value > forFree) {
          sum = transferCoef * (transfer.value - forFree) + storageCoefRecount * (storage.value - forFree);;
        }

        if (storage.value < forFree && transfer.value < forFree) {
          sum = 0;
        }
      }
  
      return sum;
  };

  sum = getSum(sum);

  return (
    <div className='graphItem'>
      <div className='graphItem__info'>
      <div className='graphItem__txtBlock'>
      <h2 className='graphItem__title'>
        {title}
      </h2>
      {radio === true && (
        <div className='graphItem__radio'>
        <RadioInput
          value={radioValueOne}
          checkedRadio={checkedRadio}
          setCheckedRadio={setCheckedRadio}
        />
        <RadioInput
          value={radioValueTwo}
          checkedRadio={checkedRadio}
          setCheckedRadio={setCheckedRadio}
        />
        </div>
      )}
      </div>
      <img
        alt=''
        src={icon}
        className="graphItem__icon"
      />
      </div>
      <div className='graphItem__line'>
        <div 
          className='graphItem__color'
          style={{backgroundColor: color, width: `${sum.toFixed(2)}%` }}
        >
        </div>
      </div>
      <span className='graphItem__sum'>
        {`${sum.toFixed(2)}$`}
      </span>
    </div>
  );
};

