import React from 'react';

interface Props {
  title: string;
  children: any;
}

export const Range: React.FC <Props> = ({title, children}) => {
  return (
    <div className='range'>
      <h2 className='range__title'>
        {title}
      </h2>
      {children}
    </div>
  );
};

