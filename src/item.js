import React from "react"

function Info( {img, title, content, price} ){

    return (
        <div className="col-md-4">
            <img width="250px" src={img}></img>
            <h4 style={ { marginTop: "10px" } }>{title}</h4>
            <p>{content}</p>
            <p> ₩ {price} </p>
        </div>
    )
}

export default Info;