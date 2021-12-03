import React,{useState} from "react";

import users from "../mocks/user_mock"

export default function DeleteUsers(){

    let[email, setEmail]=useState(users);

    const handleChage=(evt)=>{
        setEmail(evt.target.value)
    }

    const fnDeleteUser=()=>{
    let len= users.length;
    let i=0;

    for(;i<len;i++){
        if(users[i].email==email){
            delete users[i];
        }
    }
    alert("eliminado")
    }

    return (
        <div>
            <h1>delete user</h1>
            <input type="text" name="email" value={email} onChange={handleChage} />
            <button onClick={fnDeleteUser}>eliminar</button>
        </div>
    );
}