import React, { useContext } from 'react';
import Form from "./Form"
import Success from "./Success"
import { store } from '../store.js';

const SignUp = () => {
    const { state } = useContext(store);
    return (
        <div className={`card ${state.success && "card-top"}`}>
            {state.success
                ? <Success />
                : (
                    <div className="card-body">
                        <h3 className="card-title pb-4">Kanda Exam</h3>
                        <Form />
                    </div>
                )
            }
        </div>
    )
}

export default SignUp;
