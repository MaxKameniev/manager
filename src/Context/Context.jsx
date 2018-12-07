import React, { Component, createContext } from 'react';

export const TaskContext = createContext();

export default class ContextProvider extends Component {

    state = {
        tasks: [
            {id: 1, categoryId: 1, categoryTitle: "Возврат", title: 'Провести возврат', text: "Some text", status: 'new'},
            {id: 2, categoryId: 2, categoryTitle: "Оплата", title: 'Провести оплату', text: "Some text", status: 'new'},
            {id: 3, categoryId: 3, categoryTitle: "Брак", title: 'Обменять товар', text: "Some text", status: 'new'},
            {id: 4, categoryId: 4, categoryTitle: "Вопрос", title: 'Помогите разобраться', text: "Some text", status: 'new'}
        ],
        isOpenForm: false,
        isEditForm: false,
        editId: null
    }

    getMaxTaskId = () => {
       return this.state.tasks.reduce((acc, el) => el.id > acc ? el.id : acc, 0);
    }

    render() {
        console.log(this.state.tasks);
        return (
            <TaskContext.Provider value={{
                state: this.state,
                showForm: () => this.setState({
                    isOpenForm: !this.state.isOpenForm
                }),
                editForm: (id) => this.setState({
                    isEditForm: !this.state.isEditForm,
                    editId: id
                }),
                addTaskSubmit: event => {;
                    event.preventDefault();
                    const task = {
                        id: this.getMaxTaskId() + 1,
                        categoryTitle: event.target.categoryTitle.value,
                        title: event.target.taskTitle.value,
                        text: event.target.taskText.value
                    }
                    this.setState(prev => ({
                        tasks: [task, ...prev.tasks]
                     }));
                     event.target.taskTitle.value = '';
                     event.target.taskText.value = '';
                },
                editTask: (event) => {
                    
                }
            }}>
                {this.props.children}
            </TaskContext.Provider>
        );
    }
};