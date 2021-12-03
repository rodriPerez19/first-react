import React from "react";
//CON ESTO PUEDO UTILIZAR EL ROUTER Y ROUTE
import {Routes,Route,Link} from "react-router-dom";

import "./css/style.css";

//LLAMO A LOS OTROS COMPONENTES
import AddUser from "./presentationals/add_users";
import DeleteUsers from "./presentationals/delete_users";
import ListUser from "./presentationals/list_users"; 



export function UserAll(){

    return(
        <div>
            <li>
                <Link to="/">users</Link>
            </li>
            <li>
                <Link to="/add">add user</Link>
            </li>
            <li>
                <Link to="/delete">delete user</Link>
            </li>
            <section>
                <Routes>
                    <Route index path="/" element={<ListUser/>}/>
                    <Route index path="/add" element={<AddUser/>}/>
                    <Route index path="/delete" element={<DeleteUsers/>}/>
                </Routes>
            </section>
        </div>
    );

}


