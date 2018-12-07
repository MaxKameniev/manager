import React, { Component } from 'react';
import { TaskContext } from '../Context/Context';

class Editform extends Component {

    render() {
        return (

            <div className="form_wrapper">
                <TaskContext.Consumer>
                    {(context) => (
                        <form action="" onSubmit={(event) => {context.editTask(event); context.editForm()}}>
                        {context.state.tasks.map(el => 
                            el.id === context.state.editId ? 
                            <div>
                            <div className="form_task-type">
                                <span className="form_task-tt">Тип задачи:</span>
                                <select id="editTypeOfTask" value={el.category_title}>
                                    <option>Возврат</option>
                                    <option>Оплата</option>
                                    <option>Вопрос</option>
                                    <option>Брак</option>
                                </select>
                            </div>
                            <div className="form_task-title">
                                <span className="form_task-tt">Заголовок:</span>
                                <input type="text" id="editTaskTitle" value={el.title}/>
                            </div>
                            <div className="fotm_task-text">
                                <textarea className="form_textarea" id="editTaskText" cols="60" rows="10" value={el.text}></textarea>
                            </div>
                            <button type="submit" className="form_submit-button">Отправить</button>
                            </div>
                            : null
                        )}
                        </form>
                    )}
                </TaskContext.Consumer>
            </div>

        );
    };
};

export default Editform;