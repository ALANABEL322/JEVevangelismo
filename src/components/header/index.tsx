import React from "react";
import Navbar from "../navbar";

const header = () => {
  return (
    <>

      <div className="relative z-40">
        <div className="absolute inset-x-0 top-0 flex justify-center items-center z-50"></div>
      <Navbar />
      </div>
    </>
  );
};

export default header;
