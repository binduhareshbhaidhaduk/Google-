// /* eslint-disable no-case-declarations */
// // import getData from 'service/Helper'
// // import { getData, setData } from '../../components/Service/Helper';

// const initialState = {
//     contacts: [],
//     contact: null,
//     isLoading:false
// };

// export const contactReducer = (state = initialState, action) => {
//     switch (action.type) {
        

//         case 'LOADING':
//             return {...state, isLoading: true}

//         case 'ADDCONASYNC':
//             return {
//                 ...state,
//                 contacts:action.payload,
//                 contact:null,
//                 isLoading:false
//             }

//         default:
//             return state;

//     }
// };

// export default contactReducer;

const initialState = {
    contacts: [],
    contact: null,
    isLoading: false
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, isLoading: true };

        case 'ADDCONASYNC':
            return {
                ...state,
                contacts: action.payload,
                contact: null,
                isLoading: false
            };

        case 'ADD':
            return {
                ...state,
                contacts: action.payload,
                isLoading: false
            };

        case 'SINGLEREC':
            return {
                ...state,
                contact: action.payload,
                isLoading: false
            };

        case 'UPDATED':
            return {
                ...state,
                contacts: action.payload,
                isLoading: false
            };

        case 'DELETE':
            return {
                ...state,
                contacts: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
};

export default contactReducer;
