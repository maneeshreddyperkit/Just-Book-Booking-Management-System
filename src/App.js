import React, { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingHeader from "./components/BookingHeader";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DisplayShowDetails from "./pages/DisplayShowDetails";
import AddShows from "./components/AddShows";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const email = useSelector((state) => state.user.email);
    const isAdmin = useSelector((state) => state.user.isAdmin);

    return (
        <Fragment>
            <Navbar />
            <section>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route exact path="/show-details/:id" element={<DisplayShowDetails />} />
                    <Route exact path="/book" element={email ? <BookingHeader /> : <Dashboard />} />
                    <Route exact path="/cart" element={email ? <BookingHeader /> : <Dashboard />} />
                    <Route exact path="/payment" element={email ? <BookingHeader /> : <Dashboard />} />
                    <Route exact path="/success" element={email ? <BookingHeader /> : <Dashboard />} />
                    <Route exact path="/add-show" element={email && isAdmin ? <AddShows /> : <Dashboard />} />
                </Routes>
                <div style={{ display: "none" }}>
                    <Login />
                </div>
                <ToastContainer />
            </section>
        </Fragment>
    );
};

export default App;