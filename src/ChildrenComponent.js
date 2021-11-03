import React from "react";

export default function ChildrenComponent(props) {
  return (
    <div className="banner">
      <h2>
        <span>{props.name}</span>
      </h2>
    </div>
  );
}
