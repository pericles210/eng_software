import { Nav, NavItem, NavLink } from "reactstrap";
import { NavbarBrand } from "reactstrap";
import React from "react";
import './Navbar__.css';
import SubMenu from "./SubMenu.js";
import { IoIosHome, IoIosNotifications, IoMdAt, IoIosLogIn, IoIosInformationCircleOutline, IoMdCheckmark } from "react-icons/io";
import AuthContext, { useAuth } from "../../context/auth-context";

export default function Navbar__(){
    return (
      <div className="side_body">
        <Nav pills tabs vertical>
          <NavbarBrand href="/" className="Brand"><p className="Navbrand_p">Projeto 2</p></NavbarBrand>
          <NavItem>
            <NavLink href="/"><p className="Navlink_p"> <IoIosHome/> Home</p></NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#"><p className="Navlink_p"> <IoIosInformationCircleOutline/> About</p></NavLink>
          </NavItem>

        <SubMenu title='Listar' subs={submenus[0]}></SubMenu>

          <NavItem>
            <NavLink href="#"><p className="Navlink_p"> <IoIosNotifications/> Notificações</p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><p className="Navlink_p"> <IoMdCheckmark/> Cadastrar</p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login/"><p className="Navlink_p"> <IoIosLogIn/> Entrar</p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><p className="Navlink_p"> <IoMdAt/> Contact</p></NavLink>
          </NavItem>

        </Nav>
      </div>
    );
}

const submenus = [
  [
    ["Médicos", ""],
    ["Pacientes", "/medico/lista_pacientes"],
    ["Sensores", ""],
  ],
];
