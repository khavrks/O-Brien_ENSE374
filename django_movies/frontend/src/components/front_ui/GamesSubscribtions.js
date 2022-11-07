import React from "react";
import { Col, Container, Row } from "react-bootstrap";


export const GamesSubscribtions = () => {

    return(
        <div>
            <Container
            fluid
            style={{
                marginLeft: "0",
                marginRight: "0",
                width: "100%",
            }}
            >
                <Row>
                    <Col 
                    sm={2}
                    class="all-category">
                    </Col>
                    <Col 
                    sm={8}
                    class="all-streamers">
                        <h1>GamesSubscribtions</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
