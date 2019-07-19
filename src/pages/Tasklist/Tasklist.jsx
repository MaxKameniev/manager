import React from 'react';
import Task from '../../components/Task';
import './Tasklist.css';

export const Tasklist = () => {
    return (
        <div className="tasklist_blc">
            <div></div>
            <ul>
                <Task/>
            </ul>
        </div>
    );
};