import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoProps from './components/NoProps';
import TypeClassComp from './components/TypeClassComp';
import TypeFunctionComp from './components/TypeFunctionComp';
import TypeArrowFuncComp from './components/TypeArrowFuncComp';
import FetchComp from './components/FetchComp';

function App() {
  return (
    <div className="App">
      <NoProps/>
      {/*
      클래스형에서 props을 interface로 지정하면 호출 할 때 도
      자동완성으로 쓸 수 있다
      */}
      <TypeClassComp startNumber={3} name='green' check={true}/>
      <TypeFunctionComp startNumber={1} name='blue' check={true}/>
      <TypeArrowFuncComp startNumber={5}/>
      <hr />
      <FetchComp/>
    </div>
  );
}

export default App;
