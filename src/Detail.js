import React, {useEffect, useState}    from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";


export default function Detail(props){


    let [alert, alert변경] = useState(true);
    let [입력내용, 입력내용변경] = useState("");

  useEffect( () =>{ 
      let 타이머 = setTimeout( () => {
        alert변경(false)   
        }, 2000);

    return () => clearTimeout(타이머) //혹시모를 에러가 생길수 있으니 타이머 제거해주는게 좋음.
    }, []); // [alert] => alert가 변경될때만 실행 , [] => 처음 렌더링 딱 한번만 실행

    let history = useHistory();
    // let { id } = useParams();

    return (
        

        <div className="container">
            {
                alert === true
                ?   (<div className="my-alert">
                        <p>재고가 얼마 남지 않았습니다</p>
                    </div>)
                : null
            }
            <input onChange={ (e) => 입력내용변경(e.target.value)}/>
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