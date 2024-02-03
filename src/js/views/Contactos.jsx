import React, {useContext, useState } from "react"
import { Context } from "../store/appContext.js"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom";

export const Contactos = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const editTask = (item) => {
        actions.assignUser(item);
        navigate('/edit-contact')
    }
    

   
    
    
    
    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center fw-bold text-success">Contact list</h1>
            <div className="row mt-5 d-flex justify-content-center align-items-center text-center">
                {store.users.map((user) => (
                    <div key={user.id} className="col-lg-2 mb-2">
                        <div className="card text-bg-dark " style={{maxWidth: "18rem"}}>
                            <div className="card-header fs-4 fw-bold">{user.full_name}</div>
                            <div className="card-body">
                                <h5 className="card-title">{user.email}</h5>
                                <p className="card-text">{user.address}</p>
                                <p className="card-text">{user.phone}</p>
                            </div>
                            <div className="interface d-flex gap-2 mb-2 justify-content-between">
                                <button onClick={() => { editTask(user) }} type="button" className="btn btn-outline-primary btn-sm ms-3"><i className="fa-solid fa-pen"></i></button>
                                <button onClick={() => actions.deleteUsers(user.id)} type="button" className="btn btn-danger btn-sm me-3"><i className="fa-solid fa-trash  text-light"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

