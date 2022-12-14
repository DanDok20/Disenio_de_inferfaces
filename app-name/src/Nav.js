import "./components/Nav.css"
import React, {useEffect} from "react";
import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="nav-link" to='/'> 
                <img src="/logo.png" alt="LOGO" width="98px" heigth="121px"></img>
            </Link>
            <h1 id="logoName"><b>Rainbow Tactics</b></h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto  ">
            <li className="nav-item active " id="inicioLink">
                <Link className="nav-link text-light" to='/'> Inicio </Link>
            </li>
            <li className="nav-item active" id="agentesLink">
                <Link className="nav-link text-light" to='/agentes'> Agentes </Link>
            </li>
            <li className="nav-item active" id="mapasLink">
                <Link className="nav-link text-light" to='/mapas'> Mapas </Link>
            </li>
            <li className="nav-item active" id="eventosLink">
                <Link className="nav-link text-light" to='/eventos'> Eventos </Link>
            </li>
            <li className="nav-item active" id="foroLink">
                <Link className="nav-link text-light" to='/foro'> Foro </Link>
            </li>
            <li className="nav-item active" id="contactanosLink">
                <Link className="nav-link text-light" to='/contactanos'> Contactanos </Link>
            </li>
            <li className="nav-item active" id="loginLink">
                <Link className="nav-link text-light" to='/login'> Login </Link>
            </li>
            <li className="nav-item active" id="registroLink">
                <Link className="nav-link text-light" to='/registro'> Registro </Link>
            </li>
            </ul>
        </div>
        <Link className="nav-link" to='/login'> 
                <img id="userIcon" src="/user_icon.png" alt="USER" width="60px" heigth="70px"></img>
            </Link>
        </nav>
    )
}

export default NavBar