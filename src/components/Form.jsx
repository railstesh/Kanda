import React, { useContext } from 'react';
import { Formik } from 'formik';
import { validationSchema } from "../utils/validationSchema"
import { store } from '../store.js';
import PasswordImg from '../images/pass-icon.png';
import ConfirmPasswordImg from '../images/con-pass-icon.png';
import NameImg from '../images/name-icon.png';

const Form = () => {
    const { state, dispatch } = useContext(store);
    return (
        <Formik
            initialValues={state.values}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values) => {
                dispatch({ type: 'SUBMIT_FORM', payload: values });
            }}
        >
            {({ values, errors, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                {errors.firstName ? (
                                    <div className="text-danger mb-2">{errors.firstName}</div>
                                ) : null}
                                <div class="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        onChange={handleChange}
                                        value={values.firstName}
                                    />
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <img height="18" width="18" src={NameImg} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                {errors.lastName ? (
                                    <div className="text-danger mb-2">{errors.lastName}</div>
                                ) : null}
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    onChange={handleChange}
                                    value={values.lastName}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                {errors.email ? (
                                    <div className="text-danger mb-2">{errors.email}</div>
                                ) : null}
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                {errors.password ? (
                                    <div className="text-danger mb-2">{errors.password}</div>
                                ) : null}
                                <div class="input-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <img height="18" width="18" src={PasswordImg} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                {errors.confirmPassword ? (
                                    <div className="text-danger mb-2">{errors.confirmPassword}</div>
                                ) : null}
                                <div class="input-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        onChange={handleChange}
                                        value={values.confirmPassword}
                                    />
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <img height="18" width="18" src={ConfirmPasswordImg} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            )}
        </Formik>
    )
}

export default Form;
