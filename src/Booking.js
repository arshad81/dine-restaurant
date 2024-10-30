import React from 'react';
import {Link } from "react-router-dom";
const Booking = () => {
    return(
        <section className="booking-section">
            <div className="booking-section-header">
                <p className="booking-header-title">dine</p>
                <p className="booking-header-text">Reservations</p>
                <p className="booking-header-text-description">We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
                <button className="booking-btn">Reserve Place</button>
            </div>
            <div className="booking-form-div">
                <div>
                <input type="text" required placeholder="Name"/>
                <input type="email"  placeholder="Email"/>
                <p>Pick A Date</p>
                <input type="date"/>
                <p>Pick A Time</p>
                <input type="time"/>
                <input type="number" placeholder="Number of People"/>
                <Link to="/bookingCompleted">
                    <button className="submit-btn">Make reservation</button>
                </Link>
                </div>
            </div>
            <div>

            </div>
            <div className="footer-div">
                <div className="address-div">
                    <p className="location-1">Marthwaite, Sedbergh </p>
                    <p className="location-2">Cumbria</p>
                    <p className="phone-no">+00 44 123 4567</p>
                </div>
                <div className="schedule-div">
                    <p className="schedule-text">Open Times</p>
                    <p className="schedule-weekdays">Mon - Fri: 09:00 AM - 10:00 PM</p>
                    <p className="schedule-weekends">Sat - Sun: 09:00 AM - 11:30 PM</p>
                </div>
            </div>
        </section>
    )
} 
export default Booking