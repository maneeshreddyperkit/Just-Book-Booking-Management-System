import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import "../App.css";
import { fetchUserAdmin } from "../redux/user/userThunk";
import Logout from "./Logout";

const Navbar = () => {
    const { email, imageUrl, name, isAdmin } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        checkAdmin();
    }, [email]);

    const checkAdmin = async () => {
        await dispatch(fetchUserAdmin(email));
    };

    const guestLinks = (
        <ul>
            {isAdmin ? (
                <li>
                    <Link to="/add-show">
                        <div
                            style={{
                                color: "#ffffff",
                                paddingRight: 56,
                                fontSize: 18,
                                alignItems: "center",
                                marginTop: "1rem",
                                cursor: "pointer",
                            }}
                        >
                            Add Show
                        </div>
                    </Link>
                </li>
            ) : null}
            {email ? (
                <li>
                    <div
                        style={{
                            color: "#ffffff",
                            paddingRight: 56,
                            fontSize: 18,
                            alignItems: "center",
                            marginTop: "1rem",
                        }}
                    >{`Hi, ${name}`}</div>
                </li>
            ) : (
                <li>
                    <Login />
                </li>
            )}
            {email ? (
                <li>
                    <Logout />
                </li>
            ) : null}
        </ul>
    );

    return (
        <nav className="navbar" style={{ backgroundColor: "maroon" }}>
            <Link to="/">
                <h1 style={{ color: "white", paddingLeft: 48 }}>Just Book</h1>
            </Link>
            <Fragment>{guestLinks}</Fragment>
        </nav>
    );
};

export default Navbar;
