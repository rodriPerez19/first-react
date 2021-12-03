import React from "react";
import Type from "prop-types"
import Developer from "./presentational/developer";

export default function Foo({email,name,role,pass}){

    // let{email,name,role,pass}=props
    return(
        <div>
            <h3>Email</h3>
            <span> {email}</span>
            <h3>Name</h3>
            <span> {name}</span>
            <h3>Pass</h3>
            <span> {pass}</span>
            <h3>Role</h3>
            <span> <Developer role={role}/></span>

        </div>

    );
}

Foo.propTypes={
    email:Type.string.isRequired,
    name:Type.string.isRequired,
    role:Type.string.isRequired,
    pass:Type.string.isRequired,
}