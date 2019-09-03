import React from 'react';
import Task from '../../components/Task';
import style from './Tasklist.css';

export const Tasklist = () => {
    return (
        <div className={style.block}>
            <div></div>
            <ul>
                <Task/>
            </ul>
        </div>
    );
};