import React from 'react'
import CheckoutForm from './CheckoutForm/CheckoutForm';
import s from './Checkout.module.scss'

let Checkout = (props) => {
    let onSubmit = values => console.log(values)
    return (
        <section className={s.checkout}>
            <h2 className="hidden">Getting your order</h2>
            <CheckoutForm onSubmit={onSubmit}/>
        </section>
    )
}

export default Checkout;
