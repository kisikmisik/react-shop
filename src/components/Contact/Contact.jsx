import React from 'react'
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";

let ContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'123'} component={'input'}/>

            <button>Send</button>
        </form>
    )
}

const ContactReduxForm = reduxForm({form: 'contact'})(ContactForm)

const Contact = (props) => {
    const handleSubmit = (val) => {
        console.log(val)
    }

    return (
        <section className="home">
            <h2 className="hidden">Contact us</h2>

            <ContactReduxForm onSubmit={handleSubmit}/>
        </section>
    )
}

export default Contact;
