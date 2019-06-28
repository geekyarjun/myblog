import React, { lazy } from 'react';

const Article = lazy(() => import('../Article'));


// to be done, posts should be in props
const RelatedPosts = () => (
    <div className="related-posts u-md-mg-tp">
        <Article />
        <Article />
        <Article />
    </div>
)

export default RelatedPosts