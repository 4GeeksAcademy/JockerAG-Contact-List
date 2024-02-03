import React, {useContext, useState} from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export const EditContact = () => {
    const {store, actions } = useContext(Context)
    const details = store.currentUser;
    

    const [name, setName] = useState(details.full_name);
    const [email, setEmail] = useState(details.email);
    const [agenda, setAgenda] = useState("Agenda-Alfredo");
    const [address, setAddress] = useState(details.address);
    const [phone, setPhone] = useState(details.phone);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const dataToSend = {
            "full_name": name,
            "email": email,
            "agenda_slug": agenda,
            "address": address,
            "phone": phone
        }
        actions.editUser(details.id, dataToSend)
        navigate('/contact-list');
        
    }

  

    return (
        <div className="container">
            <h1 className="text-center">Editar</h1>
            <form onSubmit={handleSubmit}>
            <div className="container pt-5">
                <div className="titulo">
                    <h1 className="fs-4 fw-bold text-center text-center">Añadir Contacto</h1>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="text-name" className="form-label fw-bold">Nombre y apellidos</label>
                    <input  value={name} onChange={(e) => setName(e.target.value)}  type="text" className="form-control" id="text-name" placeholder="Nombre Completo"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">E-Mail</label>
                    <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@mail.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone-number" className="form-label fw-bold">Nº Telefono</label>
                    <input  value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="phone-number" placeholder="+34"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="text-name" className="form-label fw-bold" >Dirección</label>
                    <input  value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="text-adress" placeholder="Dirección Postal"/>
                </div>    
                <footer>
                    <div className="d-grid">
                        <button onClick={handleSubmit} className="btn btn-primary" type="submit">Save</button>
                        <Link  className="btn btn-danger mt-2" type="button" to="/contact-list">Return</Link>
                    </div>

                </footer>
                    
                
            </div>
        </form>
        </div>
    )
}
