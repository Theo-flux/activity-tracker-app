import React, {useState, useEffect} from 'react';
import Data from './data.json'
const Context = React.createContext()

function ContextProvider({children}){
  const [data, setData] = useState([])
  const [currentFrame , setCurrentFrame] = useState("weekly")

  useEffect(()=>{
    setData(Data)

  },[])

  function handleFrameClicks (frame){
    setCurrentFrame(frame)
  }

  console.log(currentFrame)

  return(
    <Context.Provider value={{data, handleFrameClicks, currentFrame}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
