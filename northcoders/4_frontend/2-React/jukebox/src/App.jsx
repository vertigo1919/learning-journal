import { Header } from "./Components/Header";
import { Stats } from "./Components/Stats";
import { Songs } from "./Components/Songs";
import { CurrentlyPlaying } from "./Components/CurrentlyPlaying";

const App = () => {
  const playListTitle = "February Playlist";
  const tracks = [
    {
      id: 1,
      title: "Dreams",
      artist: "Fleetwood Mac",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
      previewURL:
        "https://open.spotify.com/embed/track/0ofHAoxe9vBkTCp2UQIavz?utm_source=generator",
    },
    {
      id: 2,
      title: "Don't stop me now",
      artist: "Queen",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/9/97/Queen-dont-stop-me-now-1979-6-s.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/5T8EDUDqKcs6OSOwEsfqG7?utm_source=generator",
    },
    {
      id: 3,
      title: "Enter Sandman",
      artist: "Metallica",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/5sICkBXVmaCQk5aISGR3x1?utm_source=generator",
    },
    {
      id: 4,
      title: "Sledgehammer",
      artist: "Peter Gabriel",
      albumCover:
        "https://upload.wikimedia.org/wikipedia/en/c/cf/Sledgehammer_Cover.jpg",
      previewURL:
        "https://open.spotify.com/embed/track/029NqmIySn1kOY305AAhxT?utm_source=generator",
    },
  ];
  const playCounts = {
    Dreams: 10,
    "Enter Sandman": 5,
    "Don't stop me now": 8,
    Sledgehammer: 11,
  };
  const currentlyPlaying = 0;
  const currentSongObject = tracks[currentlyPlaying];

  return (
    <div className="App">
      <Header playListTitle={playListTitle}> </Header>
      <Songs tracks={tracks} currentlyPlaying={currentlyPlaying}></Songs>
      <CurrentlyPlaying song={currentSongObject}></CurrentlyPlaying>
      <Stats playCounts={playCounts}></Stats>
    </div>
  );
};

export default App;
