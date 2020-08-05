import React, { Component } from 'react'

import Stopwatch from './Stopwatch'
import Countdown from './Countdown'

function App() {
  return (
    <div className="App">
      <div className="App-title">Stopwatch/Timer</div>
      <div className="Timers">
        <Stopwatch />
        <Countdown />
      </div>
    </div>
  )
}

export default App
