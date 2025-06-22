import { useState, useRef, useEffect } from "react";
import "./CountdownTimer.css";

export default function CountDown() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const timerId = useRef(null);
  const timeRef = useRef({ hours: 0, minutes: 0, seconds: 0 });
  const increaseId=useRef(null)
  // Sync state into ref on every render
  useEffect(() => {
    timeRef.current = { hours, minutes, seconds };
  }, [hours, minutes, seconds]);

  function handleDecrease() {
    if (timerId.current) clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      const { hours, minutes, seconds } = timeRef.current;

      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearTimeout(timerId.current);
        return;
      }

      let newH = hours;
      let newM = minutes;
      let newS = seconds;

      if (newS > 0) {
        newS -= 1;
      } else {
        if (newM > 0) {
          newM -= 1;
          newS = 59;
        } else if (newH > 0) {
          newH -= 1;
          newM = 59;
          newS = 59;
        }
      }

      // update ref and state
      timeRef.current = { hours: newH, minutes: newM, seconds: newS };
      setHours(newH);
      setMinutes(newM);
      setSeconds(newS);

      handleStart(); // loop
    }, 1000);
  }

  function handleStop() {
    clearTimeout(timerId.current);
    clearTimeout(increaseId.current)
  }

  function handleReset() {
    clearTimeout(timerId.current);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    timeRef.current = { hours: 0, minutes: 0, seconds: 0 };
  }

  function handleChange(type, e) {
    const value = Math.max(0, Number(e.target.value));
    let h = timeRef.current.hours;
    let m = timeRef.current.minutes;
    let s = timeRef.current.seconds;

    if (type === "Hours") h = value;
    if (type === "Minutes") m = value;
    if (type === "Seconds") s = value;

    // Normalize overflow (e.g. 90 seconds => 1m 30s)
    let totalSeconds = h * 3600 + m * 60 + s;
    let newH = Math.floor(totalSeconds / 3600);
    let newM = Math.floor((totalSeconds % 3600) / 60);
    let newS = totalSeconds % 60;

    setHours(newH);
    setMinutes(newM);
    setSeconds(newS);
    timeRef.current = { hours: newH, minutes: newM, seconds: newS };
  }


  function handleIncrease(){
    if(increaseId.current)
        clearTimeout(increaseId.current)
   increaseId.current=setTimeout(()=>{
          const{hours,minutes,seconds}=timeRef.current
    const totalSeconds=hours*3600+minutes*60+seconds+1
    setHours(Math.floor(totalSeconds/3600))
    setMinutes(Math.floor((totalSeconds%3600)/60))
    setSeconds((totalSeconds%3600)%60)
    handleIncrease()
   },1000)
  
  }

  return (
    <>
      <p>Welcome to countdown</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <input
          className="input"
          type="number"
          value={hours}
          onChange={(e) => handleChange("Hours", e)}
        />
        <input
          className="input"
          type="number"
          value={minutes}
          onChange={(e) => handleChange("Minutes", e)}
        />
        <input
          className="input"
          type="number"
          value={seconds}
          onChange={(e) => handleChange("Seconds", e)}
        />

      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: 20 }}>
        <button style={{ padding: "10px", backgroundColor: "green" }} onClick={handleDecrease}>
          Decrease
        </button>
        <button style={{ padding: "10px", backgroundColor: "red" }} onClick={handleStop}>
          Stop
        </button>
        <button style={{ padding: "10px", backgroundColor: "gray" }} onClick={handleReset}>
          Reset
        </button>
         <button style={{ padding: "10px", backgroundColor: "blue" }} onClick={handleIncrease}>
          Increase
        </button>
      </div>
    </>
  );
}
