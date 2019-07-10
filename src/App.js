import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import AvengerPage from './components/AvengerPage';
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
     <Route exact path="/avengers" component={AvengersList}/>
     <Route path="/avengers/:id" component={AvengerPage}/>
    </div>
  );
}

}

export default App;
