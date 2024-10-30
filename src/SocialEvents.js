import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SocialEvents = () => {

    const [familyGathering,setFamilyGathering] = useState(true)
    const [specialEvents,setSpecialEvents] = useState(false)
    const [socialEvents,setSocialEvents] = useState(false)

    const familyGatheringFunction = () => {
        setFamilyGathering(true)
        setSocialEvents(false)
        setSpecialEvents(false)
    }
    const specialEventsFunction = () => {
        setFamilyGathering(false)
        setSocialEvents(false)
        setSpecialEvents(true)
    }
    const socialEventsFunction = () => {
        setFamilyGathering(false)
        setSocialEvents(true)
        setSpecialEvents(false)
    }

    return(
        <section className="social-events-section">
            <div className="social-div">
                <div className="social-image-div">
                {
                    familyGathering ? 
                    <div>
                    <img className="social-img-mobile" alt='family gathering' width="326" height="400" src="/images/homepage/family-gathering-mobile.jpg"></img>
                    <img className="social-img-desktop" alt='family gathering' src="/images/homepage/family-gathering-desktop@2x.jpg"></img></div> :
                    specialEvents ?
                    <div>
                    <img className="social-img-mobile" alt='family gathering' src="/images/homepage/special-events-mobile.jpg"></img>
                    <img className="social-img-desktop" alt='family gathering' src="/images/homepage/special-events-desktop@2x.jpg"></img></div> :
                    socialEvents ?
                    <div>
                    <img className="social-img-mobile" alt='family gathering' src="/images/homepage/social-events-mobile.jpg"></img>
                    <img className="social-img-desktop" alt='family gathering' src="/images/homepage/social-events-desktop@2x.jpg"></img>
                    </div>
                    : <div></div>
                }
                </div>
                <div className="social-event-div">
                    <div className="social-event">
                        <p className="social-event-text" onClick={()=>{familyGatheringFunction()}}>FAMILY GATHERING</p>
                        <p className="social-event-text" onClick={()=>{specialEventsFunction()}}>SPECIAL EVENTS</p>
                        <p className="social-event-text" onClick={()=>{socialEventsFunction()}}>SOCIAL EVENTS</p>
                    </div>
                    <div>
                    {
                        familyGathering ?
                        <div>
                            <p className="social-event-header">Family Gathering</p>
                            <p className="social-event-description">We love catering for entire families. So please bring everyone along for a special meal with yourloved ones. We’ll provide a memorable experience for all.</p>
                        </div> :
                        specialEvents ?
                        <div>
                            <p className="social-event-header">Special Events</p>
                            <p className="social-event-description">Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you.We’ll be sure to mark your special date with an unforgettable meal.</p>
                        </div> :
                        socialEvents ?
                        <div>
                            <p className="social-event-header">Social Events</p>
                            <p className="social-event-description">Are you looking to have a larger social event? No problem! We’re more than happy to cater for bigparties. We’ll work with you to make your event a hit with everyone..</p>
                        </div> :
                        <div></div>
                    }
                    <Link to="/bookingCompleted">
                    <button className="btn social-event-btn">Book A Table</button>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SocialEvents