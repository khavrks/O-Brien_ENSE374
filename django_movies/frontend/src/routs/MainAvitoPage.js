import React, {useRef, useState} from "react";

import { useHttp } from "../hooks/http.hook";

import { Introduction } from "../components/mainpagecomponents/Intoduction";
import { Explanation } from "../components/mainpagecomponents/Explanation";
import { ForWho } from "../components/mainpagecomponents/ForWho";

export const MainAvitoPage = (data) =>{

    const ref = useRef();


    return(
        <div>
            <Introduction />
            <Explanation />
            <ForWho />
        </div>
    )
}