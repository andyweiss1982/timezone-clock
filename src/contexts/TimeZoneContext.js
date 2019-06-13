import React, { createContext, useState, useEffect } from 'react'

const TimeZoneContext = createContext()

const TimeZoneProvider = props => {
  const defaultTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [timeZone, setTimeZone] = useState(defaultTimeZone)
  const [allTimeZones, setAllTimeZones] = useState([])

  useEffect(
    () => {
      fetch('http://api.timezonedb.com/v2.1/list-time-zone?key=02GNRRUJEWYG&format=json')
        .then(response => response.json())
        .then(({zones}) => {
          setAllTimeZones(
            zones.filter(zone => !zone.zoneName.startsWith("Antarctica"))
            .map(zone => zone.zoneName)
          )
        })
    },
    []
  )

  const getTimeZones = query => {
    if (!query) return []
    let matches = allTimeZones.filter(zone => (
      formatName(zone).toLowerCase().startsWith(query.toLowerCase())
    ))
    matches.sort((a, b) => {
      if (formatName(a) < formatName(b)) return -1
      if (formatName(b) > formatName(a)) return 1
      return 0
    })
    return matches
  }

  const formatName = timeZone => {
    const zoneNameSegments = timeZone.split("/")
    const city = zoneNameSegments.slice(-1)[0].split("_").join(" ")
    const region = zoneNameSegments[0]
    return `${city} (${region})`
  }

  const data = { timeZone, setTimeZone, getTimeZones, formatName }

  return(
    <TimeZoneContext.Provider value={data}>
      { props.children }
    </TimeZoneContext.Provider>
  )
}

export { TimeZoneContext, TimeZoneProvider }
