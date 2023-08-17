import React from "react";
import "../App.css";
import { TicketCosts } from "./Booking/Tickets";

const AlertModal = ({ message, ticketBreakdown }) => {
    return (
        <div
            className="modal"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
            style={{ position: "absolute" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div style={{ position: "relative", tabIndex: -1, top: 10, right: -460 }}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {ticketBreakdown && Object.keys(ticketBreakdown).length !== 0 ? (
                            <div>
                                <h5>
                                    Vip Tickets &nbsp; &nbsp; &nbsp; &nbsp; - {ticketBreakdown?.vip} * ${TicketCosts.vip} &nbsp;&nbsp;= &nbsp; $
                                    {ticketBreakdown.vip * TicketCosts.vip}
                                </h5>
                                <h5>
                                    First Class &nbsp; &nbsp; &nbsp; &nbsp; - {ticketBreakdown?.firstClass} * ${TicketCosts.fistClass} &nbsp;&nbsp;&nbsp; =
                                    &nbsp; ${ticketBreakdown.firstClass * TicketCosts.fistClass}
                                </h5>
                                <h5>
                                    Second Class &nbsp;&nbsp; - {ticketBreakdown?.secondClass} * ${TicketCosts.secondClass} &nbsp;&nbsp;&nbsp; = &nbsp; $
                                    {ticketBreakdown.secondClass * TicketCosts.secondClass}
                                </h5>
                            </div>
                        ) : (
                            <h5>{message}</h5>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;
