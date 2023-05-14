import { defineStore } from 'pinia';
import qs from 'qs';


export const useMainPageStore = defineStore('mainPageStore', () => {
  
  const mainPageData = ref(null)

  async function getMainPageData() {
    const config = useRuntimeConfig()
    const query = qs.stringify({
      
    })
    const {data, error} = await useFetch(config.public.apiURL + '/api/main-page?populate=*')
    if (error.value) {return}
    mainPageData.value = data.value
    
      
  }
  return { getMainPageData, mainPageData }
})