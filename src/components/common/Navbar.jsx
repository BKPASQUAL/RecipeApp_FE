import React from "react";

function Navbar() {
  return (
    <div className="w-full h-20 bg-slate-300 flex flex-row justify-between items-center px-28 ">
      <div className="flex justify-start ">
        LOGO
      </div>
      <div className="flex flex-row justify-center">
        <p>HOME</p>
        <p>FAVOURITE</p>
      </div>
      <div className="flex justify-end">
        ICON
      </div>
    </div>
  );
}

export default Navbar;
