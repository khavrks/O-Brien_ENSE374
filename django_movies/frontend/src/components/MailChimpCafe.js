import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";


export const MailChimpCafe = () => (
    <div
    style={{
        paddingTop: "65px",
        paddingBottom: "40px",
        background: "#f5f5f5",
    }}
    >
        <Container>
            <Row>
                <Col
                xs={12}
                lg={10}
                lgOffset={1}
                style={{
                    flex: "0 0 83.333333%",
                    maxWidth: "83.333333%",
                }}
                >
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            marginRigth: "-15px",
                            marginLeft: "-15px",
                        }}
                    >
                        <Col
                        xs={12}
                        md={7}
                        lg={6}
                        style={{
                            flex: "0 0 50%",
                            maxWidth: "50%",
                        }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        paddingRight: "30px",
                                    }}
                                >
                                    <i class="fa-solid fa-burger"></i>
                                </div>
                            </div>
                            <div
                                style={{
                                    flex: "1",
                                }}
                            >
                                <h4
                                    style={{
                                        fontSize: "24px!important",
                                    }}
                                >Подписаться на новости</h4>
                                <p
                                    style={{
                                        fontSize: "16px!important",
                                        color: "#5e6d77!important",
                                    }}
                                >Hotel highly rated for thoughtful des ighly rated</p>
                            </div>
                        </Col>
                        <Col
                        xs={12}
                        md={5}
                        lg={6}
                        >
                            <Form>
                                <Row
                                    style={{
                                        display: "flex",
                                        color: "#5e6d77",
                                        border: "1px solid #e6e6e6",
                                        borderRadius: "0",
                                        flex: "0 0 60%",
                                        maxWidth: "60%",
                                        flexWrap: "wrap",
                                        flexGrow: 1,
                                        padding: "0 15px",
                                        marginRight: "-15px",
                                        marginLeft: "-15px",
                                    }}
                                >
                                    <Col>
                                        <Form.Group className="mb-4" controlId="formBasicEmail">
                                            <Form.Control
                                            style={{
                                                height: "50px",
                                                fontSize: "16px",
                                                color: "#5e6d77",
                                                border: "1px solid #e6e6e6",
                                                borderRadius: "0",
                                                flex: "0 0 60%",
                                                maxWidth: "60%",
                                                flexWrap: "wrap",
                                                flexGrow: 1,
                                                padding: "0 15px",
                                                marginRight: "-15px",
                                                marginLeft: "-15px",
                                            }}
                                            type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button
                                variant="primary"
                                type="submit"

                                style={{
                                    justifyContent: "center",
                                    border: "none",
                                    borderRadius: "0 5px 5px 0",
                                    position: "relative",
                                    maxWidth: "40%",
                                    flex: "0 0 40%",
                                    top: 0,
                                    right: 0,
                                    height: "55px",
                                    lineHeight: "55px",
                                    color: "#fff",
                                    background: "#1a2b48",
                                    marginLeft: 0,
                                    marginRight: "auto",
                                    fontWeight: "600",
                                    "box-sizing": "border-box",
                                    "text-transform": "uppercase",
                                }}
                                >
                                    Подписаться
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
)