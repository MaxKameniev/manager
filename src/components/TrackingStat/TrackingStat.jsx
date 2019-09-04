import React from 'react';

import { calcConsts, status } from '../../constants/text';
import style from './TrackingStat.css';

export const TrackingStat = ({ data, totalSum }) => {
    const {backMoneyTitle, backSum, stateField, shipedParcel, shipedParcelTitle} = calcConsts;

    return (
        <div className={style.wrapper}>
            <div className={style.details}>
                {backMoneyTitle} - {totalSum(data, backSum, stateField, status.parcelRecived)};
            </div>
            <div className={style.details}>
                {shipedParcelTitle} - {totalSum(data, shipedParcel, stateField, status.parcelRecived)};
            </div>
        </div>
    );
};