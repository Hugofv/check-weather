import { useAxios } from 'hooks'

const useWeather = ({ latitude, longitude }) => {
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: `/onecall?lat=${latitude}&lon=${longitude}&cnt=7&appid=9dc8f187f74251533665423fe40a1ba7`
    },
    {
      useCache: false
    }
  )

  return [
    {
      data: data,
      refetch
    }
  ]
}

export default useWeather
