// mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
  });
}

// fake submit for demo contact form
function fakeSubmit(e){
  e.preventDefault();
  alert("送信ありがとうございます！（※デモなので実際には送られていません）\n公開時はGoogleフォーム等に差し替えましょう。");
  e.target.reset();
  return false;
}
