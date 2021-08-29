import "./App.css";
import sound from "./sound.svg";
import Man from "./Man.webp";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={sound} alt="Sound wave" />
        <h1>pod</h1>
      </div>
      <div className="main">
        <img className="man" src={Man} alt="singer" />
      </div>
      <div className="info">
        <h1>
          <span>PUBLISH YOUR PODCASTS </span>
          <br />
          EVERYWHERE.
        </h1>
        <p>
          Upload you audio to pod with a single click. We'll <br />
          then distribute your podcast to Spotify. Apple <br />
          Poadcasts, Google Podcasts, Pocket casts and morel.
        </p>
      </div>
    </div>
  );
}

export default App;
