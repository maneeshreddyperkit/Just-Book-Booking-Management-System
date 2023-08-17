import { DatePicker, Input } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import moment from "moment";
import { addNewShow } from "../redux/shows/showsThunk";
import { useDispatch } from "react-redux";
import { showToast } from "../utils/showToast";

const { TextArea } = Input;
const AddShows = () => {
    const [state, setState] = useState({
        location: "",
        audi: "",
        name: "",
        date: "",
        venue: "",
        time: "",
        vipPrice: "",
        firstClassPrice: "",
        secondClassPrice: "",
        promo: "",
        percentage: "",
        image: "",
    });
    const [selectedFile, setSelectedFile] = useState();
    const dispatch = useDispatch();

    const validate = () => {
        if (!state.location) {
            showToast("Please enter location");
            return false;
        }
        if (!state.audi) {
            showToast("Please enter Auditorium");
            return false;
        }
        if (!state.name) {
            showToast("Please enter Show Name");
            return false;
        }
        if (!state.image) {
            showToast("Please upload show image");
            return false;
        }
        if (!state.venue) {
            showToast("Please add venue");
            return false;
        }
        if (!state.description) {
            showToast("Please add description ");
            return false;
        }
        if (!state.time) {
            showToast("Please enter show timings");
            return false;
        }
        return true;
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        const formData = new FormData();
        formData.append("image", state.image);
        formData.append("name", state.name);
        formData.append("rating", 4.7);
        formData.append("venue", state.venue);
        formData.append("description", state.description);
        formData.append("time", state.time);
        formData.append("location", state.location);
        formData.append("audi", state.audi);

        // await dispatch(saveLocation(state.location, state.audi));
        await dispatch(addNewShow(formData));
        showToast("show added successfully!!", true);
        setState({
            location: "",
            audi: "",
            name: "",
            date: "",
            venue: "",
            time: "",
            vipPrice: "",
            firstClassPrice: "",
            secondClassPrice: "",
            promo: "",
            percentage: "",
            image: "",
        });
    };

    const handleInputChange = (e) => {
        const target = e.target.value;
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const onChange = (date, dateString) => {
        setState({ ...state, date: dateString });
    };

    return (
        <div className="container m-top-48">
            <div>
                <form onSubmit={onSubmitHandler}>
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Location:</label>
                        <Input className="col-3" style={{ fontSize: 16 }} name="location" value={state.location} onChange={handleInputChange} />
                    </div>
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Auditorium:</label>
                        <Input className="col-3" style={{ fontSize: 16 }} name="audi" value={state.audi} onChange={handleInputChange} />
                    </div>
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Show Name:</label>
                        <Input className="col-3" style={{ fontSize: 16 }} name="name" value={state.name} onChange={handleInputChange} />
                    </div>
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Venue:</label>
                        <Input className="col-3" style={{ fontSize: 16 }} name="venue" value={state.venue} onChange={handleInputChange} />
                    </div>
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Description:</label>
                        <TextArea className="col-4" style={{ fontSize: 16 }} name="description" value={state.description} onChange={handleInputChange} />
                    </div>
                    {/* <div className="row my-b-24">
                        <label className="col-2 labelText">Date:</label>
                        {/* <Input className="col-3" name="date" value={state.date} onChange={handleInputChange} /> */}
                    {/* <DatePicker value={state.date} style={{ maxWidth: 200 }} onChange={onChange} /> */}
                    {/* </div>  */}
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Time:</label>
                        <Input className="col-3" name="time" value={state.time} onChange={handleInputChange} />
                    </div>
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Price:</label>
                        <div className="col">
                            <div className="row" style={{ marginLeft: -24 }}>
                                <div className="col-2">
                                    <label>VIP</label>
                                    <Input name="vipPrice" value={state.vipPrice} onChange={handleInputChange} />
                                </div>
                                <div className="col-2">
                                    <label>First Class</label>
                                    <Input name="firstClassPrice" value={state.firstClassPrice} onChange={handleInputChange} />
                                </div>
                                <div className="col-2">
                                    <label>Second Class</label>
                                    <Input name="secondClassPrice" value={state.secondClassPrice} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Promo: </label>
                        <Input className="col-3" name="promo" value={state.promo} onChange={handleInputChange} />
                    </div>
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Percentage: </label>
                        <Input className="col-3" name="percentage" value={state.percentage} onChange={handleInputChange} />
                    </div>
                    <div className="row my-b-24">
                        <label className="col-2 labelText">Upload Image: </label>
                        <input
                            style={{ marginLeft: -14 }}
                            className="col-3"
                            type="file"
                            name="image"
                            onChange={(event) => {
                                setState({ ...state, image: event.target.files[0] });
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-success btn-lg" style={{ minWidth: 160, marginTop: 24 }}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddShows;