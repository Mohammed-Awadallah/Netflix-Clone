
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from './ModalMovie';
import { useState } from 'react';

function Movie(props){
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovie] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
function handleShowModal(data){
    handleShow();
    setChosenMovie(data)
}

    return(
        <>
    <Card style={{ width: '200px', backgroundColor : '#bcbcbc', marginBottom : '30px', height : '550px'}}>
    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
    <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text style = {{fontSize : '10px', fontWeight : 'bold',  border: '1px solid black', borderRadius: '12px' , padding: '2px'}}>
            Overview:  {props.movie.overview.substring(0,180)}
        </Card.Text>
        <Card.Text>
            {props.movie.comment ? props.movie.comment : ''}
        </Card.Text>
        <Card.Text>
            {props.movie.release_date} 
        </Card.Text>
        
        <Button style={{ position: 'absolute',width: '50%' , bottom: '0', left : '100px'}} variant="primary" onClick={()=>{handleShowModal(props.movie) }}>More Info</Button>
    </Card.Body>
</Card>
{
chosenMovie &&  <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} updateMovies={props.updateMovies}/>
}</> )


}

export default Movie;