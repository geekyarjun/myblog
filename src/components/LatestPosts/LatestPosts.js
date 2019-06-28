import React, { lazy } from 'react';
const Article = lazy(() => import('../Article'));


const LatestPosts = () => (
    <div className="latest-posts">
        <h1 className="postCategoryTitle">Latest Posts</h1>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
    </div>
)

export default LatestPosts;