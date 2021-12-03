import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {actionUpdateBoot} from "../../redux/duck"

const initFields={
    email:"",
    name:"",
    age:0
}

export default function UpdateBoot(){
    
    const[fields,setFields]=useState(initFields);
    const{email,name,age}=fields

    const dispatch= useDispatch();

    const handle=(e)=>{
        setFields({
            ...fields,
            [e.target.name]:e.target.value
        })

    }
    const fnUpdateUser=()=>{
        dispatch(actionUpdateBoot(email,name,age))
        alert("Update user")
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
                <button onClick={fnUpdateUser}>Update User</button>
            </section>
            
        </div>
    )

}

