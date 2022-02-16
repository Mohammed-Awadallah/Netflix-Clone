import React, { useEffect, useState } from "react";
import MovieList from './MovieList';


function Home() {

   
    const [movie, getMovie] = useState();
    const getMovies = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
            const data = await response.json();
            console.log(data);
            getMovie(data);
        } catch (error) {
            console.log("error", error);
        }
    };
    function updateMovies(updateMovie,id) {
        let updatedMovie = movie.map(movie=>{
            if(movie.id === id){
                movie.comment = updateMovie.comment;
                return movie;
            }else{
                return movie;
            }
        })
        getMovie(updatedMovie);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Movie List:</h2>
                {
                movie && (<MovieList movies={movie} updateMovies={updateMovies} />)
                }
        </div>
  )
}

export default Home;