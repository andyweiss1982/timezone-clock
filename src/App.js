import React from 'react'
import { TimeProvider } from './contexts/TimeContext'
import { TimeZoneProvider } from './contexts/TimeZoneContext'
import Clock from './components/Clock'

const App = () => (
  <TimeProvider>
    <TimeZoneProvider>
      <Clock />
    </TimeZoneProvider>
  </TimeProvider>
)

export default App
