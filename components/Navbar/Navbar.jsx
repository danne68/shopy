import React from 'react';
import { useContext } from 'react';
import Link from "next/link";

const Navbar = (props) => {
    return (
        <nav className="navbar w-full py-1 h-12 bg-white flex justify-between flex-wrap border-b border-gray-200">
            <div className="container block flex flex-grow items-center w-auto">      
                <h3 className="flex w-1/5"><a href="/">Shoppr</a></h3>
                <div className="flex-auto items-center justify-start">
                    <ul className="flex flex-row">
                        <li className="mx-1 px-2">
                            <Link href="/">
                                <a className="uppercase">Home</a>
                            </Link>
                        </li>
                        <li className="mx-1 px-2">
                            <Link href="/women/">
                                <a className="uppercase">Women</a>
                            </Link>
                        </li>
                        <li className="mx-1 px-2">
                            <Link href="/men/">
                                <a className="uppercase">Men</a>
                            </Link>
                        </li>
                        <li className="mx-1 px-2 cursor-pointer">
                            <span className="uppercase">Kids</span>
                        </li>
                    </ul>
                </div>
                <a href="/cart" className="uppercase font-thin text-sm">Cart (<span className="font-semibold">0</span>)</a>
            </div>
        </nav>
    );
};
export default Navbar;