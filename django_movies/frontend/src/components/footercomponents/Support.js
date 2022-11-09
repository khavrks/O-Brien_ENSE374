import React from "react";

export const Support = () => {

    return (
        <div>
            <div class="title"
                style={{
                    textTransform: "uppercase",
                    fontWeight: "500",
                    padding: "20px 0",
                    marginBottom: "31px",
                    position: "relative",
                }}
            >
                COMPANY
            </div>
            <div class="contex"
                style={{
                    boxSizing: "border-box",
                }}
            >
                <ul>
                    <li>
                        <a href="#"
                            style={{
                                marginBottom: "25px",
                                fontSize: "14px",
                                fontWeight: 400,
                                display: "block",
                                color: "#1a2b48",
                                textDecoration: "none",
                                transition: "all .3s",
                            }}
                        >Партнерская программа</a>
                    </li>
                    <li>
                    <a href="#"
                            style={{
                                marginBottom: "25px",
                                fontSize: "14px",
                                fontWeight: 400,
                                display: "block",
                                color: "#1a2b48",
                                textDecoration: "none",
                                transition: "all .3s",
                            }}
                        >Политика конфиденциальности</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}