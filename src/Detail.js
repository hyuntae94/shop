import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";


export default function Detail(props){
    
    let history = useHistory();
    // let { id } = useParams();

    let 박스 = styled.div`
        padding : 20px;
    `;
    let 제목 = styled.h4`
        font-size : 25px;
        color : ${ props => props.color }
    `;

    return (
        <div className="container">
            <div className="my-alert">
                <p>재고가 얼마 남지 않았습니다</p>
            </div>
            <div className="row">
            <div style={ {marginTop:"20px"}} className="col-md-6">
                <img src={props.item.src} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{props.item.title}</h4>
                <p>{props.item.content}</p>
                <p>₩ {props.item.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                <button style={{marginLeft:"5px"}} onClick = { () => {history.goBack()} }
                className="btn btn-danger">뒤로가기</button> 
            </div>
            </div>
        </div>
    )
}