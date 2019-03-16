const searchIconClickHandler = ( element ) => {
    if (element.className === "searchIcon") 
        element.setAttribute('class', 'arrowIcon');
    else 
        element.setAttribute('class', 'searchIcon');
}

const toggleContactsListHandler = ( element ) => {
    const contactList = document.querySelector('.contact-section');
    console.log("element", contactList);
    if (contactList.className.indexOf('active-contact-list') >= 0) {
        contactList.setAttribute('class', 'contact-section');
    } else {
        contactList.setAttribute('class', 'contact-section active-contact-list');
    }

}