import { defineStore } from 'pinia';
import qs from 'qs';


export const useServicesStore = defineStore('services', () => {
  const config = useRuntimeConfig()

  async function getServicesList() {
      const {error, data} = await useFetch('/api/services?populate=*', {
        baseURL: config.public.apiURL,
      })
      return {error, data}
  }

  async function getSingleService(slug) {
    const query = qs.stringify({
        filters: {
          slug: {
            $eq: slug
          }
        },
        populate: "*"
    })
    const {error, data} = await useFetch(`/api/services?${query}`, {
      baseURL: config.public.apiURL,
    })

    return {error, data}

    // if(!error.value) {
    //   return {error, data: ref(data.value.data[0])}
    // } else {
    //   return {error, data}
    // }
    
    
  }



  return { getServicesList, getSingleService }
})