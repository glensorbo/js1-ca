const createSonglist = async (songs) => {
  const container = document.querySelector(".container");
  const songlist = document.querySelector(".songlist");
  if (songlist) {
    container.removeChild(songlist);
  }
  const ul = document.createElement("ul");
  ul.classList.add("songlist");
  songs.forEach((song) => {
    ul.innerHTML += `
      <li class="songlist__item">
        <a href="./details.html?id=${song._id}">
          <img src="https://images.miabelle.tv/medium/${song.imageName}" alt="${song.title}" />
          <div class="songlist__body">
            <h3 class="songlist__title">${song.title} <span class="text-sm">by</span> ${song.artist}</h3>
            <div class="songlist__details">
              <div>
                <h4>Game</h4>
                <span class="text-sm">${song.game}</span>
              </div>
              <div>
                <h4>Version</h4>
                <span class="text-sm">${song.mode}</span>
              </div>
              <div>
                <h4>Routine</h4>
                <span class="text-sm">${song.routine}</span>
              </div>
            </div>
          </div>
        </a>
      </li>
    `;
  });
  container.appendChild(ul);
};

export default createSonglist;
