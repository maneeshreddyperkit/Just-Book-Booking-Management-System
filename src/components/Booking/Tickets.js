import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const TicketCosts = {
    vip: 140,
    fistClass: 80,
    secondClass: 50,
};

const Tickets = () => {
    const [vipTickets, setVipTickets] = useState(0);
    const [firstClassTickets, setFirstClassTickets] = useState(0);
    const [secondClassTickets, setSecondClassTickets] = useState(0);
    const navigate = useNavigate();

    const incrementTickets = (counter, setCounter) => {
        setCounter(counter + 1);
    };
    const decrementTickets = (counter, setCounter) => {
        if (counter == 0) {
            return;
        }
        setCounter(counter - 1);
    };

    const validTickets = vipTickets !== 0 && firstClassTickets !== 0 && secondClassTickets !== 0;
    return (
        <div className="row justify-content-center">
            <div className="col-1" />
            <div style={{ display: "flex", flexDirection: "column" }} className="col-4">
                <div className="row" style={{ marginTop: 200 }}>
                    <div className="col-4 col-md-4 float-md-end mb-3 ms-md-3 price">
                        <h4>VIP price</h4>
                        <h4>First class price</h4>
                        <h4>Second class price</h4>
                    </div>
                    <div className="col-1 col-md-1 float-md-end mb-1 ms-md-1 price">
                        <h4>-</h4>
                        <h4>-</h4>
                        <h4>-</h4>
                    </div>
                    <div className="col-3 col-md-2 float-md-end mb-3 ms-md-3 price">
                        <h4>${TicketCosts.vip}</h4>
                        <h4>${TicketCosts.fistClass}</h4>
                        <h4>${TicketCosts.secondClass}</h4>
                    </div>
                    <div className="col-1 col-md-1 float-md-end mb-1 ms-md-1">
                        <div className="price-box vip">
                            <div className="select-tickets">
                                <h5 style={{ cursor: "pointer" }} onClick={() => decrementTickets(vipTickets, setVipTickets)}>
                                    -
                                </h5>
                                <h5>{vipTickets}</h5>
                                <h5 style={{ cursor: "pointer" }} onClick={() => incrementTickets(vipTickets, setVipTickets)}>
                                    +
                                </h5>
                            </div>
                        </div>
                        <div className="price-box first-class">
                            <div className="select-tickets">
                                <h5 style={{ cursor: "pointer" }} onClick={() => decrementTickets(firstClassTickets, setFirstClassTickets)}>
                                    -
                                </h5>
                                <h5>{firstClassTickets}</h5>
                                <h5 style={{ cursor: "pointer" }} onClick={() => incrementTickets(firstClassTickets, setFirstClassTickets)}>
                                    +
                                </h5>
                            </div>
                        </div>
                        <div className="price-box second-class">
                            <div className="select-tickets">
                                <h5 style={{ cursor: "pointer" }} onClick={() => decrementTickets(secondClassTickets, setSecondClassTickets)}>
                                    -
                                </h5>
                                <h5>{secondClassTickets}</h5>
                                <h5 style={{ cursor: "pointer" }} onClick={() => incrementTickets(secondClassTickets, setSecondClassTickets)}>
                                    +
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", marginTop: 160, marginRight: 20 }}>
                    <Link to="/">
                        <button className="btn btn-secondary can-con-button">Cancel</button>
                    </Link>
                    <button
                        type="button"
                        className="btn btn-success can-con-button"
                        onClick={() => {
                            navigate("/cart", {
                                state: { from: "tickets", tickets: { vip: vipTickets, firstClass: firstClassTickets, secondClass: secondClassTickets } },
                            });
                        }}
                        disabled={vipTickets === 0 && firstClassTickets === 0 && secondClassTickets === 0}
                    >
                        Continue
                    </button>
                </div>
            </div>
            <div className="row align-items-center seat-img col-4 col-md-6 float-md-end mb-3 ms-md-3">
                <img src="https://image.shutterstock.com/image-vector/front-view-theater-movie-stage-260nw-1451004890.jpg" />
            </div>
        </div>
    );
};

{
    /* <div class="row justify-content-around">
                <div class="col-4">One of two columns</div>
                <div class="col-4">One of two columns</div>
            </div> */
}
export default Tickets;
