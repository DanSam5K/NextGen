import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  };
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "4.5rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#ececec",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        MccGrey ToDos
      </h1>
    </header>
  );
};

export default Header;
