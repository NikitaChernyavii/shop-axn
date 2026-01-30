import React, { useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import Order from './Order'

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    // Вынесем логику показа товаров в функцию, чтобы код был чище
    const showOrders = (props) => {
        let summa = 0
        props.orders.forEach(el => summa += Number.parseFloat(el.price))
        
        return (
            <div>
                {props.orders.map(el => (
                    <Order onDelete={props.onDelete} key={el.id} item={el} />
                
                ))}

                <p className='summa'>Price: {new Intl.NumberFormat().format(summa)}$</p>
            </div>
        )
    }

    const showNothing = () => {
        return (
            <div className='empty'>
                <h2>Товаров нет</h2>
            </div>
        )
    }

   return (
    <header>
        {/* Контейнер, который мы будем "флексить" */}
        <div className='header-top'> 
            <span className='logo'>AxN Design</span>
            
            <ul className='nav'>
                <li>About us</li> 
                <li>Contact</li>
                <li>Profile</li>
                {/* Корзину кладем внутрь списка, чтобы она была в ряд с текстом */}
                <li>
                    <FaShoppingBag 
                        onClick={() => setCartOpen(!cartOpen)} 
                        className={`shop-bag-button ${cartOpen ? 'active' : ''}`}
                    />
                </li>
            </ul>

            {/* Корзина (выпадающее окно) */}
            {cartOpen && (
                <div className='shop-bag'> 
                    {props.orders.length > 0 ? 
                        showOrders(props) : showNothing()}
                </div>
            )}
        </div>

        <div className='presentation'></div>
    </header>
)
}