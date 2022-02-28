import './app.scss';
import Home from "./home/Home"
import Data from "./data"
import React,{ useState, useContext } from 'react';

export let dataContext = React.createContext();

function App() {
  let [ portfolio, setPortfolio] = useState(Data);

  console.log(Data)
  return (
    <div className="App">
      <dataContext.Provider value={portfolio}>
      <Home />
      </dataContext.Provider>
    </div>
  );
}

export default App;