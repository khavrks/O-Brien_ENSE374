import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const StreamerChat = () => {

    return(
        <div>
            <Container>
                <Row>
                    <Col>Img</Col>
                    <Col>User Name:</Col>
                    <Col>
                        modCheck WAKE UP, THERE'S A BIBLE NUTTER SPAMMINGmodCheck WAKE UP, THERE'S A BIBLE NUTTER SPAMMING RitzMitz
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>Send Text</Col>
                </Row>
                <Row>
                    <input type="text" />
                    <Button>Send</Button>
                </Row>
            </Container>
        </div>
    )
}