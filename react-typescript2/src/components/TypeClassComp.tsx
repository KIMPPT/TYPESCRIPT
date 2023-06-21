import React, { Component } from "react";
//rcc -> 클래스형 컴포넌트
//props값을 가져오기 위해 interface를 사용
interface CounterProps {
  startNumber: number;
  name?: string;
  check:boolean;
}
//state값을 가져오기 위해 interface를 사용
interface CounterState{
    number:number;
    text:string;
    arr:Array<number>
}
//클래스형의 제너릭의 자료형(타입) 지정
//자료형을 지정해주면 들어오는 props의 자료형을 알고 메서드를 쓸 수 있다
//이름을 미리 지정을 했기 때문에 props의 이름을 자동완성으로 가져 올 수 있다
export default class TypeClassComp extends Component<CounterProps,CounterState> {
    //Component의 자료형으로 props과 state를 지정
    //state를 사용하기 위해 constructor 생성
    //props의 자료형은 위에서 작성한 interface로 지정
  constructor(props: CounterProps) {
    super(props);
    this.state={
        number:12,
        text:'abc',
        arr:[1,2,3]
    }
  }
  render() {
    return (
      <div>
        <h3>TypeClassComp</h3>
        {/*render에서 화면에 출력되는 방식은 동일 */}
        <p>{this.props.startNumber}</p>
        <p>{this.props.name}</p>
        <p>{this.state.number}</p>
        {/*props의 boolean 값 check를 받아와서 삼항연산자로
        확인/미확인을 출력하세요 */}
        <p>{this.props.check?"확인":"미확인"}</p>
        {/*state에 배열값[1,2,3]을 넣어 li 태그로 출력하세요 */}
        {this.state.arr.map((e)=><li>{e}</li>)}
      </div>
    );
  }
}
