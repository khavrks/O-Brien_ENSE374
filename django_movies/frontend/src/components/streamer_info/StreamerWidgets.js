import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";

import { StreamerWidget } from "./StreamerWidget";

export const StreamerWidgets = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <StreamerWidget />
                </Col>
                <Col>
                    <StreamerWidget />
                </Col>
                <Col>
                    <StreamerWidget />
                </Col>
                <Col>
                    <StreamerWidget />
                </Col>
            </Row>
        </Container>
    )
}