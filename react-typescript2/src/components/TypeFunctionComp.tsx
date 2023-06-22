import React, { useEffect, useState } from 'react'

interface CountProps{
    startNumber:number;
    name?:string;
    check?:boolean
}
export default function TypeFunctionComp(props:CountProps) {
    //안에 있는 속성을 알고 있기 때문에
    //ctrl+space를 이용해서 이름을 찾을 수 있다
    const {startNumber,name}=props;
    //현재 넣어준 값으로 타입이 고정되서 사용
    const [text,setText]=useState("텍스트 작성");
    //만약 count에 들어갈 타입이 두개이상이라면 <> 안에 직접 적용
    const [count,setCount]=useState<number|undefined>(5);
    const [arr,setArr]=useState<Array<number>>([1,2,3]);
    useEffect(()=>{},[])
    
    //이벤트 객체를 사용하는 메서드
    //이벤트 객체의 타입을 동일하게 가져와서 사용
    const InputChnage=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setText(e.target.value)
    }
  return (
    <div>
        <h3>TypeFunctionComp</h3>
        <p>{props.startNumber}</p>
        <p>{props.name}</p>
        <p>{count}</p>
        <p>{text}</p>
        {/* props으로 cehck를 boolean 값으로 받아오기 */}
        <p>{props.check?"확인":"미확인"}</p>
        {/*useState로 [1,2,3]을 만들어서 map으로 출력하기 */}
        {arr.map((num)=><li>{num}</li>)}
        <h3>글자확인:{text}</h3>
        <input type="text"
        onChange={(e)=>setText(e.target.value)}/>
    </div>
  )
}
