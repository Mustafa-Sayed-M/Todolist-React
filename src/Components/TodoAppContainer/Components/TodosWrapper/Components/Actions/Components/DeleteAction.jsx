import React from 'react';
import { deleteTodo } from '../../../../../../../Utils/api';
import LoadingSpinner from '../../../../../../LoadingSpinner';
import { errorMessage, successMessage } from '../../../../../../../Utils/handlers';

function DeleteAction({ todoData, setTodosData }) {

    const { id, documentId } = todoData;

    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = async () => {
        if (!isLoading) {
            try {
                setIsLoading(true);
                await deleteTodo(documentId);
                setTodosData((oldState) => {
                    return oldState.filter(t => t.id !== id);
                });
                successMessage(`Todo deleted successfully`);
            } catch (err) {
                console.log(err);
                errorMessage(err);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <button
            type='button'
            aria-label='Delete Action'
            title={`Delete`}
            className='delete-action text-red-700 sm:hover:text-red-900 transition text-lg'
            onClick={handleClick}
        >
            {
                isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <i className={`fa-solid fa-trash fa-fw`}></i>
                )
            }
        </button>
    )
}

export default DeleteAction;