import React,{useState} from "react";
import users from "../mocks/user_mock";

let user={email:"",name:"",pass:""}

export default function AddUser(){

    const[fields,setFields]=useState(user);
    const{email,name,pass}=fields;

    const handleChange=(evt)=>{
        setFields({
            ...fields,
            [evt.target.name]:evt.target.value
        });
    }
    const fnCreateUser=()=>{
        users.push(fields);
        alert("guardado");
    }
    return (
        <div>
            <h1>add user</h1>
            <div>
                <input type="text" placeholder="email" name="email" value={email} onChange={handleChange} />
            </div>
            <div>
                <input type="text" placeholder="name" name="name" value={name} onChange={handleChange} />
            </div>
            <div>
                <input type="text" placeholder="pass" name="pass" value={pass} onChange={handleChange} />
            </div>
            <div>
                <button type="submit"  onClick={fnCreateUser}>Enviar</button>
            </div>
        </div>
    );
}