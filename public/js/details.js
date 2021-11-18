import showBackdrop from "./components/backdrop.js";
import showModal from "./components/modal.js";
import { showLoader, removeLoader } from "./components/loader.js";
import { getSongDetails } from "./components/api.js";
import createSongDetails from "./components/createSongDetails.js";

try {
  showLoader();
  const urlParams = new URLSearchParams(window.location.search);
  const songId = urlParams.get("id");
  const songDetails = await getSongDetails(songId);
  document.title = `Just Dance | ${songDetails.title} by ${songDetails.artist}`;
  createSongDetails(songDetails);
} catch (error) {
  removeLoader();
  showBackdrop();
  showModal(error);
}
