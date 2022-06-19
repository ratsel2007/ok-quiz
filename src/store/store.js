import {createContext, useContext, useReducer} from 'react';

const ADD_NAME = 'ADD_NAME';
const ADD_BLOCK = 'ADD_BLOCK';
const ADD_RESULT = 'ADD_RESULT';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

const reducer = (state, action) => {
    console.log(action.block);
    switch (action.type) {
        case ADD_NAME:
            return {...state, name: action.name};
        case ADD_BLOCK:
            return {...state, block: action.block};
        case ADD_RESULT:
            return {...state, res: state.res++};
        default:
            return state;
    }
};

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        block: [],
        name: '',
        res: 0,
    });

    const saveName = (name) => {
        dispatch({type: ADD_NAME, name});
    };

    const changeBlock = (block) => {
        dispatch({type: ADD_BLOCK, block});
    };

    return (
        <AppContext.Provider
            value={{
                block: state.block,
                name: state.name,
                res: state.res,
                changeBlock,
                saveName,
            }}>
            {children}
        </AppContext.Provider>
    );
};
