import React from 'react'
import { NotificationProvider } from 'providers'
import Weather from 'container/Weather'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <NotificationProvider>
      <GlobalStyle />
      <Weather />
    </NotificationProvider>
  )
}

export default App
