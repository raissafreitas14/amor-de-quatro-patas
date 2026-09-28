import { closeModal, confirmModal } from "./ui.js";
import { navigateTo } from "./router.js";

export function bindGlobalEvents() {
  const menu = document.querySelector(".main-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", open);
    menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  document.addEventListener("click", (event) => {
    const routeLink = event.target.closest("[data-route]");
    if (routeLink) {
      event.preventDefault();
      navigateTo(routeLink.dataset.route, routeLink.dataset.scroll);
      menu.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
    if (event.target.closest(".submenu-trigger")) {
      const item = event.target.closest(".has-submenu");
      const open = item.classList.toggle("is-open");
      item.querySelector(".submenu-trigger").setAttribute("aria-expanded", open);
    }
    if (event.target.closest("[data-modal-close]")) closeModal();
    if (event.target.closest("#modal-confirmar")) confirmModal();
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
}
