import {createContext, useContext, useReducer} from 'react';

const ADD_NAME = 'ADD_NAME';
const ADD_BLOCK_NAME = 'ADD_BLOCK_NAME';
const ADD_BLOCK = 'ADD_BLOCK';
const ADD_RESULT = 'ADD_RESULT';
const ADD_COUNT = 'ADD_COUNT';
const CHANGE_FIRST = 'CHANGE_FIRST';
const CHANGE_SECOND = 'CHANGE_SECOND';
const CHANGE_FINAL = 'CHANGE_FINAL';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_NAME:
            return {...state, name: action.name};
        case ADD_BLOCK:
            return {...state, block: action.block};
        case ADD_BLOCK_NAME:
            return {...state, blockName: action.blockName};
        case ADD_RESULT:
            return {...state, result: state.result + 1};
        case ADD_COUNT:
            return {...state, count: state.count++};
        case CHANGE_FIRST:
            return {...state, first: !state.first};
        case CHANGE_SECOND:
            return {...state, second: !state.second};
        case CHANGE_FINAL:
            return {...state, second: !state.second, final: !state.final};
        default:
            return state;
    }
};

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        block: [],
        blockName: '',
        name: '',
        result: 0,
        count: 0,
        first: true,
        second: false,
        final: false,
    });

    const saveName = (name) => {
        dispatch({type: ADD_NAME, name});
    };

    const saveBlockName = (blockName) => {
        dispatch({type: ADD_BLOCK_NAME, blockName});
    };

    const changeBlock = (block) => {
        dispatch({type: ADD_BLOCK, block});
    };

    const addResult = () => {
        dispatch({type: ADD_RESULT});
    };

    const addCount = () => {
        dispatch({type: ADD_COUNT});
    };

    const changeFirst = () => {
        dispatch({type: CHANGE_FIRST});
    };

    const changeSecond = () => {
        dispatch({type: CHANGE_SECOND});
    };

    const changeFinal = () => {
        dispatch({type: CHANGE_FINAL});
    };

    return (
        <AppContext.Provider
            value={{
                block: state.block,
                blockName: state.blockName,
                name: state.name,
                result: state.result,
                count: state.count,
                first: state.first,
                second: state.second,
                final: state.final,
                changeBlock,
                saveBlockName,
                saveName,
                changeFirst,
                changeSecond,
                changeFinal,
                addResult,
                addCount,
            }}>
            {children}
        </AppContext.Provider>
    );
};
