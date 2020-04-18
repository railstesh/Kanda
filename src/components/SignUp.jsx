import React, { useContext } from 'react';
import Form from "./Form"
import Success from "./Success"
import { store } from '../store.js';

const SignUp = () => {
    const { state } = useContext(store);
    return (
        <div className={`card ${state.success ? "p-5" : ""}`}>
            {state.success
                ? <Success />
                : (
                    <div className="card-body">
                        <h3 className="card-title pb-md-4 mb-1">Kanda Exam</h3>
                        <Form />
                    </div>
                )
            }
        </div>
    )
}

export default SignUp;
