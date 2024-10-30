import React from 'react';
const Highlights = () => {
    return(
        <section className="highlight-section">
            <div className="highlight-div">
                <div className="highlight-text-div">
                    <p className="highlight-title">A few highlights from our menu</p>
                    <p className="highlight-text">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                </div>
                <div className="menu">
                    <div className="highlight-menu-card">
                        <div className="menu-img">
                            <img className="menu-image-mobile" alt='salmon' width="327" height="245" src="/images/homepage/salmon-mobile.jpg"></img>
                            <img className="menu-image-desktop" alt='salmon' src="/images/homepage/salmon-desktop-tablet@2x.jpg"></img>
                        </div>
                        <div className="menu-item-text">
                            <p className="menu-title-text">Seared Salmon Fillet</p>
                            <p className="menu-text">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                        </div>
                    </div>
                    <div className="highlight-menu-card">
                        <div className="menu-img">
                            <img className="menu-image-mobile" alt='beef' width="327" height="245" src="/images/homepage/beef-mobile.jpg"></img>
                            <img className="menu-image-desktop" alt='beef' src="/images/homepage/beef-desktop-tablet@2x.jpg"></img>
                        </div>
                        <div className="menu-item-text">
                            <p className="menu-title-text">Rosemary Filet Mignon</p>
                            <p className="menu-text">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                        </div>
                    </div>
                    <div className="highlight-menu-card">
                        <div className="menu-img">
                        <img className="menu-image-mobile" alt='beef' width="327" height="245" src="/images/homepage/chocolate-mobile.jpg"></img>
                        <img className="menu-image-desktop"alt='beef' src="/images/homepage/chocolate-desktop-tablet@2x.jpg"></img>
                        </div>
                        <div className="menu-item-text">
                            <p className="menu-title-text">Summer Fruit Chocolate Mousse</p>
                            <p className="menu-text">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights