import React, { useState, useEffect } from "react";

// TODO: Debugging Support - Can I generate a timer component that updates every second?
// Prompt #file There seems to be an issue with this component. Explain what it is.
const TimerComponent = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Timer: {time}</h1>
    </div>
  );
};

export default TimerComponent;
