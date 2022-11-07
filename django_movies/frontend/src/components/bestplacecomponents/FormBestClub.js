import React from "react";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";

export const FormBestClub = () => {

    return(
        <Form>
            <Form.Check
                type="radio"
                label="Элит-клуб MONTREAL"
            />
            <Form.Check
                type="radio"
                label="Оздоровительный комплекс Лагуна SPА"
            />
            <Form.Check
                type="radio"
                label="Сауна Римские Термы"
            />
            <Form.Check
                type="radio"
                label="Комплекс Релакс в Щербинке"
            />
            <Form.Check
                type="radio"
                label="Сауна Усадьба Банная"
            />
            <h5>
                Проголосовало <Badge pill variant="primary">5</Badge>
            </h5>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}