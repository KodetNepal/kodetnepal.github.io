import React from 'react';
import '../styles/Card.css'; // Assuming you will add the necessary styles in this file

function Card({ img,title, label, text, remark, button_text }) {
  return (
 <div className="column">
      <div className="card">
        <img src={img || "https://avatars.githubusercontent.com/u/111997815?v=4"} alt="Card Image"  />
        <div className="container">
          <h2>{title}</h2>
          <br/>
          <p className="title">{label}</p>
          <br/>
          <p>{text}</p>
          <br/>
          {/* <p>{remark}</p> */}
          <p><button className="button">{button_text}</button></p>
        </div>
      </div>
      </div>
  );
}

export default Card;
