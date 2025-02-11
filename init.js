// init.js
// 상품, 회원 변수 초기값 지정.
/*
상품명.
상품가격
평점
이미지
할인율
상품코드
회원아이디
회원비밀번호
회원이름
권한
*/

const productData = [
  {prodCode: 'P001', prodName: '사과', price: 2000, likeIt:4, Image: 'image/apple.image.jpg', sale: 15},
  {prodCode: 'P002', prodName: '바나나', price: 2500, likeIt:3, Image: 'image/banana.jpg', sale: 10},
  {prodCode: 'P003', prodName: '딸기', price: 1500, likeIt:5, Image: 'image/strawberry.jpg', sale: 20}
]
const memberData = [
  {id:'user01',pw:1111, name: '홍길동', responsibility: 'User'},
  {id:'user02',pw:2222, name: '홍이동', responsibility: 'User'},
  {id:'user03',pw:3333, name: '홍삼동', responsibility: 'Admin'}
]
const carData = [
  {id: 'user01', product: 'P001', qty: 3},
  {id: 'user02', product: 'P002', qty: 1},
  {id: 'user03', product: 'P003', qty: 2}
  
]