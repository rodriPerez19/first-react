import React,{useState} from 'react'

const initFields={
    email:""
}
const initialUser={
    emailU:"",
    name:"",
    age:""
}

export default function SearchBoot({users}){
    
    const[fields,setFields]=useState(initFields);
    const{emailu}=fields
    const[user,setUser]=useState(initialUser);
    const{email,name,age}=user
    

    const handle=(e)=>{
        setFields({
            ...fields,
            [e.target.name]:e.target.value
        })

    }
    const fnSearchUser=()=>{
            users.map(el=>{
                if(el.email===email){
                    setUser(el)
                }
            })
    }
    return(
        <div>
            <section>
                <input type="text" placeholder="email" name="email"value={emailu} onChange={handle} />
            </section>
            <section>
                <p>{email}-{name}-{age}</p>
            </section>
            <section>
                <button onClick={fnSearchUser}>Search User</button>
            </section>
            
        </div>
    )

}

