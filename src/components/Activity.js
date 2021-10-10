import React from 'react';
import './Activity.css'


export default function Activity({image, color, title, current, previous, currentFrame}){


  function prev(){
    if(currentFrame === "daily"){
      return `Yesterday - ${previous}hrs`
    }else if(currentFrame === "weekly"){
      return `Last Week - ${previous}hrs`
    }else {
      return `Last Month - ${previous}hrs`
    }
  }

  return(
    <div className="parent-card">
      <div className="activity" style={{backgroundColor: `var(--${color})`}}>
      <div className="activity-card" >
        <div className="activity-image">
          <img src={image} alt="work icon" />
        </div>

        <div className="activity-details">
          <div className="activity-title">
            <h2>{title}</h2>
            <i className="ri-more-fill"></i>
          </div>
          <div className="activity-duration">
            <p className="activity-time">{current}hrs</p>
            <p className="activity-frame">
                {prev()}
          </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
