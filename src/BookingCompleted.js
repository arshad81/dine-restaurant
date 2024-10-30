import React from 'react';
import {Link } from "react-router-dom";
const BookingCompleted = () => {
    return(
        <div className="completed-div">
            <p className="completed-text">Thanks for booking with us!</p>
            <Link to="/">
            <button className="completed-btn">Go Back</button>
            </Link>
        </div>
    )
}
export default BookingCompleted