import "./styles.css";
function Disc({ disc }) {
  return (
    <div className="disc">
      <img src={disc} className="img-disc" alt="disc" />
    </div>
  );
}
function Name(name) {
  return <span className="disc-name">{name}</span>;
}
function Buttons() {
  return (
    <div className="player-buttons">
      <button id="next" className="player-button"></button>
      <button id="play" className="player-button"></button>
      <button id="next" className="player-button"></button>
    </div>
  );
}
function Like() {
  return <i class="fi fi-sr-heart"></i>;
}
export default function App() {
  return <Like />;
}
