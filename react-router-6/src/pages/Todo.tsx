import React, { useState } from 'react';
import TodoBoardComponent from '../components/TodoBoard';

export interface ITodoPageProps {}
// export interface TList {
//     // id: number;
//     text: string;
//     // completed: boolean;
// }

const TodoPage: React.FunctionComponent<ITodoPageProps> = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState<string[]>([]);
    const onChange = (e: any) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    };
    //  const newTodo: TList = {
    //      text: inputText,
    //  };
    const addTodo = () => {
        setTodoList([...todoList, inputValue]);
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addTodo}>추가</button>
            <TodoBoardComponent todoList = {todoList} />
        </div>
    );
};

export default TodoPage;
