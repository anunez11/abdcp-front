import axios from "axios";
import variables from "../variables";
const getListaDepartamento = () => {

    return dispactch=>{
           axios.get(variables.apiBase+"lista/listaDepartamento").then(response=>{
                    dispactch( {
                        type:"GET_DEPARTAMENTO",
                        data:response.data
                    })
           } );
    };
};


const getListaModalidad= () => {

    return {
        type:"GET_MODALIDAD",
        data:[]
    };
    
};

const getListaServicio = () => {

    return {
        type:"GET_SERVICIO",
        data:[]
    };
};

const getListaCedente = () => {

    return {
        type:"GET_CEDENTE",
        data:[]
    };
    
};
const getListaTipoDocumento = () => {

    return {
        type:"GET_TIPO_DOCUMENTO",
        data:[]
    };
};
const getListaTipoCliente = () => {

    return {
        type:"GET_TIPO_CLIENTE",
        data:[]
    };
    
};

export {getListaDepartamento,getListaModalidad,getListaServicio,getListaCedente,getListaTipoDocumento,getListaTipoCliente} ;