import IMask from "imask";

function onlyDigits(value) {
  return value.replace(/\D/g, "");
}

function formatCpf(value) {
  let number = onlyDigits(value).slice(0, 11);

  number = number.replace(
    /(\d{3})(\d)/,
    "$1.$2"
  );

  number = number.replace(
    /(\d{3})(\d)/,
    "$1.$2"
  );

  number = number.replace(
    /(\d{3})(\d{1,2})$/,
    "$1-$2"
  );

  return number;
}

function formatPhone(value) {
  let number = onlyDigits(value).slice(0, 11);

  number = number.replace(
    /^(\d{2})(\d)/,
    "($1) $2"
  );

  number = number.replace(
    /(\d{5})(\d{1,4})$/,
    "$1-$2"
  );

  return number;
}

function formatCep(value) {
  let number = onlyDigits(value).slice(0, 8);

  number = number.replace(
    /(\d{5})(\d)/,
    "$1-$2"
  );

  return number;
}

function applyFallbackMask(
  element,
  formatter
) {
  if (!element) {
    return;
  }

  element.addEventListener(
    "input",
    () => {
      element.value =
        formatter(element.value);
    }
  );
}

export function initMasks() {
  const cpf =
    document.querySelector("#cpf");

  const telefone =
    document.querySelector("#telefone");

  const cep =
    document.querySelector("#cep");

  if (!cpf || !telefone || !cep) {
    return;
  }

  IMask(cpf, {
    mask: "000.000.000-00"
  });

  IMask(telefone, {
    mask: "(00) 00000-0000"
  });

  IMask(cep, {
    mask: "00000-000"
  });

  /*
   * Caso a CDN esteja indisponível,
   * usamos máscaras em JavaScript puro.
   */
  console.warn(
    "IMask não carregou. Usando máscaras locais."
  );

  applyFallbackMask(
    cpf,
    formatCpf
  );

  applyFallbackMask(
    telefone,
    formatPhone
  );

  applyFallbackMask(
    cep,
    formatCep
  );
}