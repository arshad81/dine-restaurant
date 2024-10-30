import React from 'react';

const Features = () => {
    return(
        <section className="feature-section">
            <div className="feature-div">
                <img className="feature-mobile-img" alt='Enjoyable place' width="327" height="400" src="/images/homepage/enjoyable-place-mobile@2x.jpg "></img>
                <img className="feature-desktop-img" alt='Enjoyable place' src="/images/homepage/enjoyable-place-desktop@2x.jpg"></img>
                <div className="feature-div-text">
                    <p className="feature-heading">Enjoyable place for all the family</p>                
                    <p className="feature-text">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>
            </div>
            <div className="feature-div feature-reverse-div">
                <img className="feature-desktop-img feature-img-desktop-reverse" alt='locally sourced' src="/images/homepage/locally-sourced-desktop@2x.jpg"></img>
                <img className="feature-mobile-img feature-img-reverse" width="327" height="400" alt='locally sourced' src="/images/homepage/locally-sourced-mobile.jpg"></img>
                <div className="feature-div-text feature-div-text-reverse">
                    <p className="feature-heading feature-heading-reverse">Enjoyable place for all the family</p>
                    <p className="feature-text feature-text-reverse">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>
            </div>
        </section>
    )
}
export default Features;