const maped= (unit,i)=>{
    return(

    <div className="bg border" key={i}>Email:{unit.email} Nombre: {unit.name} Pass: {unit.pass}</div>
    );
}

export default maped