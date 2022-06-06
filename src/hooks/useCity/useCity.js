import { useAxios } from 'hooks'

const useCity = ({ latitude, longitude }) => {

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
    },
    {
      useCache: false
    }
  )

  return [
    {
      city: data,
      loading: loading,
      error: error,
      refetch: refetch
    }
  ]
}

export default useCity
