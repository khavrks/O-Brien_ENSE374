import React, {useState} from "react";
import {Navbar, Nav, Button, Container, Dropdown, ButtonGroup} from 'react-bootstrap';

import "./componentscss.css";

export const NavBar = ({navbar}) => {

    const [stylepadding, setStylepadding] = useState({
        paddingLeft: '18px',
        paddingRight: '18px',
    });

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#facebook"><i class="fa-brands fa-facebook-f"></i></Nav.Link>
                        <Nav.Link href="#instragram"><i class="fa-brands fa-instagram"></i></Nav.Link>
                        <Nav.Link href="#odnoklassniki"><i class="fa-brands fa-odnoklassniki"></i></Nav.Link>
                        <Nav.Link href="#vk"><i class="fa-brands fa-vk"></i></Nav.Link>
                        <span class="line"></span>
                        <Nav.Link href="mailto:info@sauna-khv.ru" >info@sauna-khv.ru</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {true ? 
                <Dropdown as={ButtonGroup} style={stylepadding}>
                    <Button variant="secondary">Личный кабинет</Button>
                    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="/profile">Профиль</Dropdown.Item>
                        <Dropdown.Item href="/logout">Выйти</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
                : 
                <div>
                    <Button variant="secondary">Войти</Button>
                    <Button variant="secondary">Регистрация</Button>
                </div>
                }
            </Container>
        </Navbar>    
    )
}