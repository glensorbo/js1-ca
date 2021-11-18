const createSongDetails = (song) => {
  let difficulty = "n/a";
  if (!song) {
    throw new Error("Failed to create song details");
  }
  if (song.difficulty) difficulty = song.difficulty;
  const container = document.querySelector(".container");
  container.innerHTML = `
  <h1 class="details__heading">${song.title} <span class="text-sm">by</span> ${song.artist}</h1>
  <img class="details__image" src="https://images.miabelle.tv/large/${song.imageName}" alt="${song.title}">
  <ul class="details__list">
    <li>Featured in JD ${song.game}</li>
    <li>Version: ${song.mode}</li>
    <li>Routine: ${song.routine}</li>
    <li>Difficulty: ${difficulty}</li>
  </ul>
  `;
};

export default createSongDetails;
