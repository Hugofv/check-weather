import { useContext } from 'react'

// Context
import { NotificationContext } from 'providers/NotificationProvider'

const useNotification = () => {
  const { notification } = useContext(NotificationContext)

  return { notification }
}

export default useNotification
