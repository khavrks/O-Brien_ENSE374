import React, {useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { Container, Row, Col, Image, Card, Button, Pagination  } from "react-bootstrap";

import { useHttp } from "../hooks/http.hook";

export const Main = () => {

    const {request, loading} = useHttp();
    const [the_movie_db_discovers, setThe_movie_db_discovers] = useState({});

    const get_the_movie_db_discovers = async () => {
        const response = await request('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&year=2022&api_key=a0ef9fdb0123180a7db6b25210e40290', 'GET');
        setThe_movie_db_discovers(response);
        console.log(response);
    }


    useEffect(() => {
        get_the_movie_db_discovers();
    }, [])


    return (
        <Container>
            <Row>
            {loading ? <div>loading...</div> : <div></div>}
            {
                the_movie_db_discovers.results ?
                the_movie_db_discovers.results.map((item, index) => {
                    return (
                        <Col>
                            <Card style={{ width: '15rem', marginTop: "20px" }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.overview}</Card.Text>
                                    <ReactStars
                                        count={10}
                                        size={24}
                                        edit={false}
                                        isHalf={true}
                                        value={item.vote_average}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                        />
                                    <Button variant="primary"
                                    href={`/movies/${item.id}`}
                                    >Visit Discussion</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
                ) : <div></div>
            }
            </Row>
            <Row>
                <Col>
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item
                        href="pages/1/"
                        active
                        >{1}</Pagination.Item>
                        <Pagination.Item
                        href="pages/2/"
                        >{2}</Pagination.Item>
                        <Pagination.Item
                        href="pages/3/"
                        >{3}</Pagination.Item>
                        <Pagination.Item
                        href="pages/4/"
                        >{4}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item
                        href="pages/10/"
                        >{10}</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>

        </Container>
    )
}