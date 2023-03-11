import React from "react"

const Card = ({userName,userLastName,userMail,selectValue}) => {
    return (
    <div>
        <h4>Inscripción exitosa:</h4>
        <h5>Nombre: {userName} {userLastName}</h5>
        <h5>Email: {userMail}</h5>
        <h5>Al programa de: {selectValue}</h5>

    </div>
    )
}

export default Card