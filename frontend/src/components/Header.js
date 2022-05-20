import React from "react";

export default function Header() {
  const headerStyle = {
    color: "rgb(209, 66, 0)",
    textAlign: "center",
  };

  return (
    <>
      <div>
        <h1 style={headerStyle}>Quiz App</h1>
      </div>
    </>
  );
}
