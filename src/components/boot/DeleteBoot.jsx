import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {actionDeleteUser} from "../../redux/duck"

const initFields={
    email:"",
    name:"",
    age:0
}

export default function DeleteBoot(){
    
    const[fields,setFields]=useState(initFields);
    const{email,name,age}=fields
    
    const dispatch= useDispatch();

    const handle=(e)=>{
        setFields({
            ...fields,
            [e.target.name]:e.target.value
        })
    }

    const fnDeleteUser=()=>{
        dispatch(actionDeleteUser(email,name,age))
        alert("delete user")
    }
    return(
        <div>
            <section>
                <input type="text" placeholder="email" name="email"value={email} onChange={handle} />
            </section>
            <section>
                <input type="text" placeholder="name" name="name"value={name} onChange={handle} />
            </section>
            <section>
                <input type="text" placeholder="age" name="age"value={age} onChange={handle} />
            </section>
            <section>
                <button onClick={fnDeleteUser}>Delete User</button>
            </section>
            
        </div>
    )

}


