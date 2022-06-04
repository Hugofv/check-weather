/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import { Alert, AlertTitle, Snackbar } from '@mui/material'
import PropTypes from 'prop-types'

export const NotificationContext = React.createContext({})

export const NotificationProvider = ({ children }) => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false)
  const [notificationTitle, setNotificationTitle] = useState('')
  const [notificationDescription, setNotificationDescription] = useState('')
  const [notificationVariant, setNotificationVariant] = useState(null)

  const setProperties = ({ title, description, variant }) => {
    setIsNotificationVisible(true)
    setNotificationTitle(title)
    setNotificationDescription(description)
    setNotificationVariant(variant)
  }

  const error = ({ title, description }) => {
    setProperties({ title, description, variant: 'error' })
  }

  const info = ({ title, description }) => {
    setProperties({ title, description, variant: 'info' })
  }

  const handleClose = () => {
    setIsNotificationVisible(false)
  }

  const contextValue = {
    notification: {
      error: useCallback(
        ({ title, description }) => error({ title, description }),
        []
      ),
      info: useCallback(
        ({ title, description }) => info({ title, description }),
        []
      )
    }
  }

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotificationVisible}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity={notificationVariant}>
          <AlertTitle>{notificationTitle}</AlertTitle>
          {notificationDescription}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  )
}

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired
}
