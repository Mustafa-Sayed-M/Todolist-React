import React from 'react';
import { updateTodo } from '../../../../../../../Utils/api';
import LoadingSpinner from '../../../../../../LoadingSpinner';

function UpdateAction({ todoData, setTodosData }) {

    const { id, documentId, featured } = todoData;

    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = async () => {
        if (!isLoading) {
            try {
                setIsLoading(true);
                const response = await updateTodo(documentId, { featured: !featured });
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
        <button
            type='button'
            aria-label='Update Action'
            title={`Update Todo Text`}
            className='update-action text-green-700 sm:hover:text-green-900 transition text-lg'
            onClick={handleClick}
        >
            {
                isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <i className={`fa-solid fa-pen-to-square fa-fw`}></i>
                )
            }
        </button>
    )
}

export default UpdateAction;