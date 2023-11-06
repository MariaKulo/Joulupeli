import Button from "../Button/Button";
import "./CoverScreen.css";

const CoverScreen = ({ score, onStartGame, duration }) => (
  <div className="intro">
    <h1 className="title">{score > -1 ? "Loppu!" : "Nappaa tonttu! 🎄"}</h1>
    {score > -1 ? (
      <p className="description">
        {`Nappasit ${
          score === 0 ? "nothing" : `${score} ${score > 1 ? "tonttua" : "tontun"}`
        }`}
      </p>
    ) : (
      <p className="description">
        Hauska ja yksinkertainen {duration} sekunnin tonttujahti.
      </p>
    )}
    <div className="action">
      <Button onClick={onStartGame} width={"wide"}>
        {score > -1 ? "Pelaa uudestaan" : "Aloita peli"}
      </Button>
    </div>
  </div>
);

export default CoverScreen;
