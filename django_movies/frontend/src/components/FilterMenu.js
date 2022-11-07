import React, {useState} from "react";
import { Button, Col, Container, Row, Form  } from "react-bootstrap";

export const FilterMenu = () => {

    const [formGroupstyle, setFormGroupstyle] = useState({
        "border-bottom": "solid 1px #ccc",
        background: "white",
    });

    const [colstyle, setColstyle] = useState({
        padding: 0,
    });
 
    return (
        <Form
        style={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            borderRadius: "5px",
            marginTop: "50px",
        }}
        >
            <Row
            style={{
                flex: "0 0 90%",
                maxWidth: "90%",
                flexGrow: 1,
                padding: "0 15px",
                flexWrap: "wrap",
                marginRight: "-15px",
                marginLeft: "-15px",
            }}
            >
                <Col 
                md={4}
                class="border-right"
                style={colstyle}
                >
                    <Form.Group
                    style={formGroupstyle}
                    >
                        <i class="fa-thin fa-map"></i>
                        <Form.Control as="select">
                            <option>Все города</option>
                            <option>Москва</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col 
                md={4}
                class="border-right"
                style={colstyle}
                >
                    <Form.Group
                    style={formGroupstyle}
                    >
                        <i class="fa-thin fa-mug-hot"></i>
                        <Form.Control as="select">
                            <option>Все города</option>
                            <option>Москва</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col 
                md={4}
                class="border-right"
                style={colstyle}
                >
                    <Form.Group
                    style={formGroupstyle}
                    >
                        <i class="fa-regular fa-hand-holding-dollar"></i>
                        <Form.Control as="select">
                            <option>Все города</option>
                            <option>Москва</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row> 
            <Button
                style={{
                    marginLeft: 0,
                    marginRight: "auto",
                    position: "relative",
                    maxWidth: "10%",
                    "box-sizing": "border-box",
                    flex: "0 0 10%",
                }}
            >
                Поиск
            </Button>
        </Form>   
    )
}