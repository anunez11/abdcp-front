import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer =(state,action) => {
    if(action==="GET_DEPARTAMENTO"){
        return {
            ...state,
            departamento:action.data
        }
    }

    return state;
}

const inicial={
    cedente:[],
    modalidad:[],
    tipoCliente:[],
    departamento:[],
    tipoServicio:[],
    tidpoDocumento:[],
    solicitud:[],
    programacion:[],    
    acreditacion:[]
};


const logger = store => next => action => {
    console.log('dispatching',action);
    let result = next( action ); 
    console.log('next state ',store.getState());
    return result;
};

export default createStore(reducer,inicial,applyMiddleware(logger,thunk));