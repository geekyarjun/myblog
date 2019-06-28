import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ListItem = ({ location, name: itemName, category, activeMenu, handleNavigationClick }) => {

    return (
        <li
            className={`navigation__list--item ${activeMenu === category ? 'active' : ''}`}
            onClick={() => handleNavigationClick(itemName)}
        >
            <Link to={location}>{itemName}</Link>
        </li>
    )
}

ListItem.propTypes = {
    location: PropTypes.string, // location for link to go on
    name: PropTypes.string, // name of the clicked menu item
    category: PropTypes.string, // category of posts
    activeName: PropTypes.string, // activeMenu name
    handleNavigationClick: PropTypes.func // function for handle clicking on menu items
}

export default ListItem;