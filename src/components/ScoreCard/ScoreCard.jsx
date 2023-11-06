const ScoreCard = ({ score, time }) => {
  return (
    <div className="game-score">
      {score} nappausta / {time} sekuntia jäljellä
    </div>
  );
};

export default ScoreCard;
