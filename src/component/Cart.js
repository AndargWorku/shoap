import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    return ( <
        div >
        <
        div className = "row" >
        <
        div className = "col-md-4" >
        <
        img src = { product.image }
        alt = { product.title }
        height = "200"
        width = "180px" /
        >
        <
        /div> <
        div className = "col-md-4" >
        <
        h3 > { product.title } < /h3> <
        p className = "lead fw-bold" > { product.qty }
        x $ { product.price } = $ { product.qty * product.price } <
        /p> <
        button className = "btn btn-outline-dark me-4"
        onClick = {
            () => handleButton(product) } >
        <
        i className = "fa fa-minus" > < /i> <
        /button> <
        button className = "btn btn-outline-dark"
        onClick = {
            () => handleButton(product) } >
        <
        i className = "fa fa-plus" > < /i> <
        /button> <
        /div> <
        /div> <
        /div>
    );
};

export default Cart;