import React, { useState } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "../../utils/showToast";

const Payment = () => {
    const [cardNumber, setCardNumber] = useState();
    const [cardName, setCardName] = useState();
    const [expiryDate, setExpiryDate] = useState();
    const [cvv, setCvv] = useState();
    const navigate = useNavigate();
    const validate = () => {
        if (!cardNumber) {
            showToast("Please enter card Number to proceed");
            return false;
        }
        if (!cardName) {
            showToast("Please enter card Name to proceed");
            return false;
        }
        if (!expiryDate) {
            showToast("Please enter Expiry date to proceed");
            return false;
        }
        if (!cvv) {
            showToast("Please enter cvv to proceed");
            return false;
        }
        return true;
    };
    return (
        <div className="container">
            <div className="center" style={{ paddingTop: 128, maxHeight: 600 }}>
                <div style={{ width: 480, height: 300, backgroundColor: "#0F647A", padding: 16 }}>
                    <h5 style={{ color: "#D0D3D4" }}>Card Number</h5>
                    <Input
                        style={{ fontSize: 18, color: "#595959" }}
                        placeholder="xxxx xxxx xxxx xxxx"
                        value={cardNumber}
                        maxLength={16}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <h5 style={{ color: "#D0D3D4", marginTop: 12 }}>Holder Name</h5>
                    <Input style={{ fontSize: 18, color: "#595959" }} placeholder="John Snow" value={cardName} onChange={(e) => setCardName(e.target.value)} />
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <h5 style={{ color: "#D0D3D4", marginTop: 12 }}>Expiry Date</h5>
                            <Input
                                style={{ fontSize: 18, color: "#595959" }}
                                placeholder="MM/YY"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                            />
                        </div>
                        <div className="col-4">
                            <h5 style={{ color: "#D0D3D4", marginTop: 12 }}>CVV</h5>
                            <Input
                                style={{ fontSize: 18, width: 72, color: "#595959" }}
                                placeholder="xxx"
                                type="password"
                                value={cvv}
                                maxLength={3}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to="/book">
                    <button className="btn btn-secondary can-con-button">Back</button>
                </Link>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start", marginRight: 20, marginTop: -53 }}>
                <Link to="/">
                    <button className="btn btn-secondary can-con-button">Cancel</button>
                </Link>
                <button
                    type="button"
                    className="btn btn-success can-con-button"
                    onClick={() => {
                        if (!validate()) {
                            return;
                        } else {
                            navigate("/success", {
                                state: { from: "payment" },
                            });
                        }
                    }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Payment;