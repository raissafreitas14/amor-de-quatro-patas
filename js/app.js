import { bindGlobalEvents } from "./events.js";
import { renderRoute } from "./router.js";

function startApp() {
  if (!window.location.hash) window.location.hash = `/${document.body.dataset.initialRoute || "inicio"}`;
  bindGlobalEvents();
  renderRoute();
  window.addEventListener("hashchange", renderRoute);
}

startApp();
