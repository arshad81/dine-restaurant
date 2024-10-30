import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer-section">
            <div className="reservation-div">
                <p className="reservation-text">Ready to make reservation?</p>
                <Link to="/booking" className="reservation-btn">
                <button className="btn reservation-btn">Book A Table</button>
                </Link>
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
        </div>
    )
}

export default Footer