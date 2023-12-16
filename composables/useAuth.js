export default () => {
    const useAccessToken = () => useState('accessToken')

    const setToken = (newToken) => {
        const accessToken = useAccessToken();
        accessToken.value = newToken;
    }

    const login = async ({ email, password }) => {
        const { data } = await useFetch('http://localhost:5000/api/auth/login', {
            method: 'post',
            body: {
                email,
                password
            }
        })
        setToken(data.accessToken);

        console.log(data)
    }

    return { login, useAccessToken }
}