import React from "react";
import "./SingleCard.css";
const SingleCard = (props) => {
  const { card, handleChoice, flipped, disabled } = props;
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="card-front" />
        <img
          src="/img/cover.png"
          alt="card-back"
          onClick={handleClick}
          className="back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
