import React from "react";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";


export const BestPlaceByMonth = ({bestplace}) => {

    // console.log(bestplace.first);

    return(
        <Container>
            <Row>
                <Col
                    style={{
                        borderWidth: "0.2rem 0.2rem 0",
                        borderRadius: "8px 8px 0 0",
                        position: "relative",
                        padding: "1rem",
                        border: "0.2rem solid #ececec",
                        color: "#212529",
                    }}
                >
                    <h3>Best Place in {bestplace.month}</h3>
                    <Col>
                        <h5>1. {bestplace.first}</h5>
                    </Col>
                    <Col>
                        <h5>2. {bestplace.second}</h5>
                    </Col>
                    <Col>
                        <h5>3. {bestplace.third}</h5>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}