
import Movie from './Movie'

export default function MovieList(props) {

    return (
        <>
            <h1>Movie List:</h1>

            {
                props.movies.map(movie => {
                    return (
                        <>
                        <Movie movie ={movie}/>
                        </>
                    )
                })
            }
          
        </>
    )
}