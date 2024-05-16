import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import ArticleIcon from '@mui/icons-material/Article';

import { IPost } from "../../api/models/post.interface"

interface PostProps {
    post: IPost
}


export const PostComponent = ({ post }: PostProps) => {
    const { title, body } = post
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ArticleIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} secondary={body} />
            </ListItem>
            <Divider />
        </>
    )
}
