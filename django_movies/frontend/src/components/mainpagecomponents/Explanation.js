import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const Line = () => {

    return(
        <div
            style={{
                backgroundColor: "white",
                height: 1,
                opacity: 0.2,
                marginTop: 20,
            }}
        >
        </div>    
    )
}

export const Explanation = () => {

    return(
        <Container 
            fluid
            style={{backgroundColor: "black"}}
        >
            <Row>
                <Col>
                    <p
                        style={{color: "white", fontSize: 52, fontWeight: 700 }}
                    >
                        0.1 сек
                    </p>
                    <Line />
                    <p
                        style={{color: "white", fontSize: 20, fontWeight: 300 }}
                    >
                        Скорость мониторинга объявлений  
                    </p>
                </Col>
                <Col>
                    <p
                        style={{color: "white", fontSize: 52, fontWeight: 700 }}
                    >
                        1 год
                    </p>
                    <Line />
                    <p
                        style={{color: "white", fontSize: 20, fontWeight: 300 }}
                    >
                        Мы существуем на рынке
                    </p>
                </Col>
                <Col>
                    <p
                        style={{color: "white", fontSize: 52, fontWeight: 700 }}
                    >
                        1000 чел
                    </p>
                    <Line />
                    <p
                        style={{color: "white", fontSize: 20, fontWeight: 300 }}
                    >
                        Успешно пользуются нашим сервисом
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p
                        style={{color: "white", fontSize: 52, fontWeight: 700 }}
                    >
                        1000 объявлений
                    </p>
                    <Line />
                    <p
                        style={{color: "white", fontSize: 20, fontWeight: 300 }}
                    >
                        Мы отслеживаем за сутки
                    </p>
                </Col>
                <Col>
                    <p
                        style={{color: "white", fontSize: 52, fontWeight: 700 }}
                    >
                        1000 рублей
                    </p>
                    <p
                        style={{color: "white", fontSize: 20, fontWeight: 300 }}
                    >
                        Стоимость подписки
                    </p>
                </Col>
                <Col>
                    <p
                        style={{color: "white", fontSize: 52, fontWeight: 700 }}
                    >
                        1000 рублей
                    </p>
                    <Line />
                    <p
                        style={{color: "white", fontSize: 20, fontWeight: 300 }}
                    >
                        Стоимость подписки
                    </p>
                </Col>
            </Row>
        </Container>
    )
}