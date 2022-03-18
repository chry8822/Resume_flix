import './app.scss';
import Home from "./home/Home"
import Data from "./data"
import React, { useState } from 'react';


export let dataContext = React.createContext();

function App() {
  let [portfolio, setPortfolio] = useState(Data);

  function pageToHome() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  console.log(Data)
  return (
    <div className="App">
      <dataContext.Provider value={portfolio}>
        <Home pageToHome={pageToHome} />

      </dataContext.Provider>
    </div>
  );
}

export default App;