import React from 'react';

const NavHeader = ({children}) => {
    return (
        <div className="md:px-8 px-1 header grid grid-cols-3 md:grid-cols-5 place-items-center shadow">
            {children}
        </div>
    );
};

export default NavHeader;
