import qs from 'qs'
export function useContacts() {
  const api = useApi()

  async function getContactsPage() {
    const query = qs.stringify({
      populate: ['socials.icon', 'logo', 'lightLogo']
    })
    const { error, data } = await api.get(`/api/contacts-page?${query}`)
    return { error, data }
  }




  return { getContactsPage }

}