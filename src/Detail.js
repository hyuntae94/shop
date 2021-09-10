import React from "react";
import { useHistory } from "react-router-dom";


export default function Detail({src, price}){
    
    let history = useHistory();
    
    return (
        <div className="container">
            <div className="row">
            <div style={ {marginTop:"20px"}} className="col-md-6">
                <img src={src} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>₩ {price}</p>
                <button className="btn btn-danger">주문하기</button> 
                <button style={{marginLeft:"5px"}} onClick = { () => {history.goBack()} }
                className="btn btn-danger">뒤로가기</button> 
            </div>
            </div>
        </div>
    )
}