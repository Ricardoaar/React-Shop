import React from 'react';

const NavLink = ({href, children}) => {
    return (
        <li>
            <a href={href}
               className="nav-item px-4
               block  order-b border-gray-100 text-white md:text-disabled hover:text-secondary
               hover:bg-gray-500 bg-opacity-30 md:hover:bg-transparent"
               aria-current="/">
                {children}
            </a>
        </li>
    );
};
export default NavLink;
