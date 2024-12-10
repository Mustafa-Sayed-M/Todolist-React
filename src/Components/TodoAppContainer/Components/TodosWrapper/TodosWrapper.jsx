import React from 'react';
import TodoCard from './Components/TodoCard';

function TodosWrapper({ todosData, setTodosData }) {
    return (
        <div className='todos-wrapper overflow-y-auto max-h-[350px] '>
            <div className='todos space-y-2'>
                {
                    todosData.map((todo, index) => (
                        <TodoCard key={index} todoData={todo} setTodosData={setTodosData} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodosWrapper;