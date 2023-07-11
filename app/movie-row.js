import Data from './data.js'
import Action from './Actionrow.js'
const Movie =(props) =>{
    return(
        <>
            <div className="row2">
                <div className="image"><img src={props. movieInformation.image}/></div>
                <div className="movieData">
                    <h1 className="movieName" >{props. movieInformation.movieName}</h1>
                    <p className="para">{props. movieInformation.movieYear+"|"+props. movieInformation.durationtime+"|"+props. movieInformation.genre}</p>
                    <h1 className="discription">Discription</h1>
                    <p className="discription">{props. movieInformation.discription}</p>
                   
                    <Action />
                    
                </div>
            </div>           
        </>
    );
}
export default Movie;
