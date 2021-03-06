import { makeUseAxios } from 'axios-hooks'
import axios from 'axios'

const useAxios = () => {
  const axiosApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    timeout: 60000
  })

  return makeUseAxios({
    axios: axiosApi
  })
}

export default useAxios()
