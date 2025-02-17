// 이메일 입력에 대한 유효성 검사
document.getElementById("email").addEventListener("input", function() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailInput = this.value;
    const errorText = document.getElementById("email-error");

    if (!emailPattern.test(emailInput)) {
        errorText.style.display = "block"; // 이메일 오류 메시지 표시
    } else {
        errorText.style.display = "none"; // 이메일 오류 메시지 숨김
    }
});

// 로그인 폼 제출 시 유효성 검사
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작을 막습니다.

    //값
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const nickname = document.getElementById('nickname').value;

    //이메일 관련 에러
    const emailInputError = document.getElementById('emailInput-error');
    const emailEmptyError = document.getElementById('emailEmpty-error');
    const emailDuplicationError = document.getElementById('emailDuplication-error');
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;

    //비밀번호 관련 에러
    const password1EmptyError = document.getElementById('password1Empty-error');
    const password2EmptyError = document.getElementById('password2Empty-error');
    const passwordDiffError = document.getElementById('passwordDiff-error');
    const passwordSizeError = document.getElementById('passwordSize-error');

    //닉네임 관련 에러
    const nicknameEmptyError = document.getElementById('nicknameEmpty-error');
    const nicknameSpaceError = document.getElementById('nicknameSpace-error');
    const nicknameDuplicationError = document.getElementById('nicknameDuplication-error');
    const nicknameSizeError = document.getElementById('nicknameSize-error');

    //로그인 버튼
    const submitButton = document.querySelector('#signupBtn'); 

    //회원가입 유효성
    let isValid = true;

    //띄어쓰기 검사 정규식
    const spacePattern = /\s/;

    // 이메일 형식 검사
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email == "") {
        emailEmptyError.style.display = "block";
        emailEmptyError.textContent = "이메일을 입력하세요.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailInputError.style.display = "block";
        emailInputError.textContent = "올바른 이메일 형식을 입력하세요.";
        isValid = false;
    } else {
        emailEmptyError.style.display = "none";
        emailInputError.style.display = "none";
    }

    // 비밀번호 검사
    if (password1 == "") {
        password1EmptyError.style.display = "block"; // 비밀번호를 입력하지 않으면 오류 메시지 표시
        password1EmptyError.textContent = "비밀번호를 입력하세요."; // 오류 메시지 수정

        isValid = false;
    } else if (!passwordPattern.test(password1) || password1.length < 8 || password1.length > 20) {
        passwordSizeError.style.display = "block";
        passwordSizeError.textContent = "비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.";
        isValid = false;
    } else {
        password1EmptyError.style.display = "none"; 
        passwordSizeError.style.display = "none"; 

        // 로그인 처리 로직을 여기에 추가
    }

    if (password2 == "") {
        password2EmptyError.style.display = "block";
        password2EmptyError.textContent = "비밀번호를 한 번더 입력해주세요.";
        isValid = false;
    } else if (password1 != password2) {
        passwordDiffError.style.display = "block";
        passwordDiffError.textContent = "비밀번호가 일치하지 않습니다."; // 오류 메시지 수정

        isValid = false;

    } else {
        password2EmptyError.style.display = "none"; // 비밀번호 입력이 있으면 오류 메시지 숨김
        passwordDiffError.style.display = "none"; // 비밀번호 입력이 있으면 오류 메시지 숨김
        // 로그인 처리 로직을 여기에 추가
    }

    if (nickname == "") {
        nicknameEmptyError.style.display = "block";
        nicknameEmptyError.textContent = "닉네임을 입력해주세요.";
        isValid = false;
    } else if(spacePattern.test(nickname)) {
        nicknameSpaceError.style.display = "block";
        nicknameSpaceError.textContent = "띄어쓰기를 없애주세요.";
        isValid = false;
    } else if (nickname.length > 10) {
        nicknameSizeError.style.display = "block";
        nicknameSizeError.textContent = "닉네임은 최대 10자 까지 작성 가능합니다.";
        isValid = false;
    } else {
        nicknameSpaceError.style.display = "none";
        nicknameEmptyError.style.display = "none";
        nicknameSizeError.style.display = "none";
    }

    if (isValid) {
        submitButton.style.backgroundColor = "#7F6AEE";
        
        setTimeout(function() {
            window.location.href = "login.html";
        }, 1000);

    }
    else {
        alert("회원가입에 실패했습니다.");
    }

});
// 로그인 화면으로 이동하는 버튼 클릭 이벤트
document.getElementById("loginGoBtn").addEventListener("click", function() {
    window.location.href = "login.html";
});