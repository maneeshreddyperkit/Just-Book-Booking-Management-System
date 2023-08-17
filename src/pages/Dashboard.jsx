import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { fetchAllLocations, fetchAllShows } from "../redux/shows/showsThunk";
import ShowCard from "../components/showCards";
import { ShowsSlice } from "../redux/shows";

const data = ["Bloomington", "IndianPolice", "Hawkins"]; //fetch this data from backend
const Dashboard = () => {
    const [selectedLocation, setSelectedLocation] = useState({
        name: "",
        audis: [],
    });
    const [selectedAudi, setSelectedAudi] = useState({
        name: "",
        shows: [],
    });

    const dispatch = useDispatch();
    const allShows = useSelector((state) => state.shows.allShows) || [];
    const allLocations = useSelector((state) => state.shows.allLocations) || [];
    const allLocationAudis = useSelector((state) => state.shows.allLocationAudis) || [];
    const allLocationAudiShows = useSelector((state) => state.shows.locationAudisShows) || [];

    useEffect(() => {
        getAllShows();
    }, [allShows.length === 0]);

    useEffect(() => {
        dispatch(ShowsSlice.actions.updateLocationAudis(selectedLocation));
    }, [selectedLocation]);

    const getAllShows = async () => {
        await dispatch(fetchAllShows());
        await dispatch(fetchAllLocations());
    };
    const handleSearch = async () => {
        dispatch(ShowsSlice.actions.updateLocAudiShows(selectedAudi));
        //make api call with parmas as location and audi to fetch shows
    };
    return (
        <>
            <div className="top-header">
                <div className="dropdown-btn">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {selectedLocation.name != "" ? selectedLocation.name : "Location"}
                        </button>
                        <ul className="dropdown-menu">
                            {allLocations.map((location) => (
                                <li
                                    key={location.name}
                                    className="dropdown-item"
                                    onClick={() => {
                                        setSelectedLocation({ name: location.name, audis: location.Audis });
                                    }}
                                >
                                    {location.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="dropdown-btn">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {selectedAudi.name != "" ? selectedAudi.name : "Auditorium"}
                        </button>
                        <ul className="dropdown-menu">
                            {allLocationAudis.name !== "" &&
                                allLocationAudis.map((audi) => (
                                    <li
                                        key={audi.name}
                                        className="dropdown-item"
                                        onClick={() => {
                                            setSelectedAudi({ name: audi.name, shows: audi.shows });
                                        }}
                                    >
                                        {audi.name}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <button className="btn btn-outline-primary" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <ShowCard shows={allLocationAudiShows.length > 0 ? allLocationAudiShows : allShows} />
        </>
    );
};

export default Dashboard;
