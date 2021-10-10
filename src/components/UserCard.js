import React from 'react';
import "./UserCard.css"
import UserTimeFrames from "./UserTimeFrames"
import Jeremy from "../images/image-jeremy.png"

export default function UserCard(){
  return(
    <div className="user-card">

      <div className="user-card-head">
        <div className="user-card-for">
          <div className="user-image">
            <img src={Jeremy} alt="jeremy-profile" />
          </div>
          <div className="user-card-detail">
            <p>Report for</p>
            <h1>Jeremy Robinson</h1>
          </div>
        </div>
      </div>

      <div className="user-card-item">
        <UserTimeFrames frame="daily" />
        <UserTimeFrames frame="weekly" />
        <UserTimeFrames frame="monthly" />
      </div>

    </div>
  )
}
