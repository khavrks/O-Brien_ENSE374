import React from "react";
import { Col, Container, Row, Pagination } from "react-bootstrap";

export const SitePignation = () => {

    let items = [];
    for (let i = 1; i <= 3; i++) {
    items.push(
        <Pagination.Item
        key={i}
        active={i === 1}
        >{i}
        </Pagination.Item>
    )};

    return(
        <div style={{marginTop: "30px", justifyContent: "center" }}>
            <Pagination 
                style={{justifyContent: "center"}}
            >
                {items}
            </Pagination>
        </div>    
    )
}