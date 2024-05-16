import { usePostsContext } from "../../state/post/post.context"
import { LoaderComponent, PostComponent } from '../components';

export const HomePage = () => {

    const { posts, isLoading } = usePostsContext()

    return (
        <>
            {
                isLoading ? <LoaderComponent /> : posts.map((post) =>
                (
                    <PostComponent key={post.id} post={post} />
                )
                )
            }
        </>
    )
}