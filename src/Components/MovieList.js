
import Movie from './Movie'

export default function MovieList(props) {

    return (
        <div className = "MovieList"
        style={{display : 'flex', flexWrap : 'wrap'}}>
            

            {
                props.movies.map(movie => {
                    return (
                        <>
                        <Movie movie ={movie} updateMovies={props.updateMovies}/>
                        </>
                    )
                })
            }
          
        </div>
    )
}