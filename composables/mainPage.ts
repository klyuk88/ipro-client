export function useMainPage() {

  async function getMainPageData() {
    const config = useRuntimeConfig()
    const { data, error } = await useFetch(config.public.apiURL + '/api/main-page?populate=*')

    return { data, error }
  }

  return { getMainPageData }
}