export function useProjectsPage() {

  async function getProjectsGallery() {
    const api = useApi()
    const {data, error} = await api.get('/api/projects-page?populate=*')
  
    return {error, data}
  }

  
  // function setLightBoxImages(array: any): Array<string> {
  //   let imgs: Array<string> = [];

  //   for (const item of array.value.data) {
  //     imgs.push(item.data.attributes.gallery.data)
  //   }

  //   return imgs

  // }


  return {getProjectsGallery}
  
}