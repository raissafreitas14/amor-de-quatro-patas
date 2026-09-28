import { cadastroTemplate, homeTemplate, projectsTemplate } from "./templates.js";
import { bindFormEvents } from "./forms.js";

const routes = { inicio: homeTemplate, projetos: projectsTemplate, cadastro: cadastroTemplate };

export function currentRoute() {
  const route = window.location.hash.replace("#/", "").split("?")[0];
  return routes[route] ? route : "inicio";
}

export function renderRoute() {
  const route = currentRoute();
  document.querySelector("#app").innerHTML = routes[route]();
  document.querySelectorAll("[data-route]").forEach((link) => link.toggleAttribute("aria-current", link.dataset.route === route));
  bindFormEvents();
  const scrollTarget = new URLSearchParams(window.location.hash.split("?")[1]).get("scroll");
  if (scrollTarget) document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth" });
}

export function navigateTo(route, scrollTarget = "") {
  const suffix = scrollTarget ? `?scroll=${scrollTarget}` : "";
  window.location.hash = `/${route}${suffix}`;
}
