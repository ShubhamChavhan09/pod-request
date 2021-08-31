import "./App.css";
import sound from "./sound.svg";
import Man from "./Man.webp";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={sound} alt="Sound wave" />
          <h1>pod</h1>
        </div>
        <div className="main">
          <img className="man" src={Man} alt="singer" />
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
            <Form />
            <div className="links">
              <span>
                <i className="fab fa-spotify"></i>
                <span className="title">Spotify</span>
              </span>
              <span>
                <i className="fas fa-podcast"></i>
                <span className="title">Apple Podcast</span>
              </span>
              <span>
                <i className="fab fa-google"></i>
                <span className="title">Google Podcast</span>
              </span>
              <span>
                <i className="fas fa-broadcast-tower"></i>
                <span className="title">Pocket Casts</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
