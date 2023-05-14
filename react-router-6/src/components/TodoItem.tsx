import React from 'react';

export interface ITodoItemComponentProps {
    todoItem: string;
    todoItemIndex: number;
    deleteItem: any;
}

const TodoItemComponent: React.FunctionComponent<ITodoItemComponentProps> = (props) => {
    return (
        <div className="todo-item d-flex justify-content-between">
            {props.todoItem} <button onClick={() => props.deleteItem(props.todoItemIndex)}>삭제</button>
        </div>
    );
};

export default TodoItemComponent;
