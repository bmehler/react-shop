import React, { useState, useEffect } from 'react';
import { faShoppingBasket, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shopping = (props) => {

    const [basket, setBasket] = useState([])
    //const [names, setName] = useState()
    const deleteShoppingItem = (id, name, shopping) => {
        //console.log('name', name)
        props.deleteShoppingItem(id, name, shopping)
        //console.log('id', id)
        var setButtonEnabled = "product-katalog-" + id;
        document.getElementById(setButtonEnabled).disabled = false;
    }

    const handleInputChange = () => {
        //console.log('onChange');
    }

    const handleName = () => {
        //console.log('onChange');
    }

    useEffect(() => {
        //console.log('test', basket);
        const b = basket
        props.addBasket(b)
    }, [basket]);

    const handleSubmit = (event) => {
        event.preventDefault();

        var fieldNames = [];
        var fieldValues = [];
        var formArrElements = [];
        const el = event.target.elements
        //console.log(el);
        for (let ele of el) {
            //console.log("for...of:", ele.name)
            //fieldNames.push(ele.name);
            fieldValues.push(ele.value)
        }

        //var filteredNames = fieldNames.filter(Boolean);
        var filteredValues = fieldValues.filter(Boolean);

        //console.log('fieldNames', filteredNames)
        //console.log('fieldValues', filteredValues)

        var countItems = document.querySelectorAll('.shopping-product-name').length;
        //console.log('countItems', countItems);

        var zaehler = 0;
        for (var i = 0; i < countItems; i++) {
            formArrElements.push({ id: filteredValues[zaehler], name: filteredValues[zaehler+1], price: filteredValues[zaehler+2], quantity: fieldValues[zaehler + 3] });
            zaehler +=4
        }

        props.addBasket(formArrElements)
        setBasket()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {props.shoppings.length > 0 ? (
                    props.shoppings.map((shopping, index) => (
                        <div id={`product-id-${shopping.id}`} className="card auswahl mb-3" key={index}>
                            <ul className="list-group list-group-flush">
                                <li className="shopping-product-name list-group-item bg-secondary text-white">
                                    <input
                                        className="shoppingId"
                                        //ref={ShoppingNameRef}
                                        type="hidden"
                                        name={`id${index + 1}`}
                                        value={shopping.id}
                                        onChange={handleName}
                                        readOnly
                                    />
                                    <input
                                        className="shopping-name"
                                        //ref={ShoppingNameRef}
                                        type="text"
                                        name={`name${index + 1}`}
                                        value={shopping.name}
                                        onChange={handleName}
                                        readOnly
                                    />
                                </li>
                                <li className="list-group-item">
                                    <input
                                        className="shopping-price"
                                        type="text"
                                        name={`price${index + 1}`}
                                        value={shopping.price}
                                        onChange={handleInputChange}
                                        readOnly
                                    /> Euro
                                </li>
                                <li className="list-group-item">
                                    <label htmlFor="sel1">Menge: </label>        
                                    <select name={`quantity${index + 1}`} onChange={handleInputChange} className="form-select ms-2" defaultValue="1">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <span className="card-body">
                                        <a className="delete-button btn btn-sm btn-outline-danger" onClick={() => deleteShoppingItem(shopping.id, shopping.name, shopping)}><FontAwesomeIcon icon={faTrashCan} /> Löschen</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    ))
                ) : (
                    <div>
                        <p>Noch leer! Schnell einkaufen.</p>
                    </div>
                )}
                {(() => {
                    if (props.shoppings.length > 0) {
                        return (
                            <div>
                                <button className="btn btn-xl btn-danger mt-3 mb-5"><FontAwesomeIcon icon={faShoppingBasket} /> Zum Warenkorb hinzufügen</button>
                            </div>
                        )
                    } else {
                        return
                    }
                })()}
            </div>
        </form>
    )
}

export default Shopping