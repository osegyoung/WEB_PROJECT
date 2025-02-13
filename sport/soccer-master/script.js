document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();


  const username = document.getElementById("username").value; // 아이디 입력 필드의 값
  const password = document.getElementById("password").value; // 비밀번호 입력 필드의 값

  let members = JSON.parse(localStorage.getItem('memberD')) || [];

  // 입력된 아이디와 비밀번호로 memberD 배열에서 사용자 확인
  const user = members.find(user => user.id === username && user.pw == password); // 비밀번호는 숫자이므로 == 로 비교

  if (user) {
    alert("로그인 성공!");
    window.location.href = "main1.html"; // 로그인 성공 후 index.html로 리다이렉트
  } else {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
  }
});