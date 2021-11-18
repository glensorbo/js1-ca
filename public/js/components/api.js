export const getSongList = async () => {
  try {
    const response = await fetch("https://api.miabelle.tv/v1/songs");
    const songList = await response.json();
    const randomNumber = Math.floor(Math.random() * 10 * (Math.random() * 10));
    const slicedSonglist = songList.slice(randomNumber, randomNumber + 20);
    return slicedSonglist;
  } catch (error) {
    throw new Error("Failed to fetch resources");
  }
};

export const getSongDetails = async (songId) => {
  try {
    const response = await fetch("https://api.miabelle.tv/v1/song/" + songId);
    if (response.status !== 200) {
      throw new Error("Failed to fetch song details");
    }
    const songDetails = await response.json();
    return songDetails[0];
  } catch (error) {
    throw new Error("Failed to fetch song details");
  }
};
