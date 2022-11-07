import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useHttp } from '../hooks/http.hook';

import { VideoPlayer } from '../components/video/VideoPlayer'
import { Subsribtions } from "../components/front_ui/Subsribtions";
import { GamesSubscribtions } from "../components/front_ui/GamesSubscribtions";
import { StreamerJoinRow } from "../components/front_ui/StreamerJoinRow";
import { StreamerChat } from "../components/front_ui/StreamerChat";
import { StreamerInfo } from "../components/front_ui/StreamerInfo";


export const Test_User_Page = () => {


    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Subsribtions />
                    </Col>
                    <Col>
                        <GamesSubscribtions />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StreamerJoinRow />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col 
                        // xs={8}
                        xl={8}
                        // style={{
                        //     // justifyContent: "center",
                        //     alignItems: "center",
                        //     display: "flex",
                        //     height: "100%",
                        //     width: "100%",
                        //     marginTop: "20px",
                        //     marginBottom: "20px",
                        // }}
                    >
                        <VideoPlayer />
                    </Col>
                    <Col
                        // xs={4}
                        xl={4}
                    >
                        <StreamerChat />
                    </Col>
                </Row>
                <Row>
                    <StreamerInfo />
                </Row>
            </Container>
        </div>
    )
}