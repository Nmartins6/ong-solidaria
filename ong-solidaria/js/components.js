let toastTimeout;

export function initComponents() {
  initMenu();
  initDropdown();
  initToast();
}

function initMenu() {
  const button = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (!button || !nav) {
    return;
  }

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");

    button.setAttribute(
      "aria-expanded",
      String(open)
    );
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("[data-route]")) {
      nav.classList.remove("is-open");

      button.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  });
}

function initDropdown() {
  const dropdown = document.querySelector(
    "#participar-dropdown"
  );

  const button = document.querySelector(
    "#participar-toggle"
  );

  if (!dropdown || !button) {
    return;
  }

  button.addEventListener("click", () => {
    const open =
      dropdown.classList.toggle("is-open");

    button.setAttribute(
      "aria-expanded",
      String(open)
    );
  });
}

function initToast() {
  const closeButton =
    document.querySelector("#toast-close");

  if (!closeButton) {
    return;
  }

  closeButton.addEventListener(
    "click",
    hideToast
  );
}

export function showToast(
  message,
  type = "success"
) {
  const toast =
    document.querySelector("#toast");

  const title =
    document.querySelector("#toast-title");

  const messageElement =
    document.querySelector("#toast-message");

  const icon =
    document.querySelector("#toast-icon");

  if (
    !toast ||
    !title ||
    !messageElement ||
    !icon
  ) {
    console.error(
      "Elementos do toast não encontrados."
    );

    return;
  }

  clearTimeout(toastTimeout);

  toast.classList.remove(
    "toast-success",
    "toast-error",
    "toast-info"
  );

  const options = {
    success: {
      title: "Sucesso",
      icon: "✓"
    },

    error: {
      title: "Erro",
      icon: "!"
    },

    info: {
      title: "Informação",
      icon: "i"
    }
  };

  const config =
    options[type] ?? options.info;

  toast.classList.add(
    `toast-${type}`,
    "show"
  );

  title.textContent =
    config.title;

  icon.textContent =
    config.icon;

  messageElement.textContent =
    message;

  toastTimeout = setTimeout(
    hideToast,
    5000
  );
}

export function hideToast() {
  const toast =
    document.querySelector("#toast");

  if (!toast) {
    return;
  }

  toast.classList.remove("show");
}

export function confirmAction({
  title = "Confirmar ação",
  message = "Deseja continuar?",
  confirmText = "Confirmar"
} = {}) {
  const modal =
    document.querySelector("#confirm-modal");

  const titleElement =
    document.querySelector("#modal-title");

  const messageElement =
    document.querySelector("#modal-message");

  const confirmButton =
    document.querySelector("#modal-confirm");

  const cancelButton =
    document.querySelector("#modal-cancel");

  if (
    !modal ||
    !titleElement ||
    !messageElement ||
    !confirmButton ||
    !cancelButton
  ) {
    console.error(
      "Elementos do modal não encontrados."
    );

    return Promise.resolve(false);
  }

  titleElement.textContent =
    title;

  messageElement.textContent =
    message;

  confirmButton.textContent =
    confirmText;

  modal.hidden = false;

  document.body.classList.add(
    "modal-open"
  );

  confirmButton.focus();

  return new Promise((resolve) => {
    function finish(result) {
      modal.hidden = true;

      document.body.classList.remove(
        "modal-open"
      );

      confirmButton.removeEventListener(
        "click",
        onConfirm
      );

      cancelButton.removeEventListener(
        "click",
        onCancel
      );

      modal.removeEventListener(
        "click",
        onOverlay
      );

      document.removeEventListener(
        "keydown",
        onEscape
      );

      resolve(result);
    }

    function onConfirm() {
      finish(true);
    }

    function onCancel() {
      finish(false);
    }

    function onOverlay(event) {
      if (event.target === modal) {
        finish(false);
      }
    }

    function onEscape(event) {
      if (event.key === "Escape") {
        finish(false);
      }
    }

    confirmButton.addEventListener(
      "click",
      onConfirm
    );

    cancelButton.addEventListener(
      "click",
      onCancel
    );

    modal.addEventListener(
      "click",
      onOverlay
    );

    document.addEventListener(
      "keydown",
      onEscape
    );
  });
}