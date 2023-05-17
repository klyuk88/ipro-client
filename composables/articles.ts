export function useArticles () {

  const config = useRuntimeConfig()

  async function getArticles(count: number = 25) {
    const {data, error} = await useFetch(`/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=${count}`, {
      baseURL: config.public.apiURL
    })

    return {error, data}
  }

  async function getSingleArticle(slug: string) {
    const {data, error} = await useFetch(() => `/api/articles?filters[slug][$eq]=${slug}&populate=*&`, {
      baseURL: config.public.apiURL
    })

    return {error, data}
  }

  return {getArticles, getSingleArticle}
}