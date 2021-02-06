import React from 'react'
import s from './CheckoutForm.module.scss'
import { Field, reduxForm } from 'redux-form';

let CheckoutForm = (props) => {
    const {onSubmit} = props
    return (
        <form className={s.checkout} onSubmit={onSubmit}>
            <div className={s.formWrapper}>
                <h3 className={s.shippingHeader}>
                    Shipping information
                </h3>
                <label  className={s.field}>
                <span className={s.fieldLabel}>
                    First Name
                </span>
                <Field component={"input"} type="text" name="firstName" type="text" className={s.fieldInput}/>
                </label>
                
                <label  className={s.field}>
                    <span className={s.fieldLabel}>
                        Last Name
                    </span>
                    <Field component={"input"}  type="text" name="lastName" type="text" className={s.fieldInput}/>
                </label>

                <label  className={s.field}>
                    <span className={s.fieldLabel}>
                        Address
                    </span>
                    <Field component={"input"} type="text" name="addressFirst" type="text" className={s.fieldInput}/>
                    <Field component={"input"} type="text" name="addressSecond" type="text" className={s.fieldInput}/>
                </label>

                <label  className={s.field}>
                    <span className={s.fieldLabel}>
                        City
                    </span>
                    <Field component={"input"} type="text" name="city" type="text" className={s.fieldInput}/>
                </label>

                <label  className={s.field}>
                    <span className={s.fieldLabel}>
                        ZIP-code
                    </span>
                    <Field component={"input"} type="text" name="zip" type="text" className={s.fieldInput}/>
                </label>
            </div>
            <div className={s.formWrapper}>
                <label  className={s.field}>
                    <span className={s.fieldLabel}>
                        Email address
                    </span>
                    <Field component={"input"} type="email" name="email" type="text" className={s.fieldInput}/>
                </label>

                <label  className={s.field}>
                    <span className={s.fieldLabel}>
                        Phone number
                    </span>
                    <Field component={"input"} type="number" name="zip" type="text" className={s.fieldInput}/>
                </label>
            </div>

            <button className={s.buyButton}>
                Continue to payment information
            </button>
            
        </form>
    )
}

const CheckoutReduxForm = reduxForm({form: 'checkoutForm'})(CheckoutForm)

export default CheckoutReduxForm;
