import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import AvengerPage from './components/AvengerPage';
import avengers from './avengersData';


  class App extends React.Component{
    constructor(){
      super();
      this.state= {
        avengers: avengers
      }
    }

  render(){

    const {avengers} = this.state;

  return (
    <div className="App">
    <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>

    </ul>
    
     <Route exact path="/" component={Home}/>
     <Route exact path="/avengers" render={props => <AvengersList {...props} avengers={avengers}/>}/>
     <Route path="/avengers/:id"   render={props => <AvengerPage {...props} avengers={avengers}/>}/>
    </div>
  );
}

}

export default App;
