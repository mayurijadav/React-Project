
import './globals.css'
import  Header from './header.js' 
import Watch from './watch.js'
import Movie from './movie-row.js' 
import Footer from './footer.js' 
import Data from './data.js'


const app=() =>{
    return(
        <>
             
            <Header/> 
            <Watch />
            <Movie 
                 movieInformation={Data[0]}
            />   
            <Movie 
                movieInformation={Data[1]}
            />  
            <Movie 
                movieInformation={Data[2]}
            />
             <Movie 
                movieInformation={Data[3]}
            />
            <Movie
                movieInformation={Data[4]}
            />
                                                 
            <Footer />


        </>
    );
}
export default app;

