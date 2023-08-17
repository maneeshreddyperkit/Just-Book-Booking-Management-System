import React, { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import AlertModal from "../AlertModal";
import { Link, useLocation } from "react-router-dom";
import { TicketCosts } from "./Tickets";
import { showToast } from "../../utils/showToast";

const Cart = ({ tickets }) => {
    const [ticketBreakdown, setTicketBreakdown] = useState(false);
    const [discount, setDiscount] = useState(0);
    const [promoCode, setPromoCode] = useState();
    const tax = 5;
    const totalCost = tickets.vip * TicketCosts.vip + tickets.firstClass * TicketCosts.fistClass + tickets.secondClass * TicketCosts.secondClass;
    return (
        <div>
            <div className="row justify-content-center" style={{ marginTop: 100 }}>
                <div className="col-3 price">
                    <h4>Ticket Break down</h4>
                    <h4>Tax</h4>
                    <h4>Total Amount</h4>
                    <h4>Apply Promo</h4>
                </div>
                <div className="col-1 price">
                    <h4>-</h4>
                    <h4>-</h4>
                    <h4>-</h4>
                    <input
                        style={{ marginLeft: -20 }}
                        type="text"
                        className="form-control promo-code"
                        placeholder="Promo Code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        maxLength="8"
                    ></input>
                </div>
                <div className="col-3 price">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <h4>${totalCost}</h4>
                        <div style={{ marginTop: -2, marginLeft: 8 }}>
                            <InfoCircleOutlined onClick={() => setTicketBreakdown(true)} data-bs-target="#staticBackdrop" data-bs-toggle="modal" />
                        </div>
                    </div>
                    <h4>${tax}</h4>
                    <h4>${totalCost + tax - discount}</h4>
                    <div className="row">
                        <div className="col-4">
                            <button
                                className="btn btn-primary can-con-button"
                                onClick={() => {
                                    setDiscount(20);
                                    showToast("Promo applied successfully!", true);
                                }}
                                disabled={!promoCode}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col" style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", marginTop: 160, paddingLeft: 300 }}>
                    <Link to="/book">
                        <button className="btn btn-secondary can-con-button">Back</button>
                    </Link>
                </div>
                <div className="col" style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", paddingRight: 300 }}>
                    <Link to="/">
                        <button className="btn btn-secondary can-con-button">Cancel</button>
                    </Link>
                    <Link to="/payment" state={{ from: "cart" }}>
                        <button className="btn btn-success can-con-button">Continue</button>
                    </Link>
                </div>
            </div>

            <div>{ticketBreakdown ? <AlertModal message={`VIP Tickets - ${1}`} ticketBreakdown={tickets} /> : null}</div>
        </div>
    );
};

export default Cart;
