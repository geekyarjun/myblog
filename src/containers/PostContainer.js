import React, { lazy, Fragment } from 'react';
import PropTypes from 'prop-types';

const Article = lazy(() => import('../components/Article'));

const PostContainer = ({ params, TestData }) => {

    const setPostData = (data) => {
        return data.map((pData, index) => {
            const category = <h1 className="postCategoryTitle" key={pData.category + index}>{pData.posts[0].category}</h1>
            const postsArray = pData.posts.map((post, idx) => {
                console.log('post', post)
                return (<Article {...post} key={idx} />);
            })

            postsArray.unshift(category);

            return postsArray
        });
    }

    if (params.category) {
        const postData = TestData.find(data => data.category === params.category);
        console.log('postData', postData)
        const data = [{ ...postData }];

        const posts = setPostData(data);

        return (
            <Fragment>
                {posts}
            </Fragment>
        )

    } else {
        const posts = setPostData(TestData);

        return (
            <Fragment>
                {posts}
            </Fragment>
        )
    }
}

PostContainer.propTypes = {
    params: PropTypes.object,
    TestData: PropTypes.array
}

export default PostContainer