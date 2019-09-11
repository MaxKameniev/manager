import React from 'react';
import moment from 'moment';

import { status, awesomeIcons, general } from '../../constants/text'; 
import style from './TrackingData.css';

export const TrackingData = ({ data, toShow }) => {

    const { 
        StateName,
        IntDocNumber,
        DateLastUpdatedStatus,
        RecipientDescription,
        RecipientContactPerson,
        BackwardDeliverySum,
    } = data;
    const { parcelArrived, refusalToReceive } = status;
    const { item, number, status_icon, recipientName, stateName, more_icon, green, red, money, yellow, orange } = style;
    const { currency, criticalPeriod, preCriticalPeriod } = general;

    const daysAfterArrived = moment(DateLastUpdatedStatus).fromNow(true);
    const arrivedParcel = StateName === parcelArrived;
    const refusedParcel =  StateName === refusalToReceive;

    return (
        <div className={item}>
            <div className={number}>
                {IntDocNumber}
                {BackwardDeliverySum
                    ? <span> - <span className={money}>{BackwardDeliverySum} {currency}</span></span>
                    : null}
            </div>
            <div className={recipientName}>
                {RecipientDescription === status.privat
                    ? RecipientContactPerson.slice(0, 30)
                    : RecipientDescription.slice(0, 30)
                }
            </div>
            <div className={stateName}>{StateName} - {DateLastUpdatedStatus.slice(0, 16)}</div>
            <i onClick={toShow} className={`${more_icon} ${awesomeIcons.info}`}></i>
            <div className={ 
                refusedParcel
                    ? `${red} ${status_icon}`
                    : arrivedParcel && (daysAfterArrived === criticalPeriod[0] || daysAfterArrived === criticalPeriod[1])
                        ? `${orange} ${status_icon}`
                        : arrivedParcel && daysAfterArrived === preCriticalPeriod
                            ? `${yellow} ${status_icon}`
                            : arrivedParcel && daysAfterArrived
                                ? `${green} ${status_icon}`
                                : null
            }>
                {arrivedParcel || refusedParcel
                    ? daysAfterArrived
                    : null
                }
            </div>
        </div>
    );
};