import React, { useContext, useState, useRef } from 'react'
import { TimeZoneContext } from '../contexts/TimeZoneContext'
import { TimeContext } from '../contexts/TimeContext'

const TimeZonePicker = () => {
  const { getTimeZones, setTimeZone, formatTimeZoneName } = useContext(TimeZoneContext)
  const { time } = useContext(TimeContext)
  const [matches, setMatches] = useState([])
  const searchBar = useRef(null)

  const handleSearch = event => {
    setMatches(getTimeZones(event.target.value))
  }

  const handleSelection = zoneName => {
    setTimeZone(zoneName)
    setMatches([])
    searchBar.current.value = ""
  }

  return(
    <>
      <input
        type="search"
        onChange={handleSearch}
        ref={searchBar}
      />
      <ul>
        {
          matches.map(match => {
            const localTime = time.toLocaleTimeString("en-US", { timeZone: match.zoneName })
            const displayName = formatTimeZoneName(match.zoneName)
            return(
              <li
                key={match.zoneName}
                onClick={ () => handleSelection(match.zoneName) }
              >
                {displayName}: {localTime}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default TimeZonePicker
