import React from 'react'
import useStyles from './style';
import {useSelector} from 'react-redux'



function Post() {
    const posts = useSelector(state => state.posts)
    const classes = useStyles();

    console.log(posts);

    return (
        <div>
            <h1>Post</h1>
        </div>
    )
}

export default Post
