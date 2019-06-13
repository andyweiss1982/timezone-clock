import React, { useContext } from 'react'
import { TimeContext } from '../contexts/TimeContext'
import { TimeZoneContext } from '../contexts/TimeZoneContext'

const Clock = () => {
  const { time } = useContext(TimeContext)
  const { timeZone, formatName } = useContext(TimeZoneContext)
  return(
    <main>
      <div id="current-date">
        {
          time.toLocaleDateString(
            "en-US",
            {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone
            }
          )
        }
      </div>
      <div id="current-time">
        { time.toLocaleTimeString("en-US", { timeZone }) }
      </div>
      <div id="current-zone">
        { formatName(timeZone) }
      </div>
    </main>
  )
}

export default Clock
