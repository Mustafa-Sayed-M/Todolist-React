import React from 'react';
import { updateTodo } from '../../../../../Utils/api';
import LoadingSpinner from '../../../../LoadingSpinner';
import Actions from './Actions/Actions';

const LabelTitle = ({ onClick, todoData }) => {

    const {
        title,
        completed
    } = todoData;

    return (
        <label className='flex items-center justify-center w-6 h-6 rounded-md border border-gray-400 cursor-pointer'>
            <input
                name={title.replaceAll('', '-')}
                onChange={onClick}
                checked={completed}
                type='checkbox'
                className='hidden peer'
            />
            <span className='block scale-0 peer-checked:scale-100'>
                <i className="fa-solid fa-check"></i>
            </span>
        </label>
    )
};

function TodoCard({ todoData, setTodosData }) {

    const {
        id,
        documentId,
        title,
        completed,
        createdAt
    } = todoData;

    const date = new Date(createdAt);

    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = async () => {
        if (!isLoading) {
            try {
                setIsLoading(true);
                const response = await updateTodo(documentId, { completed: !completed });
                setTodosData((oldState) => {
                    return oldState.map((todo) => {
                        if (todo.id === id) {
                            return { ...todo, completed: response.data.completed };
                        }
                        return todo;
                    });
                });
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className={`todo-card p-3 bg-[#32133b] rounded-md relative flex items-center gap-3 transition ${completed && 'bg-[#32133b]/70'}`}>
            {/* Content Container */}
            <div className='content-container space-y-2 flex-1'>
                {/* Title Container */}
                <div className='title-container flex items-center gap-3'>
                    {/* Title Text */}
                    {
                        isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <LabelTitle onClick={handleClick} todoData={todoData} />
                        )
                    }
                    {/* Title Text */}
                    <h1
                        onClick={handleClick}
                        className={`font-medium line-clamp-1 ${isLoading ? 'cursor-not-allowed' : 'sm:hover:opacity-70'} ${(completed && !isLoading) && 'line-through opacity-70'} cursor-pointer transition`}
                    >
                        {
                            isLoading ? (
                                'Updating...'
                            ) : title
                        }
                    </h1>
                </div>
                {/* Date Published */}
                <p className='text-sm opacity-70'>{date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric' })}</p>
            </div>
            {/* Actions */}
            <Actions todoData={todoData} setTodosData={setTodosData} />
        </div>
    )
}

export default TodoCard;