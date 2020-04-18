import React, { useContext, useState } from 'react';
import { validationSchema } from "../utils/validationSchema"
import { store } from '../store.js';
import PasswordImg from '../images/pass-icon.png';
import ConfirmPasswordImg from '../images/con-pass-icon.png';
import NameImg from '../images/name-icon.png';

const Form = () => {
    const { state, dispatch } = useContext(store);
    const { values } = state;
    const [errors, setErrors] = useState({});

    const handleChange = (key, value) => {
        dispatch({ type: 'CHANGE_DATA', payload: { key, value } });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validationSchema.validate(values, { abortEarly: false })
            .then(() => {
                dispatch({ type: 'SUBMIT_FORM', payload: values });
                setErrors({})
            })
            .catch((err) => {
                const errors = err.inner.reduce((obj, item) => (obj[item.path] = item.errors[0], obj), {});
                setErrors(errors)
            })
    }

    return (
        <form className="form" onSubmit={handleSubmit} >
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        {errors && errors.firstName ? (
                            <small className="text-danger d-block mb-md-2">{errors.firstName}</small>
                        ) : null}
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                onChange={(e) => { handleChange(e.target.name, e.target.value) }}
                                value={values.firstName}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text bg-white">
                                    <img height="18" width="18" alt="" src={NameImg} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        {errors && errors.lastName ? (
                            <small className="text-danger d-block mb-md-2">{errors.lastName}</small>
                        ) : null}
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            onChange={(e) => { handleChange(e.target.name, e.target.value) }}
                            value={values.lastName}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        {errors && errors.email ? (
                            <small className="text-danger d-block mb-md-2">{errors.email}</small>
                        ) : null}
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={(e) => { handleChange(e.target.name, e.target.value) }}
                            value={values.email}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        {errors && errors.password ? (
                            <small className="text-danger d-block mb-md-2">{errors.password}</small>
                        ) : null}
                        <div className="input-group">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={(e) => { handleChange(e.target.name, e.target.value) }}
                                value={values.password}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text bg-white">
                                    <img height="18" width="18" alt="" src={PasswordImg} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        {errors && errors.confirmPassword ? (
                            <small className="text-danger d-block mb-md-2">{errors.confirmPassword}</small>
                        ) : null}
                        <div className="input-group">
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                onChange={(e) => { handleChange(e.target.name, e.target.value) }}
                                value={values.confirmPassword}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text bg-white">
                                    {(values.password && values.password === values.confirmPassword)
                                        ? <img height="18" width="18" alt="" src={ConfirmPasswordImg} />
                                        : <img height="18" width="18" alt="" src={PasswordImg} />
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-primary submit-button mt-md-4 mt-2">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Form;
