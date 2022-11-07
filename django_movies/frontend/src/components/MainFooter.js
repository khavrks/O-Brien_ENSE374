import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { NeedHelp } from "./footercomponents/NeedHelp";
import { Company } from "./footercomponents/Company";
import { Support } from "./footercomponents/Support";
import { Settings } from "./footercomponents/Settings";

export const MainFooter = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col
                        lg={3}
                        md={6}
                    >
                        <NeedHelp />
                    </Col>
                    <Col
                        lg={3}
                        md={6}
                    >
                        <Company />
                    </Col>
                    <Col
                        lg={3}
                        md={6}
                    >
                        <Support />
                    </Col>
                    <Col
                        lg={3}
                        md={6}
                    >
                        <Settings />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}