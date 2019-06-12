import React, { useContext } from 'react'
import { TimeContext } from '../contexts/TimeContext'
import { TimeZoneContext } from '../contexts/TimeZoneContext'
import TimeZonePicker from './TimeZonePicker'

const Clock = () => {
  const { time } = useContext(TimeContext)
  const { timeZone, formatTimeZoneName } = useContext(TimeZoneContext)
  console.log(timeZone)
  return(
    <main>
      <div>
        { formatTimeZoneName(timeZone) }
      </div>
      <div>
        { time.toLocaleTimeString("en-US", { timeZone }) }
      </div>
      <TimeZonePicker/>
    </main>
  )
}

export default Clock
