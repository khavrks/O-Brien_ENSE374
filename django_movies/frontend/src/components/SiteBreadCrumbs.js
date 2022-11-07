import React, {useState} from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const SiteBreadCrumbs = ({breadcrumbs}) => {
    
        return (
            <Breadcrumb>
                <Breadcrumb.Item href="/"><i class="fa-sharp fa-solid fa-house"></i></Breadcrumb.Item>
                <Breadcrumb.Item href="/allcompanies">Все компании</Breadcrumb.Item>
            </Breadcrumb>
        )
}