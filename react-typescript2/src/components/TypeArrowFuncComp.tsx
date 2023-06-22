import React from "react";

interface CounterProps{
    startNumber:number;
}
/*
const TypeArrowFuncComp=(props:CounterProps)=>{
    return <div>
        <h3>{props.startNumber}</h3>
    </div>
}
와 동일
*/
/*
화살표함수의 컴포넌트는 함수형 컴포넌트와 동일하게 매개변수에서
interface 자료형을 설정하여 사용 할 수도 있고
클래스형 컴포넌트처럼 비슷하게 리엑트에서 자공하는 React.FC<Props>을
이용하여 작성 할 수 있다
*/
const TypeArrowFuncComp:React.FC<CounterProps>=(props)=>{
    //useState()는 사용방식이 동일
    return <div>
        <h3>{props.startNumber}</h3>
    </div>
}
export default TypeArrowFuncComp;