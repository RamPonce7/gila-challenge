import axios from "axios"


export const placeholderApi = () => {
    return axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        headers: {
            "Content-type": "application/json"
        }
    })
}