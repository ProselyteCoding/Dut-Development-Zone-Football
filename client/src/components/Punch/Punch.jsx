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
        <div className="punch-title">打卡</div>
        <button className="punch-button" onClick={handlePunch} disabled={isPunched}>
            {isPunched ? "已打卡" : "打卡"}
        </button>
        {isPunched && <div className="punch-information">打卡时间: {punchTime}</div>}
    </div>
    
    </div>
  );
};

export default Punch;
