import React, { Component } from 'react';
import './NewTask.css';
import { TaskContext } from '../Context/Context';

export default class NewTask extends Component {

    state = {
        options: ['Возврат', 'Оплата', 'Вопрос', 'Брак'],
    }

    render() {
        return (
            <div className="form_wrapper">
                <TaskContext.Consumer>
                    {(context) => (
                        <form action="" onSubmit={event => {context.addTaskSubmit(event); context.showForm()}}>
                            <div className="form_task-type">
                                <span className="form_task-tt">Тип задачи:</span>
                                <select name="categoryTitle">
                                    {this.state.options(el => <option>{el}</option>)}
                                </select>
                            </div>
                            <div className="form_task-title">
                                <span className="form_task-tt">Заголовок:</span>
                                <input type="text" name="taskTitle"/>
                            </div>
                            <div className="fotm_task-text">
                                <textarea className="form_textarea" name="taskText" cols="60" rows="10"></textarea>
                            </div>
                            <button type="submit" className="form_submit-button">Отправить</button>
                        </form>
                    )}
                </TaskContext.Consumer>
            </div>

        );
    };
};
