let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btn = document.querySelector(".close-modal");
let btnOpenModal = document.querySelectorAll(".show-modal");
let open = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
let close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (i = 0; i < btnOpenModal.length; i++) {
  let s = i;
  document.querySelector(".head").textContent = `I'm Modal Window  ${s + 1}`;

  btnOpenModal[i].addEventListener("click", open);
  btn.addEventListener("click", close);
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      close();
    }
  });
}
