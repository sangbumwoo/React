import React from 'react';
import TodoItem from './TodoItem';

export interface ITodoBoardComponentProps {
    todoList: string[]
}; 

const TodoBoardComponent: React.FunctionComponent<ITodoBoardComponentProps> = props => {
    console.log(props.todoList);
    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item, index) => (
                <TodoItem key={Date.now() + index} todoItem={item} />
            ))}
        </div>
    );
};

export default TodoBoardComponent;