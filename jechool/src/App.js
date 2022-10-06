import React, { useState, useRef } from 'react';
import './App.css';

function App({ learn, onCreate }) {
  // const [inputs, setInputs] = useState({
  //   learn: '',
  // });
  // const { learn } = inputs;
  // const onChange = e => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value
  //   });
  // };
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     learn: '리액트를 배웁시다',
  //   },
  // ]);

  // const nextId = useRef(2);
  // const onCreate = () => {
  //   const user = {
  //     id: nextId.current,
  //     learn,
  //   };
  //   setUsers(users.concat(user));

  //   setInputs({
  //     learn: '',
  //   });
  //   nextId.current += 1;
  // };
  
  return (
    <>
      <div className="input-area">
      <input
        name="learn"
        placeholder="자바스크립트를 배워봅시다"
        value={learn}
      />
      <button onClick={onCreate}>추가하기</button>
      </div>
      <div className="text-area">
      <b>Todo List</b>
      </div>
      <div className="box-area">
        여기가 박스 있는 영역
        인데 추가하기 누르면 박스 생기는거 구현 못했고 주석처리 했습니다
      </div>
    </>
  );
}

export default App;
