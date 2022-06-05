import React, { useEffect, useState } from 'react'
import { useNotification, useWeather } from 'hooks'
import { Wrapper } from './styles'
import DetailDay from 'components/DetailDay'

function Weather() {
  const [userLocation, setUserLocation] = useState(null)
  const { notification } = useNotification()

  const [{ data, refetch }] = useWeather({
    latitude: userLocation?.coords?.latitude,
    longitude: userLocation?.coords?.longitude
  })

  useEffect(() => {
    verifyPermitionGeolocation()
  }, [])

  const getLatAndLng = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position)
      },
      (error) => {
        notification.info({
          title: 'Erro ao pegar geolocalização' + error
        })
      }
    )
  }

  const verifyPermitionGeolocation = () => {
    if ('geolocation' in navigator) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          getLatAndLng()
        } else if (result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(getLatAndLng, () => {
            notification.error({ title: 'Erro ao pegar geolocalização' })
          })
        } else if (result.state === 'denied') {
          notification.error({
            title:
              'Não foi possível obter sua localização, Verifique se a localização está ativada'
          })
        }
      })
    } else {
      notification.info({ title: 'Erro ao pegar geolocalização' })
    }
  }

  console.log(data)
  return (
    <Wrapper>
      {data?.daily.map((item) => (
        <DetailDay key={item.dt} item={item} />
      ))}
    </Wrapper>
  )
}

export default Weather
