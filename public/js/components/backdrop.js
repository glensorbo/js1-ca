const showBackdrop = () => {
  const body = document.querySelector("body");

  const backdrop = document.createElement("div");

  backdrop.classList.add("backdrop");

  body.appendChild(backdrop);
};

export default showBackdrop;
