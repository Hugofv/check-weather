import { useAxios } from 'hooks'

const useWeather = ({ latitude, longitude }) => {
  const { REACT_APP_APP_KEY_OPEN_WEATHER } = process.env

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: `/onecall?lat=${latitude}&lon=${longitude}&cnt=7&appid=${REACT_APP_APP_KEY_OPEN_WEATHER}&units=metric&lang=pt_br`
    },
    {
      useCache: false
    }
  )

  return [
    {
      data: data,
      loading: loading,
      error: error,
      refetch: refetch
    }
  ]
}

export default useWeather
