// 1. 아이디 입력창 정보 가져오기
let elInputUsername = document.querySelector('#username'); // input#username
// 2. 성공 메시지 정보 가져오기
let elSuccessMessage = document.querySelector('.success-message'); // div.success-message.hide
// 3. 실패 메시지 정보 가져오기 (글자수 제한 4~12글자)
let elFailureMessage = document.querySelector('.failure-message'); // div.failure-message.hide
// 4. 실패 메시지2 정보 가져오기 (영어 또는 숫자)
let elFailureMessageTwo = document.querySelector('.failure-message2'); // div.failure-message2.hide

// 1. 비밀번호 입력창 정보 가져오기
let elInputPassword = document.querySelector('#password'); // input#password
// 2. 비밀번호 확인 입력창 정보 가져오기
let elInputPasswordRetype = document.querySelector('#password-retype'); // input#password-retype
// 3. 실패 메시지 정보 가져오기 (비밀번호 불일치)
let elMismatchMessage = document.querySelector('.mismatch-message'); // div.mismatch-message.hide
// 4. 실패 메시지 정보 가져오기 (8글자 이상, 영문, 숫자, 특수문자 미사용)
let elStrongPasswordMessage = document.querySelector('.strongPassword-message'); // div.strongPassword-message.hide

// 아이디 : 글자 수 제한 (4글자 이상. 12글자 이하)
function idLength(value) {
  return value.length >= 4 && value.length <= 12
}
// 아이디: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
}

//비밀번호 : 8글자 이상. 영문. 숫자, 특수문자 사용
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

//비밀번호 확인 : 비밀번호와 비밀번호 확인 일치
function isMatch(password1, password2) {
  return password1 === password2;
}

// 아이디 입력값 검증
elInputUsername.onkeyup = function () {
  if (elInputUsername.value.length !== 0) {
    if (onlyNumberAndEnglish(elInputUsername.value) === false) {
      elSuccessMessage.classList.add('hide');
      elFailureMessage.classList.add('hide');
      elFailureMessageTwo.classList.remove('hide');
    } else if (idLength(elInputUsername.value) === false) {
      elSuccessMessage.classList.add('hide');
      elFailureMessage.classList.remove('hide');
      elFailureMessageTwo.classList.add('hide');
    } else {
      elSuccessMessage.classList.remove('hide');
      elFailureMessage.classList.add('hide');
      elFailureMessageTwo.classList.add('hide');
    }
  } else {
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.add('hide');
    elFailureMessageTwo.classList.add('hide');
  }
}

// 비밀번호 유효성 검사
elInputPassword.onkeyup = function () {
  if (elInputPassword.value.length !== 0) {
    if (strongPassword(elInputPassword.value)) {
      elStrongPasswordMessage.classList.add('hide');
    } else {
      elStrongPasswordMessage.classList.remove('hide');
    }
  } else {
    elStrongPasswordMessage.classList.add('hide');
  }
};

// 비밀번호 확인
elInputPasswordRetype.onkeyup = function () {
  if (elInputPasswordRetype.value.length !== 0) {
    if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
      elMismatchMessage.classList.add('hide');
    } else {
      elMismatchMessage.classList.remove('hide');
    }
  } else {
    elMismatchMessage.classList.add('hide');
  }
};

// 회원가입 버튼 클릭 시
document.querySelector('#signup-button').addEventListener('click', function (e) {
   e.preventDefault(); // 폼 제출을 막음

  // 입력값 가져오기
  let username = document.querySelector('#username').value;
  let password = document.querySelector('#password').value;
  let passwordRetype = document.querySelector('#password-retype').value;

  // 입력값 유효성 체크
  if (
    idLength(username) && 
    onlyNumberAndEnglish(username) && 
    strongPassword(password) && 
    isMatch(password, passwordRetype)
  ) {
    // 회원가입 성공
    let newUser = {
      id: username,
      pw: password
    };

    // 이전에 저장된 사용자 목록 가져오기
    let members = JSON.parse(localStorage.getItem('memberD')) || [];

    // 새로운 사용자 추가
    members.push(newUser);

    // 새 사용자 정보 로컬 스토리지에 저장
    localStorage.setItem('memberD', JSON.stringify(members));

    // 회원가입 성공 메시지
    alert("회원가입 성공!");

    // 로그인 페이지로 리디렉션
    window.location.href = "login.html"; // 로그인 페이지로 이동
  } else {
    alert("회원가입에 실패했습니다. 다시 시도해주세요.");
  }
});
//추가기능만 만들어주면 됩니다.
