import React, { Component } from "react";
import {MDBNavbar,MDBIcon, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, MDBCollapse,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

import {Link} from "react-router-dom"; 
class Header extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (

    <header>

<MDBNavbar color="blue" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">GTD - PORTABILIDAD</strong>
          
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />        
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav right>           
               
           

            <MDBNavItem>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2"><MDBIcon fas icon="phone-volume" /> Procesos</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  
                <MDBDropdownItem> <Link to="consulta" ><MDBIcon fab icon="google-plus-g" /> Consulta Previa</Link></MDBDropdownItem>
                  
                <MDBDropdownItem>  <Link to="solicitud" ><MDBIcon fas icon="clipboard-list" /> Solicitud de Protabilidad</Link></MDBDropdownItem>
                <MDBDropdownItem>  <Link to="acreditacion" ><MDBIcon fas icon="file-invoice-dollar" /> Acreditacion de Pago</Link></MDBDropdownItem>
                <MDBDropdownItem>  <Link to="programacion" ><MDBIcon fas icon="calendar-alt" /> Progamacion Protabilidad</Link></MDBDropdownItem>
                 

                     
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <li class="nav-item" id="1">
                          <Link to="/mensajes" className="nav-link" ><MDBIcon fas icon="envelope" /> Mensajes</Link>
                       
                   </li>            
                  <li class="nav-item" id="2">
                  <Link to="/cliente" className="nav-link" ><MDBIcon fas icon="user-cog" /> Clientes</Link>
                 </li>
            </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
    
    );
  }
}

export default Header;
