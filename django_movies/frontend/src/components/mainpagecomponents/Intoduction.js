import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";


export const Introduction = () => {

    return(
        <Container 
        >
            <Row
            style={{height: "80vh", width: "100%"}}
            >
                <Col
                    style={{alignItems: "flex-end", justifyContent: "flex-end", display: "flex", flexDirection: "column"}}
                >
                    <Image
                        sm={0}
                        lg={4} 
                        className="d-none d-lg-block"
                        src="https://avtoringer.ru/static/images/handphone.webp"
                        style={{width: 351}}
                    />
                </Col>
                <Col
                    sm={12}
                    lg={8}
                    style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}
                >
                <Container>
                    <Row>
                        <h1
                            style={{fontSize: 50, fontWeight: 700, lineHeight: "63px", margin: "0 0 5px" }}
                        >
                            Мониторинг объявлений на Avito
                        </h1>
                    </Row>
                    <Row>
                        <p
                            style={{fontSize: 20, fontWeight: 400, lineHeight: "24px", margin: "0 auto", fontStyle: "italic" }}
                        >
                            Хватит тратить время на ручной поиск! Будь первым, ищи объявления на популярных площадках
                        </p>
                    </Row>
                    <p
                        style={{fontSize: 35, fontWeight: 700, lineHeight: "24px", marginBottom: "35px", marginLeft: "7px", fontStyle: "italic" }}
                    >
                        от 0.1 до 30 секунд ⏱
                    </p>
                    <Button 
                    variant="outline-secondary"
                    href="/parser"
                    >
                        Попробовать
                    </Button>
                </Container>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}