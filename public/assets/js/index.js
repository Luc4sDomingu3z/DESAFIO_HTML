const navFixed = document.getElementById("fixed-nav");
const nav = document.querySelector(".top-header__nav");
function toggleNav(key = true) {
  if (navFixed === null) {
    console.log("Elemento de nav não encontrado.");
    return;
  }

  if (typeof key !== "boolean") return;

  switch (key) {
    case true:
      // Abrir menu mobile
      if (navFixed.classList.contains("closed-menu"))
        navFixed.classList.remove("closed-menu");
      navFixed.classList.add("opened-menu");
      document.body.style.overflowY='hidden'
      break;
    case false:
      if (navFixed.classList.contains("opened-menu"))
        navFixed.classList.remove("opened-menu");
      navFixed.classList.add("closed-menu");
      document.body.style.overflowY='initial'
      break;
  }
}

(() => {
  const copyrightElement = document.getElementById("copyright");
  if (copyrightElement === null) return;
  copyrightElement.innerHTML =
    `<p style="text-align:center; width: 100%;">&copy; 2025 - ` +
    new Date().getFullYear() +
    " www.fordenter.com.br - All Rights Reserved.</p>";
})();
