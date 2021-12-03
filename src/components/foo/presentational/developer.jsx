import React,{Fragment} from "react";

export default function Developer({role}){
    // if(role === "fullstack"){
    //     return(
    //         <Fragment>
    //          <h1>full stack</h1>
    //         </Fragment>
    //     );

    // }
    // else{
    //     return(
    //         <Fragment>
    //         <h1>developer</h1>
    //         </Fragment>
    //     );

    // }

    return(
        <Fragment>
        {
            ((r)=>{
            if(role === "fullstack"){
                return <h1>{r.toUpperCase()}</h1>

            }
            else{
                return <h1>dev</h1>  
            }
            })(role)
        }
        </Fragment>

    );
}
