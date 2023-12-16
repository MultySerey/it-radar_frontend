export default () => {
    const useAccessToken = () => useState('accessToken')

    const setToken = (newToken) => {
        const accessToken = useAccessToken();
        accessToken.value = newToken;
    }

    const login = ({ email, password }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await useFetch('http://localhost:5000/api/auth/login', {
                    method: 'post',
                    body: {
                        email,
                        password
                    }
                })
                setToken(data.value.accessToken)

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = useFetch('http://localhost:5000/api/auth/refresh')
                setToken(data.value.accessToken)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
            try {
                await refreshToken()
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    return { login, useAccessToken, initAuth }
}