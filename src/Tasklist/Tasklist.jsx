import React from 'react';
import Task from '../Task/Task';
import './Tasklist.css';

const Tasklist = () => {
    return (
        <div className="tasklist_blc">
            <div></div>
            <ul>
                <Task/>
            </ul>
        </div>
    );
};

export default Tasklist;