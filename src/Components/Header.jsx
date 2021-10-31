import React from "react";
import "../css/header.css";
import {Link} from "react-router-dom";
import messi from "../Assets/messi.jpg";
import ronaldo from "../Assets/ronaldo.png";
import bruyne from "../Assets/bruyne.png";
import gea from "../Assets/gea.jpg";
import neymar from "../Assets/neymar.jpg";


function Header({index})
{
   let img =[messi,ronaldo,neymar,gea,bruyne];
    return(
        <div className="header">
            <div className="nav">
                <ul>
                    <Link to="/">
                        <li><span style={{color:"black"}}>&#8592;</span>  Home</li>
                    </Link>
                    <li>Help  <span>&#x3f;</span></li>
                </ul>
            </div>
            <div className="profile-name">
                <p className="name">{index.name}</p>
                <img src={img[index.id]} className="profile-img" alt="profile"/>
            </div>
        </div>
    )
}

export default Header;