//typescript는 javascript의 변수와 함수에 타입을 설정
console.log("안녕");

//변수를 지정 할 때 타입을 지정하여 원하는 자료형만 넣을 수 있다
let word: string = "안녕";
word = "반갑습니다";
//word=1;
/*다른 자료형은 들어 갈 수 없다.(
    "message": "'number' 형식은 'string' 형식에 할당할 수 없습니다.",
) */
let num: number = 1;
let num1: number = num; //동일한 자료형은 할당가능

let isTrue: boolean = true;
isTrue = !isTrue; // 동일한 자료형이므로 가능

let stringArray: string[] = ["1", "2", "3"];
/*
let array:string[]=["1","2",3];
와 같이 : 다음에 타입을 지정했는데 다른 타입을 넣으면 위의 같은 에러가 나온다.
 */
console.log(stringArray.toString);
