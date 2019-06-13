import React, { useContext, useState, useRef, useEffect } from 'react'
import { TimeZoneContext } from '../contexts/TimeZoneContext'
import { TimeContext } from '../contexts/TimeContext'

const TimeZonePicker = () => {
  const { getTimeZones, setTimeZone, formatName } = useContext(TimeZoneContext)
  const { time } = useContext(TimeContext)
  const [matches, setMatches] = useState([])
  const searchBar = useRef()

  useEffect(
    () => {
      document.addEventListener('click', handleClickAway)
      return(
        () => document.removeEventListener('click', handleClickAway)
      )
    },
    []
  )

  const handleClickAway = (event) => {
    if (!event.target.closest('#search')) {
      setMatches([])
    }
  }

  const handleSelection = (timeZone) => {
    setTimeZone(timeZone)
    setMatches([])
    searchBar.current.value = ""
  }

  const search = () => {
    const query = searchBar.current.value
    setMatches(getTimeZones(query))
  }

  return(
    <div id="search">
      <input
        id="search-bar"
        type="text"
        autoComplete="off"
        placeholder="Search"
        onChange={search}
        onFocus={search}
        ref={searchBar}
      />
      <ul id="search-results" >
        {
          matches.map(timeZone => {
            const localTime = time.toLocaleTimeString("en-US", { timeZone })
            const displayName = formatName(timeZone)
            return(
              <li
                key={timeZone}
                onClick={ () => handleSelection(timeZone) }
              >
                <span className="zone-name">
                  {displayName}
                </span>
                <span className="local-time">
                  {localTime}
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TimeZonePicker
