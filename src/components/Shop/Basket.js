import React, { Fragment, useEffect, useState } from 'react';
import { useBreakpoint } from "react-use-size";
import Prices from './Prices';
import { faTrashCan, faEnvelopeCircleCheck, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Basket = (props) => {

    const isSmall = useBreakpoint(576);

    const [init, setInit] = useState(0);
    const [sumup, setSumup] = useState(0);

    useEffect(() => {
        var initsum = 0.00
        var single = 0
        var singleTotal = document.querySelectorAll('.single-total');
        singleTotal.forEach(function (element, index) {
            single = parseFloat(element.innerText).toFixed(2);
            initsum += Math.round(single * 100) / 100;
            var singlesum = parseFloat(element.innerText).toFixed(2)
            element.innerText = singlesum
        })

        // JQuery

        /*$('.single-total').each(function (index, element) {
            single = parseFloat($(this).text()).toFixed(2);
            initsum += Math.round(single * 100) / 100;
            var singlesum = parseFloat($(this).text()).toFixed(2)
            $(this).text(singlesum)
            console.log('element', parseFloat($(this).text()).toFixed(2))
        });*/
        //console.log('init', initsum)
        setInit(Math.round(initsum * 100) / 100)
        document.getElementById('total').innerText = init
    });

    const setEditingShopping = (status) => {
        props.setEditingShopping(status)
    }

    const deleteFromBasket = (row) => {
        //console.log('basket.id-table', id)
        var total = 0
        var deleteRow = "basket-id-" + row.id
        var basket = document.getElementById(deleteRow)
        document.getElementById(deleteRow).remove()
        total = parseFloat(document.getElementById('total').innerText)
        var amount = basket.querySelector('.single-total').innerText
        //console.log('amount', amount)
        //console.log('total', total)
        setSumup(total - amount)
        document.getElementById('total').innerText = sumup
    }

    const setOrder = (items) => {
        //console.log('orderitems', items)
        props.setOrder(items)
    }

    const setCounter = (counter, id, price) => {
        //console.log('counter-init', init)
        var sumUp = 0
        sumUp += init + parseFloat(price)
        setSumup(Math.round(sumUp * 100) / 100)
        //console.log('sumUp', sumUp)
        //document.getElementById('total').innerText = sumUp
    }

    if (!isSmall) {
        return (
            <div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Position</th>
                                <th scope="col">Art.Nr.</th>
                                <th scope="col">Produktname</th>
                                <th scope="col">Menge</th>
                                <th scope="col">Stückpreis (in Euro)</th>
                                <th scope="col">Summe (in Euro)</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.baskets[1].map((basket, index) => (
                                <tr id={`basket-id-${basket.id}`} key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{basket.id}</td>
                                    <td>{basket.name}</td>
                                    <Prices basket={basket} setCounter={setCounter} />
                                    <td className={`init-${basket.price}`}>
                                        <button className="product-button btn btn-sm btn-danger" onClick={() => deleteFromBasket(basket)}><FontAwesomeIcon icon={faTrashCan} /> Löschen</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ width: '99%' }}>
                        <h5 style={{ float: 'right' }}>Gesamtsumme (in Euro)<span id="total" className='mx-5'></span></h5>
                    </div>
                    <a href="/" className="product-button btn btn-xl btn-outline-danger" onClick={() => setEditingShopping(false)}><FontAwesomeIcon icon={faGift} /> Zurück zum Produktkatalog</a>
                    <button className="product-button btn btn-xl btn-danger disabled mx-2" onClick={() => setOrder(props.baskets[1])}><FontAwesomeIcon icon={faEnvelopeCircleCheck} /> Zur Kasse</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    {props.baskets[1].map((basket, index) => (
                        <div id={`basket-id-${basket.id}`} className="card mb-3 mt-5" key={index}>
                            <ul className="list-group list-group-flush">
                                <li className="shopping-product-name list-group-item bg-secondary">{basket.name}</li>
                                <li className="list-group-item"><strong>Positon {index + 1}</strong> / <strong>Art.Nr. {basket.id}</strong></li>
                                <Quantity basket={basket} setCounter={setCounter} />
                                <li className="list-group-item "><button className="product-button btn btn-sm btn-danger" onClick={() => deleteFromBasket(basket)}><FontAwesomeIcon icon={faTrashCan} /> Löschen</button></li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div style={{ width: '100%' }}>
                    <p style={{ float: 'right' }}>Gesamtbetrag (in Euro)<span id="total" className='mx-5 fw-bold'></span></p>
                </div>
                <div class="col-sm-12">
                    <a href="/" className="btn btn-xl btn-outline-danger mt-5 mb-2" onClick={() => setEditingShopping(false)}><FontAwesomeIcon icon={faGift} /> Zurück zum Produktkatalog</a>
                </div>
                <div class="col-sm-12">
                    <button className="product-button btn btn-xl btn-danger disabled mt-3 mb-5" onClick={() => setOrder(props.baskets[1])}><FontAwesomeIcon icon={faEnvelopeCircleCheck} /> Zur Kasse</button>
                </div>
            </div>
        )
    }
}

export default Basket