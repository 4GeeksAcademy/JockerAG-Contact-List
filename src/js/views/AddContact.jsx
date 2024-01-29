import React from "react"
import { Link } from "react-router-dom";


export const AddContact = () => {
    
    
    return (
        <form>
            <div className="container pt-5">
                <div className="titulo">
                    <h1 className="fs-4 fw-bold text-center text-center">Añadir Contacto</h1>
                </div>
                
                <div className="mb-3">
                    <label for="text-name" className="form-label fw-bold">Nombre y apellidos</label>
                    <input type="text" className="form-control" id="text-name" placeholder="Nombre Completo"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-bold">EMail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@mail.com"/>
                </div>
                <div className="mb-3">
                    <label for="text-name" className="form-label fw-bold">Nº Telefono</label>
                    <input type="number" className="form-control" id="phone-number" placeholder="+34"/>
                </div>
                <div className="mb-3">
                    <label for="text-name" className="form-label fw-bold">Dirección</label>
                    <input type="text" className="form-control" id="text-adress" placeholder="Dirección Postal"/>
                </div>    

                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Save</button>
                    
                </div>
                    
                
            </div>
        </form>
                    
    );
}