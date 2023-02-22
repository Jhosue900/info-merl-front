import React from "react";
import image from "../images/info-circle.png"
import "../css/navbar.css"
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()
  return (
    <div className="container-fluid">
      <nav className="navbar bg-body-dark" id="navbar">
        <div className="container">
            <img
              src={image}
              alt="Bootstrap"
              width="30"
              height="30"
             onClick={() => navigate('/login')}
            />
          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
