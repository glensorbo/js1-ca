import showBackdrop from "./components/backdrop.js";
import showModal from "./components/modal.js";
import { showLoader, removeLoader } from "./components/loader.js";
import { getSongList } from "./components/api.js";

import createSonglist from "./components/createSonglist.js";

try {
  showLoader();
  const songList = await getSongList();
  if (songList.length <= 0) {
    throw new Error("No songs found");
  }
  removeLoader();
  createSonglist(songList);
} catch (error) {
  removeLoader();
  showBackdrop();
  showModal(error);
}

const scrollButton = document.querySelector("#scroll-button");

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 700 && scrollButton.classList.contains("hidden")) {
    scrollButton.classList.remove("hidden");
  }

  if (window.scrollY < 700 && scrollButton.classList.length <= 0) {
    scrollButton.classList.add("hidden");
  }
});
