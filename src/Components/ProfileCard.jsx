import React from "react";
import "../css/profile-card.css";

function ProfileCard({index})
{
    return (
        <div className="profile-card">
            <div className="upper-button">
                <div className="overall">Overall <span className="value">{index.overall}</span></div>
                <div className="potential">Age <span className="value">{index.age}</span></div>
            </div>
            <div className="lower-info">
                <div className="info-field">Nationality<span className="info-data">{index.nationality}</span></div>
                <div className="info-field">Club<span className="info-data">{index.club}</span></div>
                <div className="info-field">Value<span className="info-data">{index.value}</span></div>
                <div className="info-field">Wage<span className="info-data">{index.wage}</span></div>
                <div className="info-field">Preffered Foot<span className="info-data">{index.preferredFoot}</span></div>
                <div className="info-field">Work Rate<span className="info-data">{index.workRate}</span></div>
                <div className="info-field">Position<span className="info-data">{index.position}</span></div>
                <div className="info-field">Jersey Number<span className="info-data">{index.jerseyNo}</span></div>
                <div className="info-field">Joining Date<span className="info-data">{index.Joined}</span></div>
                <div className="info-field">Contract Valid Until<span className="info-data">{index.validity}</span></div>
                <div className="info-field">Height<span className="info-data">{index.height}</span></div>
                <div className="info-field">Weight<span className="info-data">{index.weight}</span></div>
            </div>

        </div>
    );
}

export default ProfileCard;