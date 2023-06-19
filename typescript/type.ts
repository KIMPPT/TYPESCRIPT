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
console.log(stringArray.toString());

console.log("값을 추가하였습니다");

//함수는 매개변수와 함수의 반환값에 자료형을 정의
//return 되는 값이 없을 때는 void로 정의한다
//매개변수의 자료형과 printwWord의 자료형을 정의
function printWord(word) {
  console.log(word);
}
printWord("abc");

function restnumber(a: number, b?: number) {
  return a + b;
}
console.log(restnumber(1));

//인터페이스와 객체
//객체
let person = {
  name: "홍길동",
  age: 30,
  address: "부산",
};
//객체의 인터페이스 - 담길 공간을 미리 만들어준다고 생각하면 된다
interface Person {
  name: string;
  age?: number;
}
//인터페이스로 만든 객체의 속성으로 작성한 객체
//위의 객체처럼 address를 넣고 싶어도 인터페이스에는 없기 때문에 작성 할 수 없다
let myPerson: Person = {
  name: "춘향",
  age: 40,
  //Person에서 작성하지 않은 내용은 객체에 쓸 수 없다
  //address:""
};
console.log(myPerson.name);

//함수안의 매개변수의 객체를 인터페이스로 타입 정함
// 매개변수의 객체의 타입은 함수에서만 쓰는 속성
function printName(person: Person): void {
  console.log(person.name);
  //if문을 사용해서 age값이 있다면 console.log로 출력
  if (person.age) console.log(person.age);
}
printName(person);
//printName()을 사용해서 myPerson 출력
printName(myPerson);

//함수를 작성 할 때 인터페이스로 먼저 알려주고 작성
interface login {
  (username: string, password: string): boolean;
}
//화살표함수,익명함수
//화살표함수나 익명함수의 경우 함수의 이름이 없기 때문에
//매개변수뒤에 적어둠
let loginUser = (id: string, pw: string): boolean => {
  console.log("로그인했습니다");
  return true;
};
//동일한 내용 인터페이스로 작성
let loginUserInter: login;
loginUserInter = function (id, pw) {
  //매개변수의 자료형을 기록했기에 적지 않아도 괜찮다
  console.log(id, ":로그인했습니다");
  //미리 반환값을 기록했기에 반환값을 잘못적지 않았는지 확인가능
  return true;
};
//인터페이스로 함수의 타입을 지정해도
//필요에 따라서 매개변수의 내용이 달라진다면 수정 할 수 있다
//예 : 자료형,매개변수의 개수

//인터페이스의 확장
//위에 작성한 Person을 확장하여 사용
//extends를 통해 확장, Person에 있는 속성을 적어주지 않아도
//Deveploer에 들어가 있다
interface Position extends Developer {
  //상속(확장)한 인터페이스를 다시 확장 할 수 있다
  //한번에 여러개 확장 할 수 있다
  //interface Developer extends Person,Position
  //확장할 때는 이전의 인터페이스에 추가하면
  //작성한 객체에 오류가 생길 수 있으니 가능하면
  //새로운 인터페이스를 만들어서 확장한다
  position: string;
}

interface Developer extends Person {
  skill: string;
}

let jhon: Developer = {
  //Developer내용
  skill: "typescript",
  //Person내용
  name: "John",
};
let green = {} as Developer;
green.name = "green";
green.skill = "javascript";
green.age = 15;
//green.text=""; 와 같이 Develpoer에 없는 인터페이스는 지정 할 수 없다
console.log(jhon, green);

//인터페이스 확장을 위한 연습
//Person을 사용해서, Worker 인터페이스 작성
//Worker 인터페이스는 job 속성을 string(자료형)으로 가진다
interface worker extends Person {
  job: string;
}
//let blue:Worker 선언 및 값 할당하기
let blue: worker = {
  job: "worker",
  name: "Blue",
  age: 15,
};
console.log(blue);

let numArray: number[] = [1, 2, 3, 4];
//객체의 배열을 만들 때, 인터페이스를 사용해서 만들 수 있다
let objectArray: Person[] = [
  { name: "홍길동", age: 15 },
  { name: "성춘향", age: 20 },
];
console.log(objectArray.map((o) => o));

// javascript에서 클래스 : 미리 속성과 메서드를 지정하여 객체를 만들 수 있는 형태
class MyClass {
  //속성의 값
  name = "";
  money = 0;
  //constructor를 통해서 객체를 생성 할 때 속성의 값 지정
  constructor(name: any) {
    this.name = name;
  }
  //함수형태로 메서드를 만들어서 사용
  setMoney = (money: any) => {
    this.money = money;
  };
}
//typescript으로 작성하는 클래스
//accessor : 접근 할 수 없는 속성(private)에 get과 set을 이용하여 접근
//get과 set은 .속성이름으로 접근 할 수 있고 이름은 겹치지않게 작성
class MyTypeClass {
  //속성은 동일하게
  private name: string = "";
  money: number = 0;
  //set과 get을 통해 접근
  get getname(): string {
    return this.name;
  }
  set setname(newValue: string) {
    this.name = newValue;
  }
}
const mytypeclass = new MyTypeClass();
mytypeclass.money = 1000;
mytypeclass.setname = "green";
console.log(mytypeclass);
console.log(mytypeclass.getname)
//추상 클래스
//클래스중에서도 대부분 메서드값이 비어 있는 클래스
//abstract : 값이 비어있는 메서드 앞에 붙여준다
abstract class Developer2 {
  //{}가 없는 메서드 : 실행할 내용을 적지 않음
  //상속받을 클래스에서 내용을 적도록 안내
  abstract coding(): void;
  //추상메서드가 아닌 일반메서드는 {} 안에 실행값을 적어준다
  drink(): void {
    console.log("drink");
  }
}

//인터페이스나 추상클래스를 상속받을 때
//채워야할 메서드를 quick fix를 통해 채워서 쓸 수 있다
class FrontEndDeveloper extends Developer2 {
  coding(): void {
    console.log("develope web");
  }
  desing(): void {
    console.log("design web");
  }
}
const frontend = new FrontEndDeveloper();
frontend.coding();
frontend.drink();
frontend.desing();

//제너릭
//타입(자료형)을 함수의 파라미터처럼 사용하는 것
function getText<T>(text:T):T{
    return text;
}
console.log(getText<string>('h1'))
console.log(getText<number>(10))
console.log(getText<boolean>(true))