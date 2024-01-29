import React, {useContext} from "react"
import { Context } from "../store/appContext.js"

export const Contactos = () => {
    const {store, actions} = useContext(Context);
    
    
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                {store.users.length > 0 && (
            <div key={store.users[0].id} className="text-center">
                <h5>{store.users[0].full_name}</h5>
                <p>Email: {store.users[0].email}</p>
                <p>Dirección: {store.users[0].address}</p>
                
            </div>
        )}

                
                </div>
                </div>
            </div>
      </div>
    )
}

