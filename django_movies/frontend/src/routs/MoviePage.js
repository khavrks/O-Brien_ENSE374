import React, {useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { Container, Row, Col, Image, Card, Button  } from "react-bootstrap";

import { useHttp } from "../hooks/http.hook";


export const MoviePage = () => {

    const { movie } = useParams();
    const {request, loading} = useHttp();
    const [the_movie_db_movie, setthe_movie_db_movie] = useState({});

    const get_the_movie_db_movie = async () => {
        const response = await request(`https://api.themoviedb.org/3/movie/${movie}?api_key=a0ef9fdb0123180a7db6b25210e40290`, 'GET');
        setthe_movie_db_movie(response);
        console.log(response);
    }

    useEffect(() => {
        get_the_movie_db_movie();
    }, [])

    let ws_url = `ws://${window.location.host}/ws/socket-server/`;

    const chatSocket = new WebSocket(ws_url);

    useEffect(() => {
        chatSocket.onopen = function(e) {
            console.log("Connection established!");
        };
        
        chatSocket.onmessage = function(e) {
            console.log(e.data);
        };

        chatSocket.onclose = function(e) {
            console.log("Connection closed.");
        };
    }, [])
    

    return(
        <Container>
            {loading ? <div>loading...</div> : <div></div>}
            <Row>
                <Col>
                    <Image src={`https://image.tmdb.org/t/p/w500${the_movie_db_movie.poster_path}`} />
                </Col>
                <Col>
                    <h1>{the_movie_db_movie.title}</h1>
                    <p>{the_movie_db_movie.overview}</p>
                    <ReactStars
                        count={10}
                        size={24}
                        edit={false}
                        isHalf={true}
                        value={the_movie_db_movie.vote_average}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </Col>
            </Row>
        </Container>
    )
}