import React, { Fragment } from "react";

import data from "./mocks/data";

import InternalA from "./presentational/internalA";


const cMap=(unit,i)=>{
    if(i %2 ==0){

        return(<li key={i}>par {unit}</li>)
    }
    else{
        
        return(<li key={i}>inpar {unit}</li>)
    }

}


const List= ()=>{

    return(
        <Fragment>
            <InternalA/>
            {data.map(cMap)}
            
        </Fragment>
    );
}

export default List