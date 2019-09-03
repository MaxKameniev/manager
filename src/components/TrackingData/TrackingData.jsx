import React from 'react';

import { status, awesomeIcons } from '../../constants/text'; 
import style from './TrackingData.css';

export const TrackingData = ({ data, toShow }) => {
    
    const { 
        StateName,
        IntDocNumber,
        DateLastUpdatedStatus,
        RecipientDescription,
        RecipientContactPerson
    } = data;
    const { parcelArrived, refusalToReceive} = status;
    const { item, number, status_icon, recipientName, stateName, more_icon, green, red } = style;

    return (
        <div className={item}>
            <div className={number}>{IntDocNumber}</div>
            <div className={
                StateName === parcelArrived
                    ? `${green} ${status_icon}`
                    : StateName === refusalToReceive
                        ? `${red} ${status_icon}`
                        : status_icon
            }>
            </div>
            <div className={recipientName}>
                {RecipientDescription === status.privat
                    ? RecipientContactPerson.slice(0, 30)
                    : RecipientDescription.slice(0, 30)
                }
            </div>
            <div className={stateName}>{StateName} - {DateLastUpdatedStatus.slice(0, 16)}</div>
            <i onClick={toShow} className={`${more_icon} ${awesomeIcons.info}`}></i>
        </div>
    );
};