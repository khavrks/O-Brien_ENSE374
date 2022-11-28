import React, {useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { Container, Row, Col, Image, Alert, InputGroup, Form, Button, Card} from "react-bootstrap";

import { useHttp } from "../hooks/http.hook";


export const MoviePage = (is_auth) => {

    const { movie } = useParams();
    const {request, loading} = useHttp();
    const [the_movie_db_movie, setthe_movie_db_movie] = useState({});
    const [movie_messages, setmovie_messages] = useState([]);

    const [user, setUsername] = useState({
            "id": 0,
            "username": "",
            "email": "",
            "last_login": "",
            "is_superuser": "",
            "first_name": "",
            "last_name": ""
    });


    const [test, setTest] = useState("");

    const get_the_movie_db_movie = async () => {
        const response = await request(`https://api.themoviedb.org/3/movie/${movie}?api_key=a0ef9fdb0123180a7db6b25210e40290`, 'GET');
        setthe_movie_db_movie(response);
    }

    const send_message = async () => {
        const response = await request(`/api/send_message/${movie}`, 'POST', {message: test}, {"X-CSRFToken":CSRF_TOKEN, "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'});
    }

    const get_messages = async () => {
        const response = await request(`/api/get_movie_messages/${movie}`, 'GET');
        setmovie_messages(response);
    }

    const user_funcct = async () => {
        const data = await request('/api/get_user/', 'GET');
        setUsername(data);
    }



    useEffect(() => {
        get_the_movie_db_movie();
        user_funcct();
    }, [])

    // let ws_url = `ws://${window.location.host}:8000/ws/${movie}/`;

    // const chatSocket = new WebSocket(ws_url);

    useEffect(() => {
       setTimeout(() => {
              get_messages();
         }, 1000);
    }, [movie_messages])
    

    return(
        <Container>
            {/* {loading ? <div>loading...</div> : <div></div>} */}
            <Row>
                <Col>
                    <Image src={`https://image.tmdb.org/t/p/w500${the_movie_db_movie.poster_path}`} 
                    onClick={() => window.location.replace(the_movie_db_movie.homepage)}
                    />
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
                    <p>
                        {the_movie_db_movie.genres?.map((item, index) => {
                            return (
                                <Alert variant="primary">
                                    {item.name}
                                </Alert>
                            )
                        })}
                    </p>
                </Col>
            </Row>
            <Row
                style={{
                    marginTop: "20px",
                    marginBottom: "20px"
                }}
            >
                {' '}
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body
                            style={{"position": "relative", "height": "400px", "overflow-y": "scroll"}}
                        >
                        {movie_messages.map((item) => {
                            if (item.user.username !== user.username) {
                                return (
                                    <div>
                                        <div class="d-flex justify-content-between">
                                          <p class="small mb-1">{item.user.username}</p>
                                          <p class="small mb-1 text-muted">{item.timestamp}</p>
                                        </div>
                                        <div class="d-flex flex-row justify-content-start">
                                          <div>
                                            <p class="small p-2 ms-3 mb-3 rounded-3" style={{"background-color": "#f5f6f7"}}>
                                            {item.message}
                                            </p>
                                          </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div>
                                        <div class="d-flex justify-content-between">
                                          <p class="small mb-1 text-muted">{item.timestamp}</p>
                                          <p class="small mb-1">{item.user.username}</p>
                                        </div>
                                        <div class="d-flex flex-row justify-content-end mb-4 pt-1">
                                          <div>
                                            <p class="small p-2 me-3 mb-3 text-white rounded-3 bg-primary">
                                            {item.message}
                                            </p>
                                          </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                {is_auth.is_auth ? 
                <InputGroup size="lg" className="mb-3" 
                    style={{width: "100%", marginTop: "20px"}}
                >
                    <Form.Control aria-label="Text input with dropdown button" 
                    onChange={(e) => setTest(e.target.value)}
                    value={test}
                    />
                        <Button
                          variant="outline-secondary"
                          title="Action"
                          id="segmented-button-dropdown-2"
                          alignRight
                          onClick={() => {
                                send_message();
                                setTest("");
                          }}
                        >Send</Button>
                </InputGroup>
                :
                <div>
                    <p>Log in to send messages</p>
                </div>
                }
                </Col>
            </Row>
        </Container>
    )
}