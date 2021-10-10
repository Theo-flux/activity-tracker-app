import React, {useContext} from 'react';
import Activity from './Activity'
import './Card.css'
import {Context} from "../Context"
import work from '../images/icon-work.svg'
import exercise from '../images/icon-exercise.svg'
import play from '../images/icon-play.svg'
import selfcare from '../images/icon-self-care.svg'
import social from '../images/icon-social.svg'
import study from '../images/icon-study.svg'

export default function Card(){
  const {data, currentFrame} = useContext(Context)

  const activitiesImages = [
    work,
    play,
    study,
    exercise,
    social,
    selfcare
  ]

  const activitiesColor = [
    "Lightred1",
    "Softblue",
    "Lightred2",
    "Limegreen",
    "Violet",
    "Soft"
  ]

  return(
    <div className="card">
      {
        data.map((data, i) => (
          <Activity
            key={data.title}
            image={activitiesImages[i]}
            color={activitiesColor[i]}
            title = {data.title}
            current = {data.timeframes[currentFrame]['current']}
            previous = {data.timeframes[currentFrame]['previous']}
            currentFrame = {currentFrame}
          />
        ))
      }

    </div>
  )
}
