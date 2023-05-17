import qs from 'qs'


export function useServices() {

  const config = useRuntimeConfig()

  async function getServicesList() {
    const { error, data } = await useFetch('/api/services?populate=*', {
      baseURL: config.public.apiURL,
    })
    return { error, data }
  }

  async function getSingleService(slug: string) {
    const query = qs.stringify({
      filters: {
        slug: {
          $eq: slug
        }
      },
      populate: "*"
    })
    const { error, data } = await useFetch(`/api/services?${query}`, {
      baseURL: config.public.apiURL,
    })

    return { error, data }


  }


  return { getServicesList, getSingleService }
}