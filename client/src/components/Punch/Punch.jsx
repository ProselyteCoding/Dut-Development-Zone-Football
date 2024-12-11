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
        <div className="punch-rank">
            <div className="punch-rank-title">打卡排名</div>
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
        <button className="punch-button" onClick={handlePunch} disabled={isPunched}>
            {isPunched ? "已打卡" : "打卡"}
        </button>
        {isPunched && <div className="punch-information">打卡时间: {punchTime}</div>}
        <div className="punch-graph">
          123
        </div>
    </div>
    
    </div>
  );
};

export default Punch;
