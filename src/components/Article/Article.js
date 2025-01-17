import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ id, category, date, postContent, title }) => {
    console.log('category, date, postContent, title', category, date, postContent, title)
    return (
        <article className="post">
            <Link to={`/blog/post/${id}`}>
                <img
                    src="/posts.jpeg"
                    alt="geekyarjun.com-test post"
                    srcSet=""
                    className="post__image"
                />
                <div className="post__category">{category}</div>
                <h1 className="post__heading">{title}</h1>
            </Link>
            <div className="post__post-date">{date}</div>
            <p>
                {postContent}
            </p>
        </article>
    )
}

export default Article;