import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import avatar  from "../avatar.png"
export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="list">
        
      <li className="firstList">
        <img src={avatar} />
      </li>
        <li>
          <i class="fa-solid fa-house"></i>
          {" "}
          <Link className="link" to={"/"}>home</Link>
        </li>
        <li>
          <i class="fa-solid fa-address-card"></i>
          {" "}
          <Link className="link" to={"/about"}>about</Link>
        </li>
        <li>
          <i class="fa-solid fa-video"></i>
          {" "}
          <Link className="link">course</Link>
        </li>
      </ul>
    </div>
  );
}
