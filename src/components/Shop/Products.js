import React, { useState } from 'react';
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Products = (props) => {

    const initialFormState = { id: 0, name: '', description: '', price: '' }
    const [shopping, setShopping] = useState(initialFormState)
   
    const addShopping = (product, e) => {
        //console.log('id', product.id);
        e.target.disabled = true
        props.addShopping(product)
        setShopping({ ...shopping, product })
    }

    return (
        <div>
            {
                props.products.length > 0 ? (
                    props.products.map((product, index) => (
                    <div className="product-catalog card mb-5" key={index} id={product.id}>
                        <div className="card-header bg-secondary text-white">
                            <h5 className="card-title mt-2">{product.name}</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{product.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Stückpreis: {product.price} Euro</li>
                        </ul>
                        <div className="card-body">
                                <button id={`product-katalog-${product.id}`} className="product-button btn btn-lg btn-danger" onClick={(e) => addShopping(product, e)}><FontAwesomeIcon icon={faSquareCheck} /> Auswählen</button>
                        </div>
                    </div>
                    ))
                    ) : (
                <div>Keine Produkte</div>
            )}
        </div>
   
    )
}
export default Products

   