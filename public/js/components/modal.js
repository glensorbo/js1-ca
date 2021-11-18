const showModal = (errorText = "Unknown error occurred") => {
  const body = document.querySelector("body");

  const backdrop = document.querySelector(".backdrop");

  const modal = document.createElement("div");

  modal.classList.add("modal");

  body.appendChild(modal);

  const modalContent = `
    <h2 class="modal__heading">Sorry, we have an error!</h2>
    <p class="modal__body">${errorText}</p>
    <button class="btn modal__button">Close</button>
  `;

  modal.innerHTML = modalContent;

  const closeModalButton = document.querySelector(".modal__button");

  closeModalButton.addEventListener("click", () => {
    body.removeChild(backdrop);
    body.removeChild(modal);
  });

  backdrop.addEventListener("click", () => {
    body.removeChild(backdrop);
    body.removeChild(modal);
  });
};

export default showModal;
