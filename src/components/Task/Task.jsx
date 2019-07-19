import React, { Component } from 'react';
import NewTask from '../NewTask/NewTask';
import Editform from '../Editform/Editform';
import { TaskContext } from '../../Context/Context';
import './Task.css';

export class Task extends Component {

    render() {
        return (
            <TaskContext.Consumer>
                {(context) => (
                    <div>
                        <div onClick={context.showForm}><i className="task_add far fa-plus-square"></i></div>
                        <div className={context.state.isOpenForm ? "task_form form_open" : "task_form form_close"}>
                            <NewTask />
                            <i onClick={context.showForm} className="close_icon far fa-times-circle"></i>
                        </div>
                        <div className={context.state.isEditForm ? "task_form form_open" : "task_form form_close"}>
                            <Editform />
                            <i onClick={context.editForm} className="close_icon far fa-times-circle"></i>
                        </div>
                        <div>
                            {context.state.tasks.map(el =>
                                <li className="task_item_blc">
                                    <i className="text_style_icon edit_icon fas fa-bars"></i>
                                    {el.category_id === 1
                                        ? <i className="text_style_icon back_icon fas fa-box-open"></i>
                                        : el.category_id === 2
                                            ? <i className="text_style_icon cash_icon fas fa-money-check-alt"></i>
                                            : el.category_id === 3
                                                ? <i className="text_style_icon warn_icon fas fa-exclamation-triangle"></i>
                                                : <i className="text_style_icon question_icon fas fa-question-circle"></i>}
                                    <div className="task_category">{el.category_title}</div>
                                    <div className="task_title">{el.title}</div>
                                    <div className="task_text">{el.text}</div>
                                    <div onClick={context.editForm.bind(this, el.id)}><i className="text_style_icon edit_icon fas fa-edit"></i></div>
                                </li>

                            )}
                        </div>
                    </div>
                )}
            </TaskContext.Consumer>
        );
    };
};