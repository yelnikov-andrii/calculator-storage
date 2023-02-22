import React from 'react';
import { InputObject } from '../types/type';

interface Props {
  storage: InputObject;
  transfer: InputObject;
}

export const InputContext = React.createContext<Props>({storage: {value: 0, onchange: () => {}}, transfer: {value: 0, onchange: () => {}}});