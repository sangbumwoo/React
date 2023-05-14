import React from 'react';

export interface ITodoItemComponentProps {
    todoItem: string;
    todoItemIndex: number;
    deleteItem(index:number): void;
}

const TodoItemComponent: React.FunctionComponent<ITodoItemComponentProps> = ({todoItem, deleteItem, todoItemIndex}) => {
    return (
        <div className="todo-item d-flex justify-content-between">
            {todoItem} <button onClick={() => deleteItem(todoItemIndex)}>삭제</button>
        </div>
    );
};

export default TodoItemComponent;
