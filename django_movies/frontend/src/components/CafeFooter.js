import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";

import { MailChimpCafe } from "../components/MailChimpCafe";
import { MainFooter } from "./MainFooter";

export const CafeFooter = () => {

    return (
        <div>
            <MailChimpCafe />
            <MainFooter />
        </div>
    )
}