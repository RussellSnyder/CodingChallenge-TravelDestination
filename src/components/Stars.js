import React from 'react';

export const Stars = ({rating}) => {
    let coverStyle = {
        width: (100 - rating * 20) + '%'
    }
    return (
        <div className="stars">
            <div className="cover" style={coverStyle}></div>
            <i className="fa fa-star"/>
            <i className="fa fa-star"/>
            <i className="fa fa-star"/>
            <i className="fa fa-star"/>
            <i className="fa fa-star"/>
        </div>
    )
}