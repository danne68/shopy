import React from 'react';
import { useContext } from 'react';
import CartContext from './cartContext';

const Navbar = (props) => {
    const { cart } = useContext(CartContext);
    return (
        <nav className="navbar w-full py-1 h-12 bg-white flex justify-between flex-wrap border-b border-gray-200">
            <div className="container block flex flex-grow items-center w-auto">      
                <h3 className="flex w-1/5"><a href="/">Shoppr</a></h3>
                <div className="flex-auto items-center justify-start">
                    <ul className="flex flex-row">
                        <li className="mx-1 px-2 cursor-pointer">
                            <span className="uppercase">Home</span>
                        </li>
                        <li className="mx-1 px-2 cursor-pointer">
                            <span className="uppercase">Shop</span>
                        </li>
                        <li className="mx-1 px-2 cursor-pointer">
                            <span className="uppercase">Women</span>
                        </li>
                        <li className="mx-1 px-2 cursor-pointer">
                            <span className="uppercase">Man</span>
                        </li>
                        <li className="mx-1 px-2 cursor-pointer">
                            <span className="uppercase">Kids</span>
                        </li>
                    </ul>
                </div>
                <a href="/cart" className="uppercase font-thin text-sm">Cart (<span className="font-semibold">{cart.length}</span>)</a>
            </div>
        </nav>
    );
};
export default Navbar;