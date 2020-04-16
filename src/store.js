import React, { createContext, useReducer } from 'react';

const initialState = {
    values: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
    success: false,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SUBMIT_FORM':
                return {
                    ...state,
                    values: { ...action.payload },
                    success: true
                };
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }