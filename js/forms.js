import { saveVolunteer } from "./storage.js";
import { openModal, showToast } from "./ui.js";

const validators = {
  nome: (value) => value.trim().split(/\s+/).length >= 2 ? "" : "Informe nome e sobrenome.",
  cpf: (value) => isValidCPF(value) ? "" : "Informe um CPF válido.",
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Informe um e-mail válido.",
  telefone: (value) => /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(value) ? "" : "Use o formato (00) 00000-0000.",
  nascimento: (value) => value && new Date(value) < new Date() ? "" : "Informe uma data de nascimento válida.",
  cep: (value) => /^\d{5}-\d{3}$/.test(value) ? "" : "Use o formato 00000-000.",
  endereco: (value) => value.trim().length >= 4 ? "" : "Informe seu endereço.",
  numero: (value) => Number(value) > 0 ? "" : "Informe um número maior que zero.",
  cidade: (value) => value.trim().length >= 2 ? "" : "Informe sua cidade.",
  estado: (value) => value ? "" : "Selecione seu estado.",
  interesse: (value) => value ? "" : "Selecione como deseja colaborar."
};

const formatters = {
  cpf: (value) => value.replace(/\D/g, "").slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2"),
  telefone: (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits ? `(${digits}` : "";
    const area = `(${digits.slice(0, 2)}) `;
    const number = digits.slice(2);
    if (number.length <= 4) return area + number;
    return area + (digits.length <= 10
      ? number.replace(/(\d{4})(\d)/, "$1-$2")
      : number.replace(/(\d{5})(\d)/, "$1-$2"));
  },
  cep: (value) => value.replace(/\D/g, "").slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2")
};

function isValidCPF(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) return false;
  const calculateDigit = (length) => {
    const sum = digits.slice(0, length).split("").reduce((total, digit, index) => total + Number(digit) * (length + 1 - index), 0);
    const remainder = (sum * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };
  return calculateDigit(9) === Number(digits[9]) && calculateDigit(10) === Number(digits[10]);
}

function setFieldState(field, message) {
  const wrapper = field.closest(".field");
  const error = document.querySelector(`#erro-${field.name}`);
  wrapper.classList.toggle("is-invalid", Boolean(message));
  wrapper.classList.toggle("is-valid", !message && Boolean(field.value));
  field.setAttribute("aria-invalid", Boolean(message));
  error.textContent = message;
  return !message;
}

export function validateField(field) {
  return setFieldState(field, validators[field.name]?.(field.value) || "");
}

function validateForm(form) {
  return [...form.elements].filter((field) => field.name in validators).every(validateField);
}

export function bindFormEvents() {
  const form = document.querySelector("#cadastro-form");
  if (!form) return;
  const alert = document.querySelector("[data-form-alert]");
  form.addEventListener("input", (event) => {
    const field = event.target;
    if (formatters[field.name]) field.value = formatters[field.name](field.value);
    if (field.name in validators && field.value) validateField(field);
  });
  form.addEventListener("change", (event) => { if (event.target.name in validators) validateField(event.target); });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = validateForm(form);
    alert.hidden = isValid;
    if (!isValid) { showToast("Verifique os campos destacados.", "error"); form.querySelector(".is-invalid input, .is-invalid select")?.focus(); return; }
    openModal({ title: "Confirmar cadastro", message: "Você deseja enviar seu cadastro para a Amor de Quatro Patas?", onConfirm: () => {
      const data = Object.fromEntries(new FormData(form).entries());
      saveVolunteer(data);
      form.reset();
      form.querySelectorAll(".is-valid").forEach((field) => field.classList.remove("is-valid"));
      showToast("Cadastro realizado com sucesso! Obrigada por ajudar.");
    }});
  });
}
