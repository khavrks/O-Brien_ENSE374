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
        const data = await request('/api/get_user/', 'GET');
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
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    height={30}
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="me-auto"
                style={{justifyContent: "space-between", width: "100%", alignContent: "center"}}
                >
                    <Nav.Link href="/">Main</Nav.Link>
                    <Nav.Link href="#features">Featured</Nav.Link>
                    <Nav.Link href="#pricing">Popular Chats</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                    {/* <Nav.Link href="#pricing">Контакты</Nav.Link> */}
                    {/* <Nav.Link href="#pricing"><i class="fa-solid fa-heart"></i></Nav.Link> */}
                </Nav>
                <Container 
                    style={{ alignContent: "right", justifyContent: "right", width: "100%", display: "flex", flexDirection: "row-reverse"}}
                >
                    {is_auth ?
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary"
                        href="/accounts/logout/"
                        >LogOut</Button>
                        <Button variant="info"
                        href="/accounts/profile/"
                        >{user.username}</Button>
                    </ButtonGroup>
                    :
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary"
                        href="/accounts/login/"
                        >Sign In</Button>
                        <Button variant="info"
                        href="/accounts/signup/"
                        >Sign Up</Button>
                    </ButtonGroup>
                    }
                </Container>
            </Container>
        </Navbar>
    )
}