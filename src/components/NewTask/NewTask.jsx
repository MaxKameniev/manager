import React, { Component } from 'react';
import { TaskContext } from '../../Context/Context';

import style from './NewTask.css';

export default class NewTask extends Component {

    render() {
        return (
            <div className={style.form_wrapper}>
                <TaskContext.Consumer>
                    {(context) => (
                        <form action="" onSubmit={event => {context.addTaskSubmit(event); context.showForm()}}>
                            <div className={style.task_type}>
                                <span className={style.task_tt}>Тип задачи:</span>
                                <select name={style.categoryTitle}>
                                    <option>1</option>
                                </select>
                            </div>
                            <div className={style.task_title}>
                                <span className={style.task_tt}>Заголовок:</span>
                                <input type="text" name="taskTitle"/>
                            </div>
                            <div className={style.task_text}>
                                <textarea className={style.textarea} name="taskText" cols="60" rows="10"></textarea>
                            </div>
                            <button type="submit" className={style.submit_button}>Отправить</button>
                        </form>
                    )}
                </TaskContext.Consumer>
            </div>

        );
    };
};
