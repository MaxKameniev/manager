import React from 'react';

import { awesomeIcons } from '../../constants/text'; 
import style from './TrackingDetails.css';

export const TrackingDetails = ({ isShow, toShow, data }) => {
    return (
        <div>
            {isShow
                ? <div className={style.track_details}>
                    <i onClick={toShow} className={`${style.close_icon} ${awesomeIcons.close}`}></i>
                    <div>{data.RecipientContactPerson}</div>
                    <div>{data.RecipientContactPhone}</div>
                    <div>{data.CityRecipientDescription}</div>
                    <div>{data.RecipientAddressDescription}</div>
                </div>
                : null}
        </div>
    );
};