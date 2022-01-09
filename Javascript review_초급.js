// 1. 변수
// name = "Mike";
// age = 30;

// alert(name)
// console.log(age);

let name = "Mike";
// let name = "google"
// let으로 선언했을 때는 다른 개발자와 같은 변수명을 사용했을때 error가 뜬다
// let은 다른 값으로 바꿀 수 있다.

let grade = "F";
grade = "A+";

// const : 절대 바뀌지 않는 상수
const PI = 3.14;
const SPEED_LIMIT = 50;
const BIRTH_DAY = "2022-01-08";

// JS에서 변수를 선언할 때는 변하지 않는 값에 const, 변할 수 있는 값에 let으로 선언한다.


// 2. 자료형

// 문자열
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = `My name is ${name3}`;
console.log(message)

const message2 = `My age is ${100+1}`;
console.log(message2)

// 숫자형
console.log(1 + 2);
console.log(10 - 2);
console.log(3 * 2);
console.log(6 / 3);
console.log(6 % 4);

const x = 1/0;
console.log(x)    // 출력 : Infinity

const y = name/2;

console.log(y)    // 출력 : NaN (Not a number)

// Boolean
const a = true;
const b = false;
const age = 30;

console.log(name == 'Mike')
console.log(age > 40)

// null과 undefined
let height;
console.log(height);   // 출력 : undefined

let user = null;
console.log(user)      // 출력 : null

// typeof 연산자
console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof undefined);
console.log(typeof null);       // 출력 : object
// 다른 개발자가 작성한 변수의 자료형을 알기 위해서 사용한다.  혹은 API 통신 등을 통해서 받아온 변수를 type에 따라서 다르게 처리해야할 때 사용한다.
// "object" : 객체형 -> null은 사실 객체형이 아니다. 이전 버전의 JS에서의 오류를 굳이 수정하지 않았다고 한다.

// 종합
const m1 = "나는 "
const m2 = " 입니다."
console.log(m1 + name + m2)

console.log(m1 + age + "살" + m2)  // 숫자가 문자형으로 변환되었음을 알 수 있다.

// 3. alert, prompt, confirm
// alert : 알려줌
// prompt : 입력 받음
// confirm : 확인 받음

// 단점
// 1. 스크립트 일시 정지
// 2. 스타일링 불가능

/*
alert("환영합니다, " + name + "님")
const weight = prompt("몸무게를 입력하세요.")
console.log(weight)

alert(`${name}님의 몸무게는 ${weight}kg 입니다.`)
*/

// prompt에서 취소를 누르면 null값이 입력된다.

// prompt에서의 default 값
/*
const reserveDate = prompt("예약일을 입력해주세요.", "2022-01-09")
alert(`예약일은 ${reserveDate}입니다.`)
*/

// confirm
/*
const isAdult = confirm("당신은 성인입니까?")
console.log(isAdult)
확인값 : true, 취소값 : false
*/


// 4. 형변환 - "100" + 200 = ?
// String() : 문자형으로 변환
// Number() : 숫자형으로 변환
// Boolean() : 불린형으로 변환
/*
const mathScore = prompt("수학 점수를 입력하세요.")
const engScore = prompt("영어 점수를 입력하세요.")
const korScore = prompt("국어 점수를 입력하세요.")

const average = (mathScore + engScore + korScore) / 3 
*/

// prompt로 입력받은 값은 무조건 문자열 : 80이 아니라 "80"
// 단, "9080" / 2 = 4540
// "6" / "2" = 3 (자동 형변환)

// 의도하지 않은 에러가 발생할 수 있기 때문에 '명시적 형변환' 해주어야 한다.
// String()
console.log(
String(3),
String(true),
String(false),
String(null),
String(undefined)
)

// Number()
console.log(
Number("1234"),
Number("1234asdf"),   // NaN
Number(true),
Number(false)
)
// Number(null) : 0
// Number(undefined) : NaN
// Number(0) : false
// Number('0') : true
// Number('') : false
// Number(' ') : true

// Boolean()
// false : 숫자 0, 빈 문자열 '', null, undefined, NaN
// true : 이 외
console.log(
Boolean(0),
Boolean(''),
Boolean(null),
Boolean(undefined),
Boolean(NaN)
)


// 5. 연산자 (operator)
let num = 10
num += 5

console.log(num);
console.log(++num);

// 동등 연산자 ==, 일치 연산자 ===
const numA = 1;
const strA = '1';
console.log(numA == strA);      // true
console.log(numA === strA);     // false

// 논리 연산자
if (name == "Tom" || age > 19) {
  console.log("통과");
} else {
  console.log("불통");
}

// 우선순위 : 남자이고, 이름이 Mike이거나 성인이면 통과
const gender = 'F';
const yourAge = 20;
const isAdult = yourAge > 19;

if (gender === 'M' && (name === 'Mike' || isAdult)) {
  console.log("pass")
} else {
  console.log("No pass")
}


// 6. 반복문
// do ~ while
let i = 0
do {
  console.log("반복문 " + i);
  i++;
} while (i < 10)

// break : 멈추고 빠져나옴
// continue : 멈추고 다음 반복으로 진행

for (let i=0; i<10; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i)
  }
}

// switch ~ case문
/*
let fruit = prompt('무슨 과일을 사고 싶나요?')

switch (fruit) {
  case '사과' :
    console.log("100원입니다.");
    break;
  case '바나나' : 
    console.log("200원입니다.");
    break;
  case '키위' :
  case '수박' :
    console.log("500원입니다.")
    break;
  default :
    console.log("메뉴에 없는 과일입니다.")
}
*/


// 7. 함수
function showError() {
  console.log("에러발생");
}
showError();


function sayHello(name) {
  console.log(`Hello, ${name}`);
}
sayHello("Mike");


function sayHelloTwo(name) {
  let msg = "Hello "
  
  if(name) {
    msg += name;
  }
  console.log(msg)
}
sayHelloTwo("Sophy")


// 전역 변수와 지역 변수
// 전역 변수
let msg = "welcome";
console.log(msg)

function sayHelloThree(name) {
  // 지역변수
  let msg = "Hello"
  console.log(msg + ' ' + name)
}
sayHelloThree("Jenet")
console.log(msg)


let thisName = "Mike";
function sayHelloFour(thisName) {   // 매개변수로 받은 값은 복사되어 함수의 지역변수가 된다.
  console.log(thisName)             // 출력 : undefined
}
sayHelloFour();
sayHelloFour('Lucy');


function sayHelloFive(name) {
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`
  console.log(msg)
}
sayHelloFive();
sayHelloFive('Lucy')


function sayHelloSix(name = 'friend') {
  let msg = `Hello, ${name}`
  console.log(msg)
}
sayHelloSix();
sayHelloSix('Lucy')


// 반환 값 존재
function add(num1, num2) {
  return num1 + num2;
}
const result = add(2, 3);
console.log(result)
