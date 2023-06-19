var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
printWord("abc");
function restnumber(a, b) {
    return a + b;
}
console.log(restnumber(1));
//인터페이스와 객체
//객체
var person = {
    name: "홍길동",
    age: 30,
    address: "부산",
};
//인터페이스로 만든 객체의 속성으로 작성한 객체
//위의 객체처럼 address를 넣고 싶어도 인터페이스에는 없기 때문에 작성 할 수 없다
var myPerson = {
    name: "춘향",
    age: 40,
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
    name: "John",
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
    age: 15,
};
console.log(blue);
var numArray = [1, 2, 3, 4];
//객체의 배열을 만들 때, 인터페이스를 사용해서 만들 수 있다
var objectArray = [
    { name: "홍길동", age: 15 },
    { name: "성춘향", age: 20 },
];
console.log(objectArray.map(function (o) { return o; }));
// javascript에서 클래스 : 미리 속성과 메서드를 지정하여 객체를 만들 수 있는 형태
var MyClass = /** @class */ (function () {
    //constructor를 통해서 객체를 생성 할 때 속성의 값 지정
    function MyClass(name) {
        var _this = this;
        //속성의 값
        this.name = "";
        this.money = 0;
        //함수형태로 메서드를 만들어서 사용
        this.setMoney = function (money) {
            _this.money = money;
        };
        this.name = name;
    }
    return MyClass;
}());
//typescript으로 작성하는 클래스
//accessor : 접근 할 수 없는 속성(private)에 get과 set을 이용하여 접근
//get과 set은 .속성이름으로 접근 할 수 있고 이름은 겹치지않게 작성
var MyTypeClass = /** @class */ (function () {
    function MyTypeClass() {
        //속성은 동일하게
        this.name = "";
        this.money = 0;
    }
    Object.defineProperty(MyTypeClass.prototype, "getname", {
        //set과 get을 통해 접근
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyTypeClass.prototype, "setname", {
        set: function (newValue) {
            this.name = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return MyTypeClass;
}());
var mytypeclass = new MyTypeClass();
mytypeclass.money = 1000;
mytypeclass.setname = "green";
console.log(mytypeclass);
console.log(mytypeclass.getname);
//추상 클래스
//클래스중에서도 대부분 메서드값이 비어 있는 클래스
//abstract : 값이 비어있는 메서드 앞에 붙여준다
var Developer2 = /** @class */ (function () {
    function Developer2() {
    }
    //추상메서드가 아닌 일반메서드는 {} 안에 실행값을 적어준다
    Developer2.prototype.drink = function () {
        console.log("drink");
    };
    return Developer2;
}());
//인터페이스나 추상클래스를 상속받을 때
//채워야할 메서드를 quick fix를 통해 채워서 쓸 수 있다
var FrontEndDeveloper = /** @class */ (function (_super) {
    __extends(FrontEndDeveloper, _super);
    function FrontEndDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrontEndDeveloper.prototype.coding = function () {
        console.log("develope web");
    };
    FrontEndDeveloper.prototype.desing = function () {
        console.log("design web");
    };
    return FrontEndDeveloper;
}(Developer2));
var frontend = new FrontEndDeveloper();
frontend.coding();
frontend.drink();
frontend.desing();
//제너릭
//타입(자료형)을 함수의 파라미터처럼 사용하는 것
function getText(text) {
    return text;
}
console.log(getText('h1'));
console.log(getText(10));
console.log(getText(true));
