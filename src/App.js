import React from 'react'
import { NotificationProvider } from 'providers'
import Weather from 'container/Weather'

function App() {
  return (
    <NotificationProvider>
      <Weather />
    </NotificationProvider>
  )
}

export default App
