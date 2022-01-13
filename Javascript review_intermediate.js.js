// 1. 변수
// var : 함수 스코프 (함수 내에서만 효력을 가짐)
// let, const : 블록 스코프 (블록 내에서만 효력을 가짐)

const age = 30;

if (age > 10) {
  var txt = '성인';
  let txtTwo = 'Hello';  // let은 블록 스코프여서 if 블록 바깥에서의 효력 없음
}

console.log(txt);   // 성인
//console.log(txtTwo);  // undefined


function add(num1, num2) {
  var result = num1 + num2;
}
add(2, 3);
//console.log(result)   // undefined



// 2. 생성자 함수
function User(name, age) {
//this = {}
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(`My name is ${this.name}`);
  }
  
// return this;
}

let user1 = new User('Mike', 20);
let user2 = new User('Jenet', 30);

console.log(user1);
user2.sayName();


function Item(title, price) {
  this.title = title;
  this.price = price;
  
  this.showPrice = function () {
    console.log(`${this.title}의 가격은 ${this.price}입니다.`)
  }
}

apple = new Item('apple', 1000);
cabbage = new Item('cabbage', 700);

apple.showPrice();
cabbage.showPrice();



// 3. Object - methods / computed property
// computed property (계산된 프로퍼티)
let a = 'age';

const user = {
  name : 'Mike',
  [a] : 30,     // age : 30
}

const simple = {
  [1 + 4] : 5,
  ['안녕' + '하세요'] : "Hello"
}

console.log(simple)

// 유용한 객체 메서드
// (1) Object.assign() : 객체 복제
const cloneUser = user;   // user은 객체에 관한 데이터 값이 들어있는게 아니라 메모리 주소를 담고 있음. 객체의 복사값이 들어가는 것이 아니라, 객체의 참조값이 들어가는 것.

cloneUser.name = 'Jenet';
console.log(user.name);   // 아예 그 값을 바꿔버림. 

// 해결
const newUser = Object.assign({}, user);  // {} 빈 객체 : 초기값
const realNewUser = Object.assign({gender : 'Male'}, user);
console.log(realNewUser);

// 여러 객체를 합칠 수도 있음
const info1 = {
  height : "180cm",
}
const info2 = {
  weight : "78kg",
}

const mergedUser = Object.assign(user, info1, info2);
console.log(mergedUser)


// (2) Object.keys() : 키 배열 반환
keyArray = Object.keys(user);
console.log(keyArray);

// (3) Object.values() : 값 배열 반환
valArray = Object.values(user);
console.log(valArray);

// (4) Object.entries() : 키/값 배열 반환
entArray = Object.entries(user);
console.log(entArray);

// (5) Object.fromEntries() : 키/값 배열을 객체로
const arr = 
      [
        ["name", "Mike"],
        ["age", 30],
        ["gender", "male"],
      ];

arrUser = Object.fromEntries(arr);
console.log(arrUser)

// 어떤 값이 key가 될 지 모를 때 사용하면 좋다.
function makeObj(key, val) {
  return {
    [key] : val,
  };
}

const obj = makeObj('성별', 'male');
console.log(obj);



// 4. symbol (심볼)
// property key : 문자형
const objTwo = {
  1 : '1입니다.',
  false : '거짓입니다.',
}

console.log(Object.keys(objTwo));  // ["1", "false"]
console.log(objTwo['1']);             // "1입니다."
console.log(objTwo['false']);         // "거짓입니다."

// Symbol : 유일한 식별자
const s1 = Symbol();        // new를 붙이지 않는다
const s2 = Symbol();

console.log(s1);            // Symbol()
console.log(s2);            // Symbol()
console.log(s1 == s2);      // false


// Symbol : 유일성 보장
const id = Symbol('id');
const id2 = Symbol('id');
console.log(id == id2);
console.log(id === id2);

// property key : 심볼형
const id3 = Symbol('id');   // id는 심볼키
const userMe = {
  name : '김철수',
  age : 30,
  [id3] : 'myId',
}

console.log(userMe);        // { "name": "김철수", "age": 30 }
console.log(userMe[id3]);   // "myId"
console.log(Object.keys(userMe));   // ["name", "age"]
console.log(Object.values(userMe)); // ["김철수", 30]

// 심볼은 특정 객체에 원본 객체를 건드리지 않는 선에서 값을 추가하고 싶을때 유용하게 사용가능하다. (유일성을 보장받고, 일반적인 순회 출력 옵션에서 출력이 되지 않기 때문)


// Symbol.for() : 전역 심볼
// 하나의 심볼만 보장받을 수 있다.
// 없으면 만들고, 있으면 가져오기 때문이다.
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유한다.

const idOne = Symbol.for('id');
const idTwo = Symbol.for('id');

console.log(idOne === idTwo);     // true
console.log(Symbol.keyFor(idOne));  // Symbol을 생성할 때 만들었던 이름 알려줌 : id


// 숨겨진 Symbol key 보는 법
console.log(Object.getOwnPropertySymbols(userMe));    // id
Reflect.ownKeys(userMe);


// Symbol이 헷갈려서 해보는 정리
// 다른 개발자가 만들어 놓은 객체
const otherUser = {
  name : 'Mike',
  age : 40,
};

// 내가 작업
//otherUser.showName = function() {};   // "His showName is undefined."
const showName = Symbol('show name');
otherUser[showName] = function () {
  console.log(this.name);
};

otherUser[showName]();  

// 사용자가 접속하면 보는 메세지
for (let key in otherUser) {
  console.log(`His ${key} is ${otherUser[key]}.`);
}
