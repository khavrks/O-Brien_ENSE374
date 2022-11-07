import React, {useState} from "react";
import { Form, Button, Collapse } from "react-bootstrap";


export const FilterComponent = ({filterparams}) => {

    return (
        <div>
            <div>
                Средний чек
                <Button 
                onClick={() => filterparams.setCheckShow(!filterparams.checkShow)} 
                >click</Button>
            </div>
            <Collapse in={filterparams.checkShow}>
                <Form
                    style={{
                        visibility: filterparams.checkShow ? "visible" : "hidden",
                    }}
                >
                    <Form.Check
                        type="checkbox"
                        label="до 1000 руб."
                    />
                    <Form.Check
                        type="checkbox"
                        label="от 1000 до 2000 руб."
                    />
                    <Form.Check
                        type="checkbox"
                        label="от 2000 до 3000 руб."
                    />
                </Form>
            </Collapse>
        </div>
    )
}
