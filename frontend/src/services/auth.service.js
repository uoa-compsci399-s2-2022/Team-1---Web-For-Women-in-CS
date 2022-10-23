import axios from 'axios'

const API_URL = "http://localhost:4000"

const axiosInstance = axios.create({
    baseURL: API_URL,

    timeout: 3000,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getAccessToken()
        if (token) {
            config.headers['x-access-token'] = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
// axiosInstance.interceptors.response.use()


const login = ({username, password}) => {
    return axiosInstance.post("/user/login", {
        username: username,
        userpassword: password,
    }).then((response) => {
        if (response.data.access_token) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    }).catch((error) => {
        // console.log(error)
        // alert(error?.message ?? 'error')
        const data = error.response.data
        alert(data?.message ?? 'error')
        // throw(err)
    })
}

const logout = () => {
    localStorage.removeItem("user")
}

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const getAccessToken = () => {
    const user = getUser()
    return user?.access_token
}

export {
    login,
    logout,
    getUser,
}