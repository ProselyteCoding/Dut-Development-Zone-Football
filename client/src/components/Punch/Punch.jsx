import React from "react";
import "./Punch.css";
import { useState, useRef, useEffect } from "react";

const Punch = () => {
  const [isPunched, setIsPunched] = useState(false);
  const [punchTime, setPunchTime] = useState("");

  const handlePunch = () => {
    const currentTime = new Date().toLocaleTimeString();
    setIsPunched(true);
    setPunchTime(currentTime);
  };
  return (
    <div>
      <div className="punch-container">
        <div className="punch-left-container">
          <div className="punch-rank">
            <ul className="punch-rank-list">
              <li className="punch-rank-item">1</li>
              <li className="punch-rank-item">2</li>
              <li className="punch-rank-item">3</li>
              <li className="punch-rank-item">4</li>
              <li className="punch-rank-item">5</li>
            </ul>
            <ul className="punch-rank-list">
              <li className="punch-rank-item">1</li>
              <li className="punch-rank-item">2</li>
              <li className="punch-rank-item">3</li>
              <li className="punch-rank-item">4</li>
              <li className="punch-rank-item">5</li>
            </ul>
          </div>
          <div className="punch-graph">123</div>
        </div>
        <div className="punch-right-container">
          <button
            className="punch-button"
            onClick={handlePunch}
            disabled={isPunched}
          >
            {isPunched ? "已打卡" : "打卡"}
          </button>
          {isPunched && (
            <div className="punch-information">打卡时间: {punchTime}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Punch;
