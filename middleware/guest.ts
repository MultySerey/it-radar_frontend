export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();
    if (auth.isLoggedIn) {
        return navigateTo("/user_page", { replace: true });
    }
})