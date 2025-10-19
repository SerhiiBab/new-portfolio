import React from "react";

const Boxes = () => {
  return (
    <div className="boxes-container" style={{ padding: "0", margin: "0" }}>
      <iframe
        src="/mwg_00/index.html"
        title="MWG_00"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};

export default Boxes;