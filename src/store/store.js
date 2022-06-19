import {createContext, useContext, useReducer} from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        block: [],
        name: '',
        result: 0,
    });

    return (
        <AppContext.Provider
            value={{
                block: state.block,
                name: state.name,
                result: state.result,
            }}>
            {children}
        </AppContext.Provider>
    );
};
