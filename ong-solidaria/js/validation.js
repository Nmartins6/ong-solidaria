function cleanCpf(cpf) {
  return cpf.replace(/\D/g, "");
}


function cpfIsValid(cpf) {
  const value = cleanCpf(cpf);

  if (value.length !== 11) {
    return false;
  }

  if (
    /^(\d)\1{10}$/.test(value)
  ) {
    return false;
  }

  let sum = 0;

  for (
    let index = 0;
    index < 9;
    index++
  ) {
    sum +=
      Number(value[index]) *
      (10 - index);
  }

  let firstDigit =
    (sum * 10) % 11;

  if (firstDigit === 10) {
    firstDigit = 0;
  }

  if (
    firstDigit !==
    Number(value[9])
  ) {
    return false;
  }


  sum = 0;

  for (
    let index = 0;
    index < 10;
    index++
  ) {
    sum +=
      Number(value[index]) *
      (11 - index);
  }

  let secondDigit =
    (sum * 10) % 11;

  if (secondDigit === 10) {
    secondDigit = 0;
  }

  return (
    secondDigit ===
    Number(value[10])
  );
}


function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email);
}


function phoneIsValid(phone) {
  return /^\(\d{2}\) \d{5}-\d{4}$/
    .test(phone);
}


function cepIsValid(cep) {
  return /^\d{5}-\d{3}$/
    .test(cep);
}


function birthDateIsValid(value) {
  if (!value) {
    return false;
  }

  const date = new Date(
    `${value}T00:00:00`
  );

  const today = new Date();

  return (
    !Number.isNaN(date.getTime()) &&
    date <= today
  );
}


function getErrorElement(field) {
  return document.querySelector(
    `#${field.id}-error`
  );
}


function showError(
  field,
  message
) {
  field.classList.remove(
    "is-valid"
  );

  field.classList.add(
    "is-invalid"
  );

  field.setAttribute(
    "aria-invalid",
    "true"
  );

  const error =
    getErrorElement(field);

  if (error) {
    error.textContent = message;
  }
}


function showSuccess(field) {
  field.classList.remove(
    "is-invalid"
  );

  field.classList.add(
    "is-valid"
  );

  field.setAttribute(
    "aria-invalid",
    "false"
  );

  const error =
    getErrorElement(field);

  if (error) {
    error.textContent = "";
  }
}


export function validateField(field) {
  const value =
    field.type === "checkbox"
      ? field.checked
      : field.value.trim();


  switch (field.id) {

    case "nome":

      if (
        typeof value !== "string" ||
        value.length < 3
      ) {
        showError(
          field,
          "Informe seu nome completo."
        );

        return false;
      }

      break;


    case "cpf":

      if (!cpfIsValid(value)) {
        showError(
          field,
          "Informe um CPF válido."
        );

        return false;
      }

      break;


    case "nascimento":

      if (
        !birthDateIsValid(value)
      ) {
        showError(
          field,
          "Informe uma data de nascimento válida."
        );

        return false;
      }

      break;


    case "email":

      if (!emailIsValid(value)) {
        showError(
          field,
          "Informe um e-mail válido."
        );

        return false;
      }

      break;


    case "telefone":

      if (!phoneIsValid(value)) {
        showError(
          field,
          "Use o formato (00) 00000-0000."
        );

        return false;
      }

      break;


    case "cep":

      if (!cepIsValid(value)) {
        showError(
          field,
          "Use o formato 00000-000."
        );

        return false;
      }

      break;


    case "endereco":
    case "cidade":

      if (
        typeof value !== "string" ||
        value.length < 2
      ) {
        showError(
          field,
          "Este campo é obrigatório."
        );

        return false;
      }

      break;


    case "estado":
    case "area":

      if (!value) {
        showError(
          field,
          "Selecione uma opção."
        );

        return false;
      }

      break;


    case "termos":

      if (!field.checked) {
        showError(
          field,
          "Você precisa aceitar os termos."
        );

        return false;
      }

      break;
  }


  showSuccess(field);

  return true;
}


export function validateForm(form) {
  const fields =
    form.querySelectorAll(
      "input[required], select[required]"
    );

  let valid = true;
  let firstInvalid = null;


  fields.forEach((field) => {
    const fieldValid =
      validateField(field);

    if (!fieldValid) {
      valid = false;

      if (!firstInvalid) {
        firstInvalid = field;
      }
    }
  });


  if (firstInvalid) {
    firstInvalid.focus();
  }


  return valid;
}


export function initLiveValidation(
  form
) {
  const fields =
    form.querySelectorAll(
      "input, select, textarea"
    );


  fields.forEach((field) => {

    const eventName =
      field.type === "checkbox" ||
      field.tagName === "SELECT"
        ? "change"
        : "input";


    field.addEventListener(
      eventName,
      () => {
        if (
          field.required ||
          field.value
        ) {
          validateField(field);
        }
      }
    );


    field.addEventListener(
      "blur",
      () => {
        if (field.required) {
          validateField(field);
        }
      }
    );

  });
}