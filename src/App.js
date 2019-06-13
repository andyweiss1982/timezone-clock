import React from 'react'
import { TimeProvider } from './contexts/TimeContext'
import { TimeZoneProvider } from './contexts/TimeZoneContext'
import Clock from './components/Clock'
import TimeZonePicker from './components/TimeZonePicker'

const App = () => (
  <TimeProvider>
    <TimeZoneProvider>
      <Clock/>
      <TimeZonePicker/>
    </TimeZoneProvider>
  </TimeProvider>
)

export default App
