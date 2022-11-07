import React, {useState, useEffect} from "react";
import {Navbar, Nav, Button, Container, ButtonGroup, Image } from 'react-bootstrap';

import { useHttp } from "../hooks/http.hook";

export const MenuBar = ({navbar}) => {

    const {loading, request} = useHttp();
    const [is_auth, setIs_auth] = useState(false);
    const [user, setUser] = useState({
        "telegram": {
            "id": 0,
            "telegram_id": "",
            "telegram_username": "",
            "telegram_first_name": "",
            "telegram_last_name": "",
            "telegram_is_bot": '',
            "telegram_language_code": "",
            "telegram_is_active": "",
            "user": 0,
            "telegram_channels": []
        },
        "user": {
            "id": 0,
            "username": "",
            "email": "",
            "last_login": "",
            "is_superuser": "",
            "first_name": "",
            "last_name": ""
        }
    });

    const is_auth_func = async () => {
        const data = await request('/api/is_authenticated/', 'GET');
        setIs_auth(data);
    }

    const user_func = async () => {
        const data = await request('api/get_user/', 'GET');
        setUser(data);
        console.log(data);
    }

    useEffect(() => {   
        is_auth_func();
        user_func();
    }, [])



    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Image
                    alt="logo"
                    src="https://seeklogo.com/images/A/avito-logo-EAE1D3092C-seeklogo.com.png"
                    height={30}
                    className="d-inline-block align-top"
                    />{' '}
                    Parcer
                </Navbar.Brand>
                <Nav className="me-auto"
                style={{justifyContent: "space-between", width: "100%", alignContent: "center"}}
                >
                    <Nav.Link href="/">Главная</Nav.Link>
                    <Nav.Link href="#features">Парсер</Nav.Link>
                    <Nav.Link href="#pricing">Тарифы</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                    <Nav.Link href="#pricing">Контакты</Nav.Link>
                    {/* <Nav.Link href="#pricing"><i class="fa-solid fa-heart"></i></Nav.Link> */}
                </Nav>
                <Container 
                    style={{ alignContent: "right", justifyContent: "right", width: "100%", display: "flex", flexDirection: "row-reverse"}}
                >
                    {is_auth ?
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary"
                        href="/accounts/logout/"
                        >Выйти</Button>
                        <Button variant="info"
                        href="/accounts/profile/"
                        >{user.user.username}</Button>
                    </ButtonGroup>
                    :
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary"
                        href="/accounts/login/"
                        >Войти</Button>
                        <Button variant="info"
                        href="/accounts/signup/"
                        >Регистрация</Button>
                    </ButtonGroup>
                    }
                </Container>
            </Container>
        </Navbar>
    )
}