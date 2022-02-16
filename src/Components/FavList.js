import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'

function FavList(props) {
    async function handleDelete(id){
        const response = await fetch(`${process.env.REACT_APP_SERVER}/MOVIE/${id}`,{
            method: 'DELETE',
        });
        if(response.status === 204){
            props.getMovieFromDb();
            Swal.fire(
                'Delete!',
                'The Movie has been Deleted!',
                'success'
            )
        }
    }

    return (
        <>
        <h1>Your Favourites</h1>
        <div style={{display : 'flex', flexWrap : 'wrap',}}>
            
            {
                props.favListData && props.favListData.map(movie => {
                    return (
                        <div style={{margin : '20px'}}>
                        <Card style={{ width: '200px', backgroundColor: '#bcbcbc', marginBottom: '30px', height: '550px' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text style={{ fontSize: '10px', fontWeight: 'bold', border: '1px solid black', borderRadius: '12px', padding: '2px' }}>
                                    Overview:  {movie.overview.substring(0, 180)}
                                </Card.Text>
                                <Card.Text>
                                    {movie.comment ? movie.comment : ''}
                                </Card.Text>
                                <Card.Text>
                                    {movie.release_date}
                                </Card.Text>
                                <Button style={{ position: 'absolute',width: '50%' , bottom: '0', left : '100px'}} variant="primary" onClick={()=>{handleDelete(movie.id)}}>Delete</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default FavList;