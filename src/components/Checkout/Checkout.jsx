import React from 'react'
import CheckoutForm from './CheckoutForm/CheckoutForm';
import s from './Checkout.module.scss'

let Checkout = (props) => {
    return (
        <section className={s.checkout}>
            <h2 className="hidden">Getting your order</h2>
            <CheckoutForm/>
        </section>
    )
}

export default Checkout;
