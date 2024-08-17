import React from "react";
import "./Main.css";

export default function MainItem({
  char: { photo, type, beds, rating, title, superHost },
}) {
  return (
    <div className="stay-item">
      <div className="smallPicture">
        <img src={photo} alt="Stay 1"/>
      </div>
      <div className="stay-info">
        {superHost && <span className="super-host">SUPER HOST</span>}
        <span className="text">
          {type} {beds !== null && ` . ${beds} beds`}
        </span>
        <span className="rating">
          <img src="/svg/star.svg" alt="star SVG" />
          {rating}
        </span>
      </div>
      <div className="description">{title}</div>
    </div>
  );
}
