import React from 'react'
import s from './CheckoutForm.module.scss'
import { Field } from 'redux-form';

let CheckoutForm = (props) => {
    const {handleSubmit} = props
    return (
        <form className={s.checkout} onSubmit={handleSubmit}>
            <div className={s.shipping}>
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
            
        </form>
    )
}

export default CheckoutForm;
