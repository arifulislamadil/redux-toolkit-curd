import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/home"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/show-books"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            Show Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-books">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive ? activeClassName : undefined
                                    }
                                >
                                    Add Books
                                </span>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </main>
    );
};

export default NavBar;