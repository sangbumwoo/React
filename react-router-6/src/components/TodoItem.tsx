import React from 'react';

export interface ITodoItemComponentProps {
    todoItem: string;
}; 

const TodoItemComponent: React.FunctionComponent<ITodoItemComponentProps> = props => {
    return <div className='todo-item'>{ props.todoItem}</div>;
};

export default TodoItemComponent;