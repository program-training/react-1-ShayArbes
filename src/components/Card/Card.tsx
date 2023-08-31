import React, { useState } from "react";

interface CardInfo {
  title: string;
  img: string;
  text: string;
  
}

function Card({ title, img, text }: CardInfo): JSX.Element {

  const [backgroundColor, setBackgroundColor] = useState("red");

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div className="cardContainer" style={{ backgroundColor }}>
      <h2>{title}</h2>
      <img src={img} alt={`${title} Image`} />
      <p>{text}</p>
      <select value={backgroundColor} onChange={handleColorChange}>
        <option value="red">red</option>
        <option value="black">black</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
    </div>
  );
}

export default Card;
