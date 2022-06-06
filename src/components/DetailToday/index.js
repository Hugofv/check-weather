import { Update } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material'
import React from 'react'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import { BoxContent, BoxTemperature, BoxTitle, BoxCondition, BoxDate } from './styles';
const { DateTime } = require("luxon");


const DetailToday = ({ city, weather, refetch }) => {
  const date = DateTime.fromMillis(weather?.dt * 1000);

  return (
    <BoxContent>
      <Box minWidth='10rem' position='relative' display='flex' flexDirection='column' alignItems='center'>
        <BoxTitle>{city?.city}, {city?.principalSubdivision} - {city?.countryName}</BoxTitle>
        <Box display='flex' alignItems='center' >
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
            alt={capitalizeFirstLetter(weather?.weather[0].main)}
          />
          <BoxTemperature>
            {Math.round(weather?.temp || 0)}º C
          </BoxTemperature>

        </Box>

        {
          !!weather ? (
            <Box textAlign='center'>
              <BoxCondition>
                {capitalizeFirstLetter(weather?.weather[0].description)}
              </BoxCondition>
              <BoxDate>
                {date.toFormat('dd/MM/yyyy HH:mm')}
                <IconButton onClick={refetch}>
                  <Update />
                </IconButton>
              </BoxDate>

              <Box>
                <span>Sensação Térmica: {Math.round(weather?.feels_like || 0)}º C </span>
                <span>Umidade: {weather?.humidity}% </span>
                <span>Pressão: {weather?.pressure}hPa </span>
                <span>UV: {weather?.uvi} UV  </span>
              </Box>
            </Box>
          ) : null
        }
      </Box>
    </BoxContent>
  )
}

export default DetailToday
