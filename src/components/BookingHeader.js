import React, { useState } from "react";
import Cart from "./Booking/Cart";
import Payment from "./Booking/Payment";
import ReviewOrder from "./Booking/ReviewOrder";
import Tickets from "./Booking/Tickets";
import { useLocation } from "react-router-dom";

const BookingHeader = () => {
    const location = useLocation();
    const { from } = location.state || "";
    let tickets = {};
    if (from == "tickets") {
        tickets = location.state.tickets;
    }

    return (
        <div>
            <div className="booking-header">
                <div>
                    <h4>Tickets</h4>
                </div>
                <div>
                    <h4>Cart</h4>
                </div>
                <div>
                    <h4>Payment</h4>
                </div>
                <div>
                    <h4>Review Order</h4>
                </div>
            </div>
            {from === "tickets" ? <Cart tickets={tickets} /> : from === "cart" ? <Payment /> : from === "payment" ? <ReviewOrder /> : <Tickets />}
        </div>
    );
};

export default BookingHeader;
