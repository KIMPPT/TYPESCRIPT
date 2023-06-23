import React, { useEffect, useState } from "react";
//API로 가져올 데이터 형태
interface dateBusan {
  AREA_NM: string;
  MENU_NM: string;
  REST_NM: string;
}

// Fetch를 통해서 외부 API(서버와 연결해서 데이터 가져오는)를 사용하여
// 그 값을 가져와서 state에 저장해서 사용 할 수 있다
export default function FetchComp() {
  const [date, setDate] = useState<dateBusan>();
  const [dataArray, setDataArray] = useState<[dateBusan]>();
  //FetchAPI를 사용 할 때 외부(서버)
  //항상 코드안에서 쓸 때와 속도차이가 나기 때문에 비동기로 가져온다
  const getDate = async () => {
    const promise = await fetch(
      "https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=visqlVyV5VIOGVgNswzp3XoFYPXiaCBh40hdIWnK5AAhTN01GbYZKV4WvQJyEQiu&pageNo=4"
    );
    //await를 이용하여 값 가져오기 - fetch에서 들고올 때 까지 기다렸다가 다시 비동기로 굴리는 방식
    const response = await promise.json();
    console.log(response.body[0]);
    setDate({
      AREA_NM: response.body[0].AREA_NM,
      MENU_NM: response.body[0].MENU_NM,
      REST_NM: response.body[0].REST_NM,
    });
    setDataArray(response.body);
  };
  useEffect(() => {
    getDate();
  }, []);
  return (
    <div>
      <h3>FetchComp</h3>
      <div>
        {date && (
          <div>
            <p>{date.AREA_NM}</p>
            <p>{date.REST_NM}</p>
            <p>{date.MENU_NM}</p>
          </div>
        )}
      </div>
      {
        //현재의 타입이 undefined나 다른이 있을 때
        //?를 통해서 현재의 타입이 배열일때만 실행
        dataArray?.map((d)=>(
            <li>{d.AREA_NM}</li>
        ))

      }
    </div>
  );
}
