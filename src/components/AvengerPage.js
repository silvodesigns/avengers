import React from 'react';
import { Route, Link } from 'react-router-dom';


function AvengerPage(props){


    const id = props.match.params.id;
    const avenger = props.avengers.find(avenger =>`${avenger.id}` === id);
    return(
        <div>
            <img className="character-image " src={avenger.img} alt={avenger.name}/>
            <div className="character-info-wrapper">
                <h1>{avenger.name}</h1>
                <h4>{avenger.nickname}</h4>
                <p>{avenger.description}</p>
            </div>
            <Link to={`/avengers/${id}/details`}>Avenger Details</Link>
            <Link to={`/avengers/${id}/movies`}>Movies</Link>
            <Route path="/avengers/:id/details" render={props => <p>{avenger.description}</p>}/>
            <Route path="/avengers/:id/movies"   render={props => <div>Movies List</div>}/>
           
        </div>
    );

}

export default AvengerPage;
