import React from 'react'
import {useSelector} from 'react-redux'

import Post from './Post/Post'
import useStyles from './styles';

function Posts() {

    const posts =useSelector((state) => state.Posts)
    const classes = useStyles();

    console.log(posts);

    return (
        <>
            <h1>Posts</h1>
            <Post/>
            <Post/>
        </>
    )
}

export default Posts
