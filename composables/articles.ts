export function useArticles () {

  const config = useRuntimeConfig()

  async function getArticles() {
    const {data, error} = await useFetch('/api/articles?populate=*', {
      baseURL: config.public.apiURL
    })

    return {error, data}
  }

  async function getSingleArticle(slug: string) {
    const {data, error} = await useFetch(() => `/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
      baseURL: config.public.apiURL
    })

    return {error, data}
  }

  return {getArticles, getSingleArticle}
}