import React from 'react';

import { general, status, statistic } from '../../constants/text';
import style from './TrackingStat.css';

export const TrackingStat = ({ data, totalSum }) => {

    return (
        <div className={style.wrapper}>
            {statistic.map(el => 
                <div className={style.details} key={el.key}>
                    {el.title} - {totalSum(data, el.key, general.stateField, status.parcelRecived)};
                </div>
            )}
        </div>
    );
};