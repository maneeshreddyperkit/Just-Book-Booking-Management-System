import React, { useState } from "react";
import "../App.css";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ShowsSlice } from "../redux/shows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ShowCard = ({ shows }) => {
    const [selectedShow, setSelectedShow] = useState();
    const dispatch = useDispatch();

    const proceedWithShow = (item) => {
        setSelectedShow(item);
        dispatch(ShowsSlice.actions.updatedSelectedShow(item));
    };
    console.log({ shows });
    return (
        <div className="displayShows">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={shows.length < 3 ? shows.length : 3}>
                {shows.length !== 0 &&
                    shows.map((item, index) => (
                        <SwiperSlide
                            style={{
                                width: 500,
                                height: 400,
                                textAlign: "center",
                            }}
                            key={index}
                        >
                            {item.name}
                            <Link to={`/show-details/${item.id}`} onClick={() => proceedWithShow(item)}>
                                <div className="img" style={{ cursor: "pointer" }}>
                                    <img src={item.image} />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default ShowCard;
