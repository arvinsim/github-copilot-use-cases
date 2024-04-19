import React from "react";

// TODO: Documentation - Can we add types? Can we document these types?
const Persona: React.FC = ({ name, age, job }) => {
  return (
    <div className="flex flex-row">
      <h2 className="mr-5 text-2xl">{name}</h2>
      <div>
        <p>Age: {age}</p>
        <p>Job: {job}</p>
      </div>
    </div>
  );
};

export default Persona;
