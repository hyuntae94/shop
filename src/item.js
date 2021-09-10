import React from "react"

function Info( props ){

    return (
        <div className="col-md-4">
            <img width="250px" src={props.shoes.src}></img>
            <h4 style={ { marginTop: "10px" } }>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p> ₩ {props.shoes.price} </p>
        </div>
    )
}

export default Info;