import Action from './Actionrow.js'
const MovieRow =(props) =>{
    return(
        <>
            <div className="row2">
                <div className="image"><img src={props.movie.image}/>
                     <div className="movieData">
                        <h1 className="movieName" >{props.movie.movieName}</h1>
                        <p className="para">{props.movie.movieYear+"|"+props.movie.durationtime+"|"+props.movie.genre}</p>
                        <h1 className="discription">Discription</h1>
                        <p className="discription">{props.movie.discription}</p>
                    
                        <Action />
                        
                    </div>
                </div>
            </div>           
        </>
    );
}
export default MovieRow;
