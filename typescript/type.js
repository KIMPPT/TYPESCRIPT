//typescript는 javascript의 변수와 함수에 타입을 설정
console.log("안녕");
//변수를 지정 할 때 타입을 지정하여 원하는 자료형만 넣을 수 있다
var word = "안녕";
word = "반갑습니다";
//word=1;
/*다른 자료형은 들어 갈 수 없다.(
    "message": "'number' 형식은 'string' 형식에 할당할 수 없습니다.",
) */
var num = 1;
var num1 = num; //동일한 자료형은 할당가능
var isTrue = true;
isTrue = !isTrue; // 동일한 자료형이므로 가능
var stringArray = ["1", "2", "3"];
/*
let array:string[]=["1","2",3];
와 같이 : 다음에 타입을 지정했는데 다른 타입을 넣으면 위의 같은 에러가 나온다.
 */
console.log(stringArray.toString());
console.log("값을 추가하였습니다");
//함수는 매개변수와 함수의 반환값에 자료형을 정의
//return 되는 값이 없을 때는 void로 정의한다
//매개변수의 자료형과 printwWord의 자료형을 정의 
function printWord(word) {
    console.log(word);
}
printWord('abc');
function restnumber(a, b) {
    return a + b;
}
console.log(restnumber(1));
//인터페이스와 객체
//객체
var person = {
    name: "홍길동",
    age: 30,
    address: "부산"
};
//인터페이스로 만든 객체의 속성으로 작성한 객체
//위의 객체처럼 address를 넣고 싶어도 인터페이스에는 없기 때문에 작성 할 수 없다
var myPerson = {
    name: "춘향",
    age: 40
    //Person에서 작성하지 않은 내용은 객체에 쓸 수 없다
    //address:""
};
console.log(myPerson.name);
//함수안의 매개변수의 객체를 인터페이스로 타입 정함
// 매개변수의 객체의 타입은 함수에서만 쓰는 속성 
function printName(person) {
    console.log(person.name);
    //if문을 사용해서 age값이 있다면 console.log로 출력
    if (person.age)
        console.log(person.age);
}
printName(person);
//printName()을 사용해서 myPerson 출력
printName(myPerson);
//화살표함수,익명함수
//화살표함수나 익명함수의 경우 함수의 이름이 없기 때문에
//매개변수뒤에 적어둠
var loginUser = function (id, pw) {
    console.log("로그인했습니다");
    return true;
};
//동일한 내용 인터페이스로 작성
var loginUserInter;
loginUserInter = function (id, pw) {
    //매개변수의 자료형을 기록했기에 적지 않아도 괜찮다
    console.log(id, ":로그인했습니다");
    //미리 반환값을 기록했기에 반환값을 잘못적지 않았는지 확인가능
    return true;
};
var jhon = {
    //Developer내용
    skill: "typescript",
    //Person내용
    name: "John"
};
var green = {};
green.name = "green";
green.skill = "javascript";
green.age = 15;
//green.text=""; 와 같이 Develpoer에 없는 인터페이스는 지정 할 수 없다
console.log(jhon, green);
//let blue:Worker 선언 및 값 할당하기
var blue = {
    job: "worker",
    name: "Blue",
    age: 15
};
console.log(blue);
var numArray = [1, 2, 3, 4];
//객체의 배열을 만들 때, 인터페이스를 사용해서 만들 수 있다
var objectArray = [
    { name: "홍길동", age: 15 },
    { name: "성춘향", age: 20 }
];
console.log(objectArray.map(function (o) { return o; }));
