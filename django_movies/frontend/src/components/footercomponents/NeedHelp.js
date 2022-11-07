import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const NeedHelp = () => {

    return(
        <div>
            <div
                class="title"
                style={{
                    textTransform: "uppercase",
                    fontWeight: "500",
                    padding: "20px 0",
                    marginBottom: "31px",
                    position: "relative",
                }}
            >
                NEED HELP?
            </div>
            <div class="contex"
                style={{
                    boxSizing: "border-box",
                }}
            >
                <div 
                    class="contact"
                    style={{
                        borderLeftColor: "#5191fa",
                    }}
                >
                    <div class="c-title"
                        style={{
                            color: "#5e6d77",
                            marginBottom: "10px",
                        }}  
                    >
                        Call Us
                    </div>
                    <div class="sub"
                        style={{
                            fontWeight: "500",
                            fontSize: "18px",
                        }}
                    >
                        + 7 4212 61-63-58
                    </div>
                </div>
                <div 
                    class="contact"
                    style={{
                        borderLeftColor: "#5191fa",
                    }}
                >
                    <div class="c-title"
                        style={{
                            color: "#5e6d77",
                            marginBottom: "10px",
                        }}  
                    >
                        Email
                    </div>
                    <div class="sub"
                        style={{
                            fontWeight: "500",
                            fontSize: "18px",
                        }}
                    >
                        sauna-khv.ru
                    </div>
                </div>
                <div 
                    class="contact"
                    style={{
                        borderLeftColor: "#5191fa",
                    }}
                >
                    <div class="c-title"
                        style={{
                            color: "#5e6d77",
                            marginBottom: "10px",
                        }}  
                    >Follow Us
                    </div>
                    <div class="sub"
                        style={{
                            fontWeight: "500",
                            fontSize: "18px",
                        }}
                    >
                        <a href="https://www.instagram.com/sauna_khv/">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://vk.com/sauna_khv">
                            <i class="fab fa-vk"></i>
                        </a>
                        <a href="https://www.facebook.com/sauna.khv">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.ok.ru/sauna.khv">
                            <i class="fab fa-odnoklassniki"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}