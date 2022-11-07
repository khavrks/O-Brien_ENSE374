import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";

export const RestorantListing = () => {

    const [cardstyle, setCardstyle] = useState({
        width: "18rem",
        height: "100%",
        marginBottom: "20px",
        marginTop: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    });

    return(
        <Card style={cardstyle}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Title>Bla Bla Bla</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    isHalf={true}
                    value={4.5}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    />
            </Card.Body>
            <ListGroup></ListGroup>
            <Card.Body>
                <Card.Link>Time</Card.Link>
                <Card.Link>Time</Card.Link>
            </Card.Body>
        </Card>
    )
}