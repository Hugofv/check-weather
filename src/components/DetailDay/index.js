import { Paper, Typography } from '@mui/material'
import React from 'react'

const DetailDay = ({ item }) => {
  return (
    <Paper>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
      />
    </Paper>
  )
}

export default DetailDay
