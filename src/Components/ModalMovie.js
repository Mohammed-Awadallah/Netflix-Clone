import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { useRef } from 'react';

export default function ModalMovie(props) {
    const commentRef = useRef();
    function handleComment(event) {
        event.preventDefault();
        const comment = commentRef.current.value;
        const updateMovie = { ...props.chosenMovie, comment }
        props.updateMovies(updateMovie, props.chosenMovie.id)
    }
    return (
        <>
            <Modal show={props.show} onHide={props.ModalMoviehandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.chosenMovie.poster_path}`} />
                    <p>User Comments : {props.chosenMovie.comment}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
                    </Form>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleComment}>
                        Add a comment
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
