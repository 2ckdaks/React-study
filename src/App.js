/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집','파이썬 독학'])
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setmodal] = useState(false);
  let [title, setTitle] = useState(0)
  let [입력값, 입력값변경] = useState('')

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={()=> {
        let copy =[...글제목]
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button>

 
        {/* <div className="list">
          <h4>{글제목[0]} <span onClick={ ()=> 따봉변경(따봉+1)}>👍 </span> {따봉} </h4>
          <p>2월 17일 발행</p>
          <button onClick={ ()=> {
            let copy = [...글제목];
            copy[0] = '여자 코트 추천';
            글제목변경(copy)}}>바뀜</button>
        </div>
        <div className="list">
          <h4>{글제목[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4 onClick={ ()=>{ setmodal(!modal)}}>{글제목[2]}</h4>
          <p>2월 17일 발행</p>
        </div> */}
        {
          글제목.map(function(a, i){
            return(
              <div className="list" key={i}>
                <h4 onClick={ ()=>{ setmodal(!modal); setTitle([i])}} >{글제목[i]}<span onClick={ (e)=> {e.stopPropagation();
                  let copy = [...따봉];       // 1. 복사
                  copy[i] = copy[i] + 1;     //2. 뭐를 뭘로 바꿔줄지
                  따봉변경(copy)}}             //3. 변경함수 실행
                  > 👍 </span> {따봉[i]}</h4>
                <p>2월 17일 발행</p>
                <button onClick={()=>{
                  let copy =[...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                }}>삭제</button>
              </div>
            )
          })
        }

        <input onChange={(e)=>입력값변경(e.target.value)}></input><button onClick={ ()=>{
          let copy = [...글제목];
          copy.unshift(입력값)
          글제목변경(copy)}}>글발행</button>

        {
          modal == true ? <Modal color="orange" 글제목변경={글제목변경} 글제목={글제목} title={title}/> : null
        }
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal" style={ {backgroundColor:props.color}}>
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button>글수정</button>
  </div>
  )
}

export default App;
