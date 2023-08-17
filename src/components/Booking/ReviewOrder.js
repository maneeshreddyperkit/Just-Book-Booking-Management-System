import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

const ReviewOrder = () => {
    const [orderId, setOrderId] = useState("");
    const orderIdLength = 8;

    //get this random id from backend and call this api in useEffect if orderid is empty as ddependency array
    useEffect(() => {
        const generateSudoRandomOrderId = () => {
            const characters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
            const random = Array.from({ length: orderIdLength }, () => characters.charAt(Math.floor(Math.random() * characters.length)));
            const randomString = random.join("");
            setOrderId(randomString);
        };
        generateSudoRandomOrderId();
    }, [orderId.length === 0]);
    return (
        <div className="container-fluid" style={{ marginTop: 24, zIndex: 0, position: "absolute" }}>
            <div style={{ textAlign: "center" }}>
                <div style={{ color: "green", fontSize: 21 }}>Your order is placed successfully! Yay!{""}</div>
                <div style={{ fontSize: 21, fontWeight: "600", color: "#595959" }}>OrderId: {orderId}</div>
            </div>
            <div style={{ fontSize: 18, color: "#595959", textAlign: "center", marginTop: 48 }}>Below is the QR code, download it!</div>
            <div style={{ height: "auto", margin: "0 auto", marginTop: 12, maxWidth: 256, width: "100%" }}>
                <QRCode size={256} style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={orderId} viewBox={`0 0 256 256`} />
            </div>
            <div className="center-align m-top-48">
                <Link to="/">
                    <button className="btn  btn-outline-success con-can-button">Book More</button>
                </Link>
            </div>
        </div>
    );
};

export default ReviewOrder;