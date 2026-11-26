export async function loadHeaderFooter() {
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");

  if (header) {
    const headerResponse = await fetch("/partials/header.html");
    header.innerHTML = await headerResponse.text();
    setupMobileMenu();
  }

  if (footer) {
    const footerResponse = await fetch("/partials/footer.html");
    footer.innerHTML = await footerResponse.text();
  }

  const year = document.querySelector("#current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

function setupMobileMenu() {
  const menuButton = document.querySelector("#menu-toggle");
  const navigation = document.querySelector("#main-nav");

  if (!menuButton || !navigation) return;

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
      menuButton.textContent = "✕";
      menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-label", "Open navigation menu");
    }
  });
}