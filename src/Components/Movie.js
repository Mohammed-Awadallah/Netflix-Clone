
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
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
    <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>
            Overview:  {props.movie.overview}
        </Card.Text>
        <Card.Text>
            Release_Date {props.movie.release_date} 
        </Card.Text>
        <Button variant="primary" onClick={()=>{handleShowModal(props.movie) }}>Show Modal</Button>
    </Card.Body>
</Card>
{
chosenMovie &&  <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie}/>
}</> )


}

export default Movie;