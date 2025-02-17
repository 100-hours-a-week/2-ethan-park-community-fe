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
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작을 막습니다.

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const submitButton = document.querySelector('button'); // 로그인 버튼

    let isValid = true;

    // 이메일 형식 검사
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // 비밀번호 검사
    if (password === "") {
        passwordError.style.display = "block"; // 비밀번호를 입력하지 않으면 오류 메시지 표시
        isValid = false;
    } else {
        passwordError.style.display = "none"; // 비밀번호 입력이 있으면 오류 메시지 숨김
        // 로그인 처리 로직을 여기에 추가
    }

    if (isValid) {
        submitButton.style.backgroundColor = "#7F6AEE";
        
        setTimeout(function() {
            window.location.href = "signup.html";
        }, 3000);

    }
    else {
        alert("이메일 또는 비밀번호를 잘못 입력하셨습니다.");
    }
});
