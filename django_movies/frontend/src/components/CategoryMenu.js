import React, {useState} from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";


export const CategoryMenu = () => {

    return(
        <div>
            <Row
            style={{
                justifyContent: "center",
                display: "flex",
                flexWrap: "wrap",
            }}
            >
                <h3><i class="fa-sharp fa-solid fa-border-all"></i>   Все категории</h3>
            </Row>
            <ListGroup>
                <ListGroup.Item
                    action
                    href="#link1"
                >Кафе
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="#link2"
                >Рестораны
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="#link3"
                >Суши-Бары
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="#link4"
                >Пиццерии
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="#link5"
                >Пабы
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="#link6"
                >Кофейни
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="#link7"
                >Столовые
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="#link8"
                >Траттории
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}