import React, {useState} from "react";
import { Col, Container, Row, ListGroup, Nav,Button } from "react-bootstrap";

import { RestorantListing } from "./RestorantListing";
import { SitePignation } from "./SitePignation";

export const AllCompaniesGrid = () => {

    const [colStyle, setColStyle] = useState({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: "10px",
    });

    return(
        <div>
            <Row>
                <Col>
                    <h3>Все Компании</h3>
                </Col>
                <Col 
                    class="border-right"
                >
                    <Row>
                        <Col>
                            <Nav.Link
                                href="#"
                            >Показать на карте</Nav.Link>
                        </Col>
                        <Col>
                            <Button>
                                <i class="fa-solid fa-bars"></i>
                                По популярности
                            </Button>
                        </Col>
                        <Col>
                            <i class="fa-solid fa-border-all"></i>
                            <i class="fa-solid fa-list"></i>
                            <i class="fa-solid fa-bars"></i>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                    <Col
                    style={colStyle}
                    lg={3}
                    >
                        <RestorantListing />
                    </Col>
                </Row>
            </Container>
            <SitePignation />
        </div>
    )
}