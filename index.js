//index.js
let name = 'Hongkildong';
localStorage.setItem('name', 'Hongkildong'); // 문자열로만 값을 담아야함.
console.log(localStorage.getItem('name'));

//json문자열 데이터를 주고 받을 때 많이 사용
let json = `{
  "name": "Hongkildong",
  "age": 20
}`
//문자열 -> 객체
let obj = JSON.parse(json);
console.log(json, obj);
// obj.name, obj.age

localStorage.setItem('friend', json);
let info = localStorage.getItem('friend');
console.log(JSON.parse(info)['name']); // 문자열 -> 객체.

localStorage.setItem('friend2', obj);
info = localStorage.getItem('friend2'); // 정보를 읽어올때는 getIem
console.log(info.name);

//객체 -> 문자열.
obj = {
  name: '홍길동',
  friends: [{ // 배열
    name: '김민수',
    pheon: '010-1111'
  }, {
    name: '박현수',
    phone: '010-2222'
  }]
}
json = JSON.stringify(obj); // 객체 -> 문자열.
console.log(json);
localStorage.setItem('myfriend',json);