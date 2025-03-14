import React from 'react';
import '../styles/Card.css'; // Assuming you will add the necessary styles in this file

function Card({ img,title, label, text, remark, button_text }) {
  return (
    <div className="column">
      <div className="card">
        <img src={img || "http://placehold.co/80x80"} alt="Card Image" style={{ width: '100%' }} />
        <div className="container">
          <h2>{title}</h2>
          <p className="title">{label}</p>
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
