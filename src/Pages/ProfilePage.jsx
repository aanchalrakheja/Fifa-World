import React from "react";
import Header from "../Components/Header";
import GraphComponent from "../Components/Graph";
import ProfileCard from "../Components/ProfileCard";
import "../css/profile.css";
import {useParams} from "react-router-dom";
import members from "../data.js";

function ProfilePage()
{
    let {id}=useParams();
    return(
        <div className="profile">
        <Header index={members[id-1]}/>
        <GraphComponent index={members[id-1]}/>
        <ProfileCard index={members[id-1]}/>
    </div>
    )
}

export default ProfilePage;
