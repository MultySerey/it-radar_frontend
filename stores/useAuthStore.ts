import { defineStore } from "pinia"

type Token = {
    accessToken: string;
}

type Credentials = {
    email: string;
    password: string;
}

export const useAuthStore = defineStore('auth', () => {
    const token = ref<Token | null>(null)

    const isLoggedIn = computed(() => !!token.value)

    async function fetchUser(response: any) {
        token.value = response.value as Token;
    }

    async function login(credentials: Credentials) {
        const { data: response } = await useFetch('http://localhost:5000/api/auth/login', {
            credentials: "include",
            method: 'POST',
            body: credentials,
            watch: false
        });
        fetchUser(response);
    }
    return { token, login, isLoggedIn, fetchUser };
})