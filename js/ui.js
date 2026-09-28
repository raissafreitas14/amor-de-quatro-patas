let confirmAction = null;
let lastFocusedElement = null;

export function showToast(message, type = "success") {
  const region = document.querySelector(".toast-region");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span aria-hidden="true">${type === "success" ? "✓" : "!"}</span><p>${message}</p>`;
  region.append(toast);
  window.setTimeout(() => toast.remove(), 4200);
}

export function openModal({ title, message, onConfirm }) {
  const modal = document.querySelector(".modal");
  lastFocusedElement = document.activeElement;
  document.querySelector("#modal-titulo").textContent = title;
  document.querySelector("#modal-mensagem").textContent = message;
  confirmAction = onConfirm;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("#modal-confirmar").focus();
}

export function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  confirmAction = null;
  lastFocusedElement?.focus();
}

export function confirmModal() {
  const action = confirmAction;
  closeModal();
  action?.();
}
