document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const memberD = [{
      id: 'user01',
      pw: 1111,
      name: '홍길동',
      responsibility: 'User'
    },
    {
      id: 'user02',
      pw: 2222,
      name: '홍이동',
      responsibility: 'User'
    },
    {
      id: 'user03',
      pw: 3333,
      name: '홍삼동',
      responsibility: 'Admin'
    }
  ];

  const username = document.getElementById("username").value; // 아이디 입력 필드의 값
  const password = document.getElementById("password").value; // 비밀번호 입력 필드의 값

  // 입력된 아이디와 비밀번호로 memberD 배열에서 사용자 확인
  const user = memberD.find(user => user.id === username && user.pw == password); // 비밀번호는 숫자이므로 == 로 비교

  if (user) {
    alert("로그인 성공!");
    window.location.href = "index.html"; // 로그인 성공 후 index.html로 리다이렉트
  } else {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
  }

});

function checkCapsLock(event) {
  console.log('hhh')
  if (event.getModifierState("CapsLock")) {
    document.getElementById("#password").innerText = "Caps Lock이 활성화된 상태입니다."
  } else {
    document.getElementById("password").innerText = ""
  }
}