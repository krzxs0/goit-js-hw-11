export async function getImages(q, page = 1) {
    let data = await axios.get('https://pixabay.com/api/', {
        params: {
            key: "37823308-849c02938d9db73c4683f9f5a",
            q,
            per_page: 40,
            orientation: "horizontal",
            safesearch: true,
            page
        }
    })

    return data
}