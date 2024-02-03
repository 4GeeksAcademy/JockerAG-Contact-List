import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary">
  			<div className="container-fluid d-flex justify-content-start gap-2">
			  <i className="fa-solid fa-address-book fa-shake"></i>
			  <h1 className="fs-4 fw-bold  mt-1 me-4">Lista de contactos</h1>
			  <Link type="button" className="btn btn-outline-primary btn-sm" to="/">Home</Link>
			  <Link type="button" className="btn btn-outline-info btn-sm" to="/add-contact">Añadir contacto</Link>
			  <Link type="button" className="btn btn-outline-success btn-sm" to="/contact-list">Contactos</Link>
			  
				{/*<button type="button" className="btn btn-outline-info">Info</button>
				<button type="button" className="btn btn-outline-info">Info</button>*/}
 			</div>
		</nav>
	);
};
