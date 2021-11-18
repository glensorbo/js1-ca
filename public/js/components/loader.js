const container = document.querySelector(".container");
const loader = document.createElement("div");
loader.classList.add("loader");

export const showLoader = () => {
  const songlist = document.querySelector(".songlist");
  if (songlist) container.removeChild(songlist);
  container.appendChild(loader);
};

export const removeLoader = () => {
  container.removeChild(loader);
};
