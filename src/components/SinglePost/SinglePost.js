import React, { Fragment, lazy } from 'react';
const Author = lazy(() => import('../Author'));
const RelatedPosts = lazy(() => import('../RelatedPosts'));


// to be done Post component can be used here with some props
const SinglePost = () => (
    <Fragment>
        <article className="single-post">
            <img
                src="https://cdn-images-1.medium.com/max/2400/1*E6qtNzPnqudQxuydi0T_0w.jpeg"
                alt="article poster"
            />
            <h1 className="single-post__heading">Title of this post</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Cras pulvinar mattis
                nunc sed. Hendrerit dolor magna eget est lorem ipsum dolor sit. Sapien
                eget mi proin sed libero. Nunc sed blandit libero volutpat sed cras.
                Vitae turpis massa sed elementum tempus. Cursus risus at ultrices mi
                tempus imperdiet nulla malesuada pellentesque. Est ullamcorper eget
                nulla facilisi etiam dignissim diam. Id ornare arcu odio ut sem nulla
                pharetra diam sit. Elementum sagittis vitae et leo duis ut. Magna ac
                placerat vestibulum lectus mauris ultrices eros. Odio aenean sed
                adipiscing diam donec adipiscing tristique risus nec. Id velit ut tortor
                pretium viverra suspendisse potenti nullam ac. In nisl nisi scelerisque
                eu ultrices vitae auctor. Ut aliquam purus sit amet. Diam phasellus
                vestibulum lorem sed risus ultricies tristique nulla.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Cras pulvinar mattis
                nunc sed. Hendrerit dolor magna eget est lorem ipsum dolor sit. Sapien
                eget mi proin sed libero. Nunc sed blandit libero volutpat sed cras.
                Vitae turpis massa sed elementum tempus. Cursus risus at ultrices mi
                tempus imperdiet nulla malesuada pellentesque. Est ullamcorper eget
                nulla facilisi etiam dignissim diam. Id ornare arcu odio ut sem nulla
                pharetra diam sit. Elementum sagittis vitae et leo duis ut. Magna ac
                placerat vestibulum lectus mauris ultrices eros. Odio aenean sed
                adipiscing diam donec adipiscing tristique risus nec. Id velit ut tortor
                pretium viverra suspendisse potenti nullam ac. In nisl nisi scelerisque
                eu ultrices vitae auctor. Ut aliquam purus sit amet. Diam phasellus
                vestibulum lorem sed risus ultricies tristique nulla.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Cras pulvinar mattis
                nunc sed. Hendrerit dolor magna eget est lorem ipsum dolor sit. Sapien
                eget mi proin sed libero. Nunc sed blandit libero volutpat sed cras.
                Vitae turpis massa sed elementum tempus. Cursus risus at ultrices mi
                tempus imperdiet nulla malesuada pellentesque. Est ullamcorper eget
                nulla facilisi etiam dignissim diam. Id ornare arcu odio ut sem nulla
                pharetra diam sit. Elementum sagittis vitae et leo duis ut. Magna ac
                placerat vestibulum lectus mauris ultrices eros. Odio aenean sed
                adipiscing diam donec adipiscing tristique risus nec. Id velit ut tortor
                pretium viverra suspendisse potenti nullam ac. In nisl nisi scelerisque
                eu ultrices vitae auctor. Ut aliquam purus sit amet. Diam phasellus
                vestibulum lorem sed risus ultricies tristique nulla.
            </p>
        </article>

        <Author />

        <RelatedPosts />

    </Fragment >
)

export default SinglePost;