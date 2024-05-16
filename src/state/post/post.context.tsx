
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { IPost } from "../../api/models/post.interface"
import { getPosts } from "../../api/posts.api"


const usePosts = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getPosts().then((data) => {
            setPosts(data)
            setIsLoading(false)
        })
    }, [])

    return {
        posts,
        isLoading
    }
}

const PostsContext = createContext<ReturnType<typeof usePosts>>({} as ReturnType<typeof usePosts>)

export const PostsProvider = ({ children }: { children: ReactNode }) => {
    const theme = usePosts()
    return <PostsContext.Provider value={theme}>{children}</PostsContext.Provider>
}

export const usePostsContext = () => useContext(PostsContext)