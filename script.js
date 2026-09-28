document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "none" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "64px";
    nav.style.right = "5%";
    nav.style.flexDirection = "column";
    nav.style.background = "white";
    nav.style.padding = "18px";
    nav.style.border = "1px solid #e4eaf2";
    nav.style.borderRadius = "12px";
    nav.style.boxShadow = "0 12px 30px rgba(20,33,61,.12)";
  }
});
