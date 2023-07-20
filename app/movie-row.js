import React from "react";
import Data from './data.js'
import Action from './Actionrow.js'
const Movie = (props) =>{
    return(
        <>
            <div className="row2">
                <div className="picture"><img src={props.item.image}/></div>
                <div className="movieData">
                    <h1 className="movieName" >{props.item.movieName}</h1>
                    <p className="para">{props.item.movieYear+"|"+props.item.durationtime+"|"+props.item.gener}</p>
                    <h1 className="discription">Discription</h1>
                    <p className="discription">{props.item.discription}</p>
                </div>
            </div>           
        </>
    );
}
export default Movie;
