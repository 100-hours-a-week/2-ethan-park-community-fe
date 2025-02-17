const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const imageInput = document.getElementById("image");
const imagePreview = document.getElementById("imagePreview");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");

// 입력값이 채워졌는지 확인하는 함수
function validateForm() {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
        submitButton.classList.add("active");
        submitButton.disabled = false;
    } else {
        submitButton.classList.remove("active");
        submitButton.disabled = true;
    }
}

// 제목, 내용 입력 감지
titleInput.addEventListener("input", validateForm);
contentInput.addEventListener("input", validateForm);

// 이미지 업로드 미리보기
imageInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = "none";
    }
});

// 작성 버튼 클릭 이벤트
submitButton.addEventListener("click", function() {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "제목, 내용을 모두 작성해주세요.";
    } else {
        alert("게시글이 작성되었습니다!");
        errorMessage.style.display = "none";
        // 서버에 전송하는 로직 추가 가능

        // 🚀 post.html로 리다이렉트
        window.location.href = "posts.html";
    }
});