import React, { createContext } from 'react';
import './App.css';
import Children from './Children';

export const AppContext = createContext()

function App() {

  const user = {
    name: "김채원",
    job: "가수"
  }
  
  return (
    <AppContext.Provider value={user}>
    <div className="App">
        <h1>HI</h1>
        <Children />
        
    </div>

    </AppContext.Provider>
  );
}

export default App;
