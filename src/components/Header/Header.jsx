import React from 'react';
import NavHeader from './NavHeader';
import Logo from './Logo';
import ItemsBar from './ItemsBar';
import Cart from './Cart';
import NavLink from "./NavLink";

const items = [
    {name: 'All', link: '/'},
    {name: 'Shirts', link: '/shirts'},
    {name: 'Pants', link: '/pants'},
    {name: 'Shoes', link: '/shoes'},
    {name: 'Accessories', link: '/accessories'}
]

const Header = () => {

    return (
        <React.Fragment>
            <NavHeader>
                <Logo>
                </Logo>
                <ItemsBar
                    items={items}
                    render={(item) => {
                        return <NavLink key={item.name} href={item.link}>
                            {item.name}
                        </NavLink>
                    }}>
                </ItemsBar>
                <Cart>
                </Cart>
            </NavHeader>
        </React.Fragment>

    );

}

export default Header;
