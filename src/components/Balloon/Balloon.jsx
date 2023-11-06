import React, { useState } from "react";
import Constants from "../../utils/constants";
import classnames from "classnames";
import "./Balloon.css";
import elf from "../../assets/elf.svg";

const Balloon = ({ id, color, isActive, onClick }) => {
  const [isPopped, setIsPopped] = useState(false);

  const classNames = classnames("balloon balloon--moving", {
    "balloon--active": isActive,
    "balloon--popping": isPopped,
  });

  const clickHandler = (e) => {
    if (!isPopped) {
      setIsPopped(true);
      onClick();

      setTimeout(() => {
        setIsPopped(false);
      }, Constants.randomnessLimits.lower);
    }
  };

  const balloonWidth = Constants.balloonWidth;
  const balloonHeight = balloonWidth * 1.17;
  const threadHeight = Constants.threadHeight;

  return (
    <div className="balloon-cell">
      <div
        onClick={clickHandler}
        className={classNames}
        style={{ color: color }}
      >
        <img
          className="balloon-svg"
          src={elf}
          alt="Elf"
        />
      </div>
    </div>
  );
};

export default Balloon;
