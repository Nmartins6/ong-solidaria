document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#confirmation-modal");
  const openModalButton = document.querySelector("#open-modal");
  const closeModalButton = document.querySelector("#close-modal");
  const confirmModalButton = document.querySelector("#confirm-modal");

  const toast = document.querySelector("#toast");
  const showToastButton = document.querySelector("#show-toast");
  const closeToastButton = document.querySelector("#close-toast");

  let toastTimeout;

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function showToast() {
    clearTimeout(toastTimeout);

    toast.classList.add("show");

    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 30000);
  }

  function closeToast() {
    clearTimeout(toastTimeout);
    toast.classList.remove("show");
  }

  openModalButton.addEventListener("click", openModal);

  closeModalButton.addEventListener("click", closeModal);

  confirmModalButton.addEventListener("click", () => {
    closeModal();
    showToast();
  });

  showToastButton.addEventListener("click", showToast);

  closeToastButton.addEventListener("click", closeToast);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
});