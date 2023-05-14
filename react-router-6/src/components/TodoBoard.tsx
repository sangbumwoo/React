import React from 'react';
import TodoItem from './TodoItem';

export interface ITodoBoardComponentProps {
    todoList: string[],
    deleteItem: any,
}; 

const TodoBoardComponent: React.FunctionComponent<ITodoBoardComponentProps> = ({todoList, deleteItem}) => {
    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map((item, index) => (
                <TodoItem key={Date.now() + index} deleteItem={deleteItem} todoItem={item} todoItemIndex={index} />
            ))}
        </div>
    );
};

export default TodoBoardComponent;