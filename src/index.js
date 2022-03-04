// funcionalidad para abrir y cerrar modal

const openModal = document.querySelector(".section-drawflow");

const closeModal = document.querySelector(".modal-mobile");

openModal.addEventListener("click", () => {
  document.querySelector(".modal-mobile").style.display = "flex"
});

closeModal.addEventListener("click", () => {
  document.querySelector(".modal-mobile").style.visibility = "hidden"
});
