import React from 'react'
//rfc->함수형 컴포넌트
//props나 state를 쓰지 않고 화면만 구성하는
//컴포넌트는 자료형을 적지 않아도 된다
//*함수형일 경우는 hook를 쓰지 않는 경우
export default function NoProps() {
  return (
    <div>
        <h3>NoProps</h3>
        <p>props,state,hook를 사용하지 않는 컴포넌트</p>
    </div>
  )
}
