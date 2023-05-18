import qs from 'qs'

export function useServices() {

  const config = useRuntimeConfig()

  async function getServicesList(count: number = 25) {
    const { error, data } = await useFetch(`/api/services?pagination[page]=1&pagination[pageSize]=${count}&populate=*`, {
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