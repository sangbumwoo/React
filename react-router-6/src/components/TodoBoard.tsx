import React from 'react';
import TodoItem from './TodoItem';

export interface ITodoBoardComponentProps {
    todoList: string[],
    deleteItem: any,
}; 

const TodoBoardComponent: React.FunctionComponent<ITodoBoardComponentProps> = props => {
    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item, index) => (
                <TodoItem key={Date.now() + index} deleteItem={props.deleteItem} todoItem={item} todoItemIndex={index} />
            ))}
        </div>
    );
};

export default TodoBoardComponent;