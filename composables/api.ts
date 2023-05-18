export function useApi() {
  const config = useRuntimeConfig();

  async function get(url: string)  {
    const {error, data} = await useFetch(() => url, {
      baseURL: config.public.apiURL
    })
  
    return {error, data}
  }
  
  return {get}
}