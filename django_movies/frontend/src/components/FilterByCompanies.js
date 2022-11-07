import React, { useState } from "react";
import { Col, Container, Row, Dropdown, Form, Collapse, Button } from "react-bootstrap";

import { FilterComponent } from "./FilterBy/FilterComponent";

export const FilterByCompanies = () => {

    const [checkShow, setCheckShow] = useState(true);
    const [raitingShow, setRaitingShow] = useState(true);
    const [distanceShow, setDistanceShow] = useState(true);
    const [acomodiesShow, setAcomodiesShow] = useState(true);
    const [servicesShow, setServicesShow] = useState(true);

    const [filterPrice, setFilterPrice] = useState({
        option1: "до 1000 руб.", 
        option2: "от 1000 до 2000 руб.",
        option3: "от 2000 до 3000 руб.",
        option4: "от 3000 до 4000 руб.",
        option5: "от 4000 до 5000 руб.",
    });

    return (
        <div
            // style={{
            //     border: "1px solid #d7dce3",
            //     borderRadius: "3px",
            //     marginBottom: "30px",
            // }}
        >
            <div
                style={{
                    fontSize: "16px",
                    color: "#1a2b48",
                    marginBottom: "5px",
                    marginTop: "30px",
                    fontWeight: "500",
                }}
            >
                <i class="fa-solid fa-filter"></i>Фильтр
            </div>
            <Container>
                <Row>
                    <Col
                        style={{
                            border: "1px solid #d7dce3",
                            borderRadius: "3px",
                        }}
                    >
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FilterComponent filterparams={{filterPrice, checkShow, setCheckShow}} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Dropdown.Menu show={distanceShow}>
                            <Dropdown.Header>Distance</Dropdown.Header>
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
