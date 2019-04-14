import React from "react";
import {Route,Switch } from "react-router-dom";


import App from "./components/App";
import Consulta from  "./components/Consulta";
import Acreditacion  from "./components/Acreditacion";
import Programacion from  "./components/Programacion";
import Retorno from  "./components/Retorno";
import Solicitud from  "./components/Solicitud";
import Page404 from  "./components/Page404";


const AppRoutes= () => 
                     <App> 
                        <Switch>
                             <Route exact path="/consulta" component={Consulta} />
                             <Route exact path="/programacion" component={Programacion} />
                             <Route exact path="/retorno" component={Retorno} />
                             <Route exact path="/solicitud" component={Solicitud} />
                             <Route exact path="/acreditacion" component={Acreditacion} />
                             <Route exact path="/" component={Consulta} />
                             <Route component={Page404} />
                         </Switch>
                     </App>;
export default AppRoutes;                     
