import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import AlertModal from "../components/AlertModal";
import Login from "../components/Login";
import { fetchSelectedShow } from "../redux/shows/showsThunk";

const DisplayShowDetails = ({}) => {
    const selectedShow = useSelector((state) => state.shows.selectedShow);
    const { email } = useSelector((state) => state.user);
    const id = window.location.pathname.split("/").length < 3 ? null : window.location.pathname.split("/")[2];
    const dispatch = useDispatch();
    useEffect(() => {
        if (id && !selectedShow) {
            dispatch(fetchSelectedShow(id));
        }
    }, [id, selectedShow]);

    if (!selectedShow) {
        return <></>;
    }

    const { name, rating, description, image, time, venue } = selectedShow;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4" style={{ marginTop: 48 }}>
                        <div style={{ fontSize: 28, color: "maroon" }}>
                            <i>{name}</i>
                        </div>
                        <div style={{ fontSize: 18, fontWeight: "400" }}>
                            <b>Rating: {rating}</b>
                        </div>
                        <div className="img-show" style={{ marginTop: 24 }}>
                            <img src={image} />
                        </div>
                        <div style={{ marginTop: 48, fontSize: 18 }}>
                            <b>Venue:</b> {venue}
                        </div>
                        <div style={{ marginTop: 6, marginBottom: 48, fontSize: 18 }}>
                            <b>Timing: </b>
                            {time}
                        </div>
                    </div>
                    <div className="col-5">
                        <div style={{ marginTop: 138, fontSize: 18 }}>{description}</div>
                    </div>
                </div>

                {email ? (
                    <Link to="/book">
                        <button type="button" className="btn btn-success">
                            Book
                        </button>
                    </Link>
                ) : (
                    <div type="button" className="btn btn-success">
                        <Login buttonText={"Book"} />
                    </div>
                )}
                {/* <button type="button" className="btn btn-success" data-bs-target="#staticBackdrop" data-bs-toggle="modal">
                    Book
                </button> */}
            </div>
        </>
    );
};

export default DisplayShowDetails;
