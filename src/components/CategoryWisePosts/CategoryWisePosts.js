import React from 'react';
import PropTypes from 'prop-types'
import TestData from '../../TestData';
import PostContainer from '../../containers/PostContainer';


const CategoryWisePosts = (props) => {
    const { col, match: { params } } = props;

    return (
        <div className={`category-wise-posts category-wise-posts-col-${col}`}>
            <PostContainer params={params} TestData={TestData} />
        </div>
    )
}

CategoryWisePosts.propTypes = {
    col: PropTypes.number.isRequired
}

export default CategoryWisePosts;