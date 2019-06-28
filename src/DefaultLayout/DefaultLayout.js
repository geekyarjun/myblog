import React, { Fragment, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../components/Home'));
const Header = lazy(() => import('../components/Header'));
const Footer = lazy(() => import('../components/Footer'));
const SinglePost = lazy(() => import('../components/SinglePost'));
const NavigationBar = lazy(() => import('../components/NavigationBar'));
const CategoryWisePosts = lazy(() => import('../components/CategoryWisePosts'));

const DefaultLayout = () => (
    <Fragment>
        <Header />
        <NavigationBar />
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route exact path="/blog" component={Home} />
                <Route path="/blog/category/:category" render={props => <CategoryWisePosts col={10} {...props} />} />
                <Route path="/blog/post/:postId" component={SinglePost} />
            </Switch>
        </Suspense>
        <Footer />
    </Fragment>

)

export default DefaultLayout;
