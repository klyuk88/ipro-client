export function useReviews() {
  const config = useRuntimeConfig()

  async function getReviews() {
    const {error, data} = useFetch('/api/reviews?populate=*', {
      baseURL: config.public.apiURL
    })

    return {data, error}
  }


  return {getReviews}
}