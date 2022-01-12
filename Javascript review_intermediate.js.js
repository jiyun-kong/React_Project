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
