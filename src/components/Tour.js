import React from 'react';
import { Stars } from './Stars'

export const Tour = ({tour}) => {
    return (
        <div className={`tour mb-2 mb-sm-3 mb-md-4 ${tour.isSpecialOffer ? " special" : ""}`}>
            <div className="row">
                <div className="col-12 title-container">
                    {tour.isSpecialOffer ? <span className="special">Special Offer</span> : null}
                    <h6 className="title p-2" dangerouslySetInnerHTML={{__html: tour.title}}/>
                </div>
            </div>
            <div className="row rating-and-price py-2 px-4">
                <div className="col-6 rating">
                    <Stars rating={tour.rating}/>
                    <span>Rating <strong>{tour.rating}</strong></span>
                </div>
                <div className="col-6 price">
                    <p className="">
                        Price: {tour.currency}{tour.price}
                    </p>
                </div>
            </div>
        </div>
    )
}
