import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
     <Route path="/" component={Home}/>
     <Route path="/avengers" component={AvengersList}/>
    </div>
  );
}

export default App;
