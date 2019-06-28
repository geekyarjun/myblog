import React, { useState, useEffect, lazy } from 'react';
import { withRouter } from 'react-router-dom';

//main navigation configuration
import navigationConfig from '../nav';

const ListItem = lazy(() => import('./ListItem'));

const { items } = navigationConfig;


const NavigationBar = (props) => {

    const [activeMenu, handleNavigationClick] = useState('');

    useEffect(() => {
        const { location: { pathname } } = props;

        if (pathname && pathname.indexOf('/blog/category/') > -1) {
            handleNavigationClick(pathname.replace('/blog/category/', ''))
        }

    }, [props])


    return (
        <nav className="navigation u-sm-mg-bt">
            <ul className="navigation__list">
                {
                    items.map((menuItem, idx) => (
                        <ListItem
                            {...menuItem}
                            key={idx}
                            handleNavigationClick={handleNavigationClick}
                            activeMenu={activeMenu}
                        />
                    ))
                }
            </ul>
        </nav>
    )
}

export default withRouter(NavigationBar);