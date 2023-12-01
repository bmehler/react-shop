import React, { useState, Fragment } from 'react';
import { useBreakpoint } from "react-use-size";


const Prices = (props) => {

    const isSmall = useBreakpoint(576);

    const [counter, setCounter] = useState(parseInt(props.basket.quantity));
    const [price, setPrice] = useState(Math.round((parseFloat(props.basket.price) + Number.EPSILON) * 100) / 100);
 
    //Math.round((parseFloat(price) * 100/100)).toFixed(2) * counter

    const increase = (id, price) => {
        setCounter(count => count + 1);
        props.setCounter(counter, id, price)
    };

    const decrease = (id, price) => { 
        setCounter(count => Math.max(count - 1,0));
        props.setCounter(counter, id, price)
    };

    if (!isSmall) {
        return (
            <Fragment>
                <td>
                    <button className="btn btn-sm btn-danger me-3" onClick={() => decrease(props.basket.id, props.basket.price)}>-</button>
                    {counter}
                    <button className="btn btn-sm btn-danger mx-3" onClick={() => increase(props.basket.id, props.basket.price)}>+</button>
                </td>
                <td align="center">{props.basket.price}</td>
                <td align="center" id={`id-${props.basket.id}`} className="single-total">{price * counter}</td>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <li className="list-group-item">
                    <span className="me-2 fw-bold">Menge:</span>
                    <button className="btn btn-sm btn-danger me-3" onClick={() => decrease(props.basket.id, props.basket.price)}>-</button>
                    {counter}
                    <button className="btn btn-sm btn-danger mx-3" onClick={() => increase(props.basket.id, props.basket.price)}>+</button>
                </li>
                <li className="list-group-item"><span className="me-2 fw-bold">Stückpreis (in Euro):</span>{props.basket.price}</li>
                <span className="list-group-item fw-bold">Summe (in Euro)<li id={`id-${props.basket.id}`} className="list-group-item single-total">{price * counter}</li></span>
            </Fragment>
        )
    }
}

export default Prices