import React, { useState } from 'react';
import { DarkModeToggle } from './components/Utilities/toggle'
import Shopping from './components/Shop/Shopping';
import Products from './components/Shop/Products'; 
import Basket from './components/Shop/Basket';
import InfoAlert from './components/Alert/InfoAlert';
import { faShop, faShoppingCart, faGift, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {

    const productData = [
        { id: 1, name: 'Produkt 1', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', price: '15.99'},
        { id: 2, name: 'Produkt 2', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', price: '20.99' },
        { id: 3, name: 'Produkt 3', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', price: '7.99' },
    ]

    const shoppingData = []
    const [products, setProducts] = useState(productData)
    const [shoppings, setShopping] = useState(shoppingData)
    const [baskets, setBaskets] = useState([])
    const [editing, setEditing] = useState(false)
    const [buys, setBuy] = useState([])

    const addShopping = (shopping) => {
        //console.log('App - id', shopping.id)
        //shopping.id = shoppings.length + 1
        setShopping([...shoppings, shopping])
        //console.log(shoppings)
    }

    const deleteShoppingItem = (id) => {
        setShopping(shoppings.filter((shopping) => shopping.id !== id))
    }

    const setEditingShopping = (status) => {
        setEditing(status)
    }

    const setOrder = (items) => {
        //console.log('AppOrder', items)
        setBuy([...buys, items])
        console.log('buys', buys)
    }

    const addBasket = (basket) => {
       
        //console.log('addBasket', basket)

        setBaskets([ ...baskets, basket ])
        //console.log('add-App.js', baskets)
        //baskets.shift();
        //console.log('product', productData)
    
        if (!basket) {
            setEditingShopping(true)
            //console.log('test');
        }
    }

    return (
        <div className="container">
            <div className="row pt-5 pb-5">
                <div className="col-lg-6">
                    <h1><FontAwesomeIcon icon={faShop} /> Demo Online Shop</h1>
                </div>
                <div className="col-lg-6">
                    <DarkModeToggle />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <InfoAlert />
                </div>
            </div>
            {!editing ? (
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="mb-5"><FontAwesomeIcon icon={faGift} /> Produktkatalog</h2>
                    <Products products={products} addShopping={addShopping} />
                </div>
                <div className="col-lg-6 margin-top">
                    <div className="card ps-4 pe-4">
                        <h2 className="pt-3 pb-3"><FontAwesomeIcon icon={faShoppingCart} /> Ihre Auswahl</h2>
                        <Shopping products={products} shoppings={shoppings} deleteShoppingItem={deleteShoppingItem} setEditingShopping={setEditingShopping} addBasket={addBasket} />
                    </div>
                </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="mb-2"><FontAwesomeIcon icon={faShoppingBasket} /> Warenkorb</h2>
                        <Basket setEditingShopping={setEditingShopping} addBasket={addBasket} baskets={baskets} setOrder={setOrder} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default App