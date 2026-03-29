// Html elemanlarına eriş
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("#nav-menu");

// menuBtn'e tıklanınca menü kısmına class ekle
menuBtn.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

// closeBtn'e tıklanınca menu kısmından class kaldır
closeBtn.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});
