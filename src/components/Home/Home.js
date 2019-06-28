import React, { Fragment, lazy } from 'react';
const CategoryWisePosts = lazy(() => import('../CategoryWisePosts'));
const LatestPosts = lazy(() => import('../LatestPosts'));

const Home = (props) => {

    return (
        <Fragment>
            <CategoryWisePosts col={8} {...props} />
            <LatestPosts />
        </Fragment>
    )
}

export default Home;