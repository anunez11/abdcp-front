import React from "react";
import {Router,Switch } from "react-router-dom";


import App from "./components/App";
import Consulta from  "./components/Consulta";
import Programacion from  "./components/Programacion";
import Retorno from  "./components/Retorno";
import Solicitud from  "./components/Solicitud";
import Page404 from  "./components/Page404";


const AppRoutes= () => 
                     <App> 
                         <Switch>
                             <Router path="/consulta" component={Consulta} />
                             <Router path="/programacion" component={Programacion} />
                             <Router path="/retorno" component={Retorno} />
                             <Router path="/solicitud" component={Solicitud} />
                             <Router path="/" component={Consulta} />
                             <Router component={Page404} />
                         </Switch>
                     </App>;
export default AppRoutes;                     
