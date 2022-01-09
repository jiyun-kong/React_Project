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
