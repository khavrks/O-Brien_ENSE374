import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import { FormBestClub } from "./bestplacecomponents/FormBestClub";
import { BestPlaceByMonth } from "./bestplacecomponents/BestPlaceByMonth";

export const BestPlacesInTheCity = () => {

    const [bestPlaceMay, setBestPlaceMay] = useState({
        month: "Май",
        first: "сауна Гавайи",
        second: "оздоровительный комплекс Лагуна",
        third: " баня Надежда",
    });

    const [bestPlaceJune, setBestPlaceJune] = useState({
        month: "Июнь",
        first: "сауна Гавайи",
        second: "оздоровительный комплекс Лагуна",
        third: " баня Надежда",
    });

    const [bestPlaceJuly, setBestPlaceJuly] = useState({
        month: "Июль",
        first: "сауна Гавайи",
        second: "оздоровительный комплекс Лагуна",
        third: " баня Надежда",
    });

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Best Places in the City</h1>
                    </Col>
                </Row>
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
                        <FormBestClub />
                    </Col>
                    <Col>
                        <Col>
                            <BestPlaceByMonth bestplace={bestPlaceMay} />
                        </Col>
                        <Col>
                            <BestPlaceByMonth bestplace={bestPlaceJune} />
                        </Col>
                        <Col>
                            <BestPlaceByMonth bestplace={bestPlaceJuly} />
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}