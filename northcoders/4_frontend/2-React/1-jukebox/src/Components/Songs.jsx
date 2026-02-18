export function Songs(prop) {
  const array = prop.tracks;
  const currentlyPlaying = prop.currentlyPlaying;

  return (
    <ol className="song-list">
      {array.map((song, index) => {
        let songClass = "song-item";
        if (index === currentlyPlaying) songClass = "song-item song-current";

        return (
          <li className={songClass} key={song.id}>
            <img
              className="song-img"
              src={song.albumCover}
              alt={song.title}
            ></img>
            <div className="song-info">
              <h2 className="song-title">{song.title}</h2>
              <p className="song-artist">{song.artist}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
