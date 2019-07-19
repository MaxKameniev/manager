import React from 'react';

export const TrackingDetails = ({isShow, toShow, data}) => {
    return (
        <div>
            {isShow
                ? <div className="track-details">
                    <i onClick={toShow} className="close_icon far fa-times-circle"></i>
                    <div>{data.RecipientContactPerson}</div>
                    <div>{data.RecipientContactPhone}</div>
                    <div>{data.CityRecipientDescription}</div>
                    <div>{data.RecipientAddressDescription}</div>
                </div>
                : null}
        </div>
    );
};