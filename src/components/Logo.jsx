import React from "react";
import project_logo from "../asset/project_logo.png";

function Logo({ width = "100px" }) {
  return (
    <div>
      {/* <div style={{ backgroundImage: project_logo }}></div> */}

      <img
        alt="Logo"
        src={project_logo}
        class="rounded-xl object-cover bg-opacity-95 h-20 w-25"
      />
    </div>
  );
}

export default Logo;
