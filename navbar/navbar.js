// 뒤로가기 함수
function goBack(event) {
    event.preventDefault();
    window.history.back();  // 이전 페이지로 이동
}

// navbar.html을 가져와서 삽입
function loadNavbar() {
    fetch("../navbar/navbar.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("navbar-container").innerHTML = html;
    })
    .catch(error => console.error("Navbar 불러오기 실패:", error));
}

// 페이지가 로드될 때 네비게이션 바를 로드하도록 호출
window.addEventListener("load", loadNavbar);
