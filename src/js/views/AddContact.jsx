import React, {useContext, useState} from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
    // importar el context 
    const {store , actions} = useContext(Context);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate()

    // Crear los estados de los 4 Input(name, email, address y phone)

    // Controlar los input con onChange y value

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        
        actions.newUser(name, email, "Agenda-Alfredo", phone, address)
        navigate('/contact-list')
        
        // tengo que llamar al action y le tengo que enviar los 5 parametros 
        // enviar al usuario a la vista de contactos. Aqui utilizar el useNavigate()
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="container pt-5">
                <div className="titulo">
                    <h1 className="fs-4 fw-bold text-center text-center">Añadir Contacto</h1>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="text-name" className="form-label fw-bold">Nombre y apellidos</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="text-name" placeholder="Nombre Completo" value={name || ""}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold" value={email || ""}>E-Mail</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@mail.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="text-name" className="form-label fw-bold" value={phone || ""}>Nº Telefono</label>
                    <input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="phone-number" placeholder="+34"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="text-name" className="form-label fw-bold" value={address || ""}>Dirección</label>
                    <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="text-adress" placeholder="Dirección Postal"/>
                </div>    

                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Save</button>
                    
                </div>
                    
                
            </div>
        </form>
                    
    );
}