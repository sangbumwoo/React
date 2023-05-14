import React, { useState } from 'react';
import TodoBoardComponent from '../components/TodoBoard';

export interface ITodoPageProps {}

const TodoPage: React.FunctionComponent<ITodoPageProps> = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState<string[]>([]);
    const onChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const addTodo = () => {
        setTodoList([...todoList, inputValue]);
    };

    const deleteItem = (index: number) => {
        const copyTodoList = [...todoList];
        copyTodoList.splice(index, 1);
        setTodoList(copyTodoList);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addTodo}>추가</button>
            <TodoBoardComponent todoList={todoList} deleteItem={deleteItem} />
        </div>
    );
};

export default TodoPage;
