import React from 'react';
import './App.scss';
import { Ranges } from './Components/Ranges/Ranges';
import { Graph } from './Components/Graph/Graph';
import { useInput } from './hooks/useInput';
import { InputContext } from './context/context';

function App() {
  const storage = useInput(100);
  const transfer = useInput(500);

  return (
    <InputContext.Provider value={{storage, transfer}}>
      <div className="App">
        <Ranges />
        <Graph />
      </div>
    </InputContext.Provider>
  );
}

export default App;
