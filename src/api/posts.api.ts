import { IPost } from "./models/post.interface"
import { placeholderApi } from "./placeholder.api"


export const getPosts = async () => {
    const response = await placeholderApi().get("/posts")
    return response.data as IPost[]
}