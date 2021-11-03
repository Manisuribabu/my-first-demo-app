import React from "react";

export default function FooterComponent(props) {
  return (
    <div className="footer">
      <h2>
        <span>{props.name}</span>
      </h2>
    </div>
  );
}
