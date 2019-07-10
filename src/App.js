import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import avengers from './avengersData';


  class App extends React.Component{
    constructor(){
      super();
      this.state= {
        evengers: avengers
      }
    }

  render(){
  return (
    <div className="App">
    
     <Route exact path="/" component={Home}/>
     <Route path="/avengers" component={AvengersList}/>
    </div>
  );
}

}

export default App;
