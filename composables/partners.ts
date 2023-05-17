export function usePartners () {

  const config = useRuntimeConfig()

  async function getPartners() {
    const {data, error} = await useFetch('/api/partners?populate=*', {
      baseURL: config.public.apiURL
    })

    return {error, data}
  }

  return {getPartners}
}