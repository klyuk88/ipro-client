export default defineNuxtRouteMiddleware((to, from) => {
  const mobMenu = useMobileMenu()
  if (mobMenu.value) {
    mobMenu.value = false
  }
})