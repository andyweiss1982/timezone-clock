import React, { createContext, useState, useEffect } from 'react'

const TimeContext = createContext()

const TimeProvider = props => {
  const [time, setTime] = useState(new Date())

  const checkTime = () => {
    setTime(new Date())
  }

  useEffect(
    () => {
      const interval = setInterval(checkTime, 100)
      return () => { clearInterval(interval) }
    },
    []
  )

  return(
    <TimeContext.Provider value={{time}}>
      { props.children }
    </TimeContext.Provider>
  )
}

export { TimeContext, TimeProvider }
