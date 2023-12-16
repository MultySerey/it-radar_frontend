export default (url, options = {}) => {
    const { useAccessToken } = useAuth();

    return useFetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${useAccessToken().value}`
        }
    })
}