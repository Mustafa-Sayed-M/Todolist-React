import React from 'react';
import { updateTodo } from '../../../../../../../Utils/api';
import LoadingSpinner from '../../../../../../LoadingSpinner';
import { errorMessage, successMessage } from '../../../../../../../Utils/handlers';

function FeaturedAction({ todoData, setTodosData }) {

    const { id, documentId, featured } = todoData;

    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = async () => {
        if (!isLoading) {
            try {
                setIsLoading(true);
                await updateTodo(documentId, { featured: !featured });
                setTodosData((oldState) => {
                    return oldState.map((todo) => {
                        if (todo.id === id) {
                            return { ...todo, featured: !featured };
                        }
                        return todo;
                    });
                });
                successMessage(`Todo updated successfully`);
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
            aria-label='Featured Action'
            title={`Mark This Todo As ${featured ? 'UnFeatured' : 'Featured'}.`}
            className='featured-action text-yellow-700 sm:hover:text-yellow-900 transition text-lg'
            onClick={handleClick}
        >
            {
                isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <i className={`fa-${featured ? 'solid' : 'regular'} fa-star fa-fw`}></i>
                )
            }
        </button>
    )
}

export default FeaturedAction;