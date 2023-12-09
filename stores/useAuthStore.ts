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

    async function login(credentials: Credentials) {
        const { data: response } = await useFetch('https://localhost:5000/api/auth/login', {
            credentials: "include",
            method: 'POST',
            body: credentials,
            watch: false
        });
        token.value = response.value as Token;
    }
    return { token, login };
})