import { Box } from '@mui/material'
import React from 'react'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import { BackgroundBlur, BoxMax, BoxMin, WrapperContent, WrapperDay, WrapperWeekDay } from './styles';
const { DateTime } = require("luxon");


const DetailDay = ({ item }) => {
  const date = DateTime.fromMillis(item.dt * 1000);

  return (
    <Box minWidth='10rem' position='relative'>
      <BackgroundBlur />
      <WrapperContent display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
        <WrapperWeekDay>
          {date.day}
        </WrapperWeekDay>
        <WrapperDay>
          {date.weekdayShort}
        </WrapperDay>
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt={capitalizeFirstLetter(item.weather[0].main)}
        />

        <p>{capitalizeFirstLetter(item.weather[0].description)}</p>
        <BoxMax>
          {Math.round(item?.temp?.max)}º C
        </BoxMax>

        <BoxMin>
          {Math.round(item?.temp?.min)}º C
        </BoxMin>
      </WrapperContent>
    </Box>
  )
}

export default DetailDay
