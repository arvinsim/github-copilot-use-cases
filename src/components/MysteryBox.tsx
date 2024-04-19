import React, { useState, useEffect } from "react";

// TODO: Code Documentation - What does this component do?
const MysteryBox = () => {
  const [value, setValue] = useState(Math.floor(Math.random() * 100));
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((prevValue) => prevValue + 1);
    }, 1000 * value);
    return () => clearTimeout(timer);
  }, [value]);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
    setValue(value % 2 === 0 ? value + 3 : value - 2);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="p-5 border-2 border-black cursor-pointer"
      >
        {clicked ? `Activated: ${value}` : `Deactivated: ${value}`}
      </div>
    </div>
  );
};

export default MysteryBox;
