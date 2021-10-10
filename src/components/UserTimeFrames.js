import React,{useContext} from 'react';
import {Context} from '../Context'
import "./UserTimeFrames.css"

export default function UserTimeFrames({frame}){
  const {handleFrameClicks} = useContext(Context)

  return(
    <div onClick={() => handleFrameClicks(frame)} className="frame-panel">
      {frame}
    </div>
  )
}
