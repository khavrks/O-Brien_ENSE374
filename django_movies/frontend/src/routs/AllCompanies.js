import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";

import { FilterMenu } from "../components/FilterMenu";
import { SiteBreadCrumbs } from "../components/SiteBreadCrumbs";
import { CategoryMenu } from "../components/CategoryMenu";
import { AllCompaniesGrid } from "../components/AllCompaniesGrid";
import { CafeFooter } from "../components/CafeFooter";
import { FilterByCompanies } from "../components/FilterByCompanies";
import { BestPlacesInTheCity } from "../components/BestPlacesInTheCity";

export const AllCompanies = () => {

    return (
        <div
        style={{
            backgroundSize: '100%',
            height: "200px",
            borderBottomRightRadius: "50%",
            borderBottomLeftRadius: "50%",
        }}
        >
            <Container
            style={{
                // marginTop: "50px",
            }}
            >
                <Row
                style={{
                }}
                >
                    <h1
                    style={{
                        color: "white",
                        marginTop: "30px",
                        textAlign: "center",
                    }}
                    >Каталог компаний</h1>
                    <FilterMenu />
                </Row>
                <SiteBreadCrumbs />
            </Container>
            <Container
            fluid
            style={{
                marginLeft: "0",
                marginRight: "0",
                width: "100%",
            }}
            >
                <Row>
                    <Col 
                    sm={2}
                    class="all-category">
                        <CategoryMenu />
                    </Col>
                    <Col 
                    sm={8}
                    class="all-companies">
                        <AllCompaniesGrid />
                    </Col>
                    <Col 
                    sm={2}
                    class="filters">
                        <FilterByCompanies />
                    </Col>
                </Row>
            </Container>
            <BestPlacesInTheCity />
            <CafeFooter />
        </div>
    )
}

