import React from 'react';
import { addTodo } from '../../../../Utils/api';
import LoadingSpinner from '../../../LoadingSpinner';
import { useUser } from '@clerk/clerk-react';
import { successMessage } from '../../../../Utils/handlers';

const AddTodo = React.memo(({ setTodosData }) => {

    const { user } = useUser();

    const [isLoading, setIsLoading] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const inputRef = React.useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoading) {
            try {
                setIsLoading(true);
                const response = await addTodo({ title: value, owner: 'mustafacoder9@gmail.com' });
                setTodosData((oldData) => {
                    return [response.data, ...oldData];
                })
                inputRef.current.value = ''
                successMessage(`Todos added successfully`)
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
                setValue(null);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className='add-todo p-3 bg-[#32133b] rounded-md flex gap-3'>
            {/* Input */}
            <input
                type='text'
                id='addTodo'
                required
                onChange={handleChange}
                autoComplete='off'
                disabled={!user}
                ref={inputRef}
                name='addTodo'
                title={!user ? `Please sign up for using` : ''}
                placeholder='Enter Todo Text...'
                className={`p-2 rounded-md focus:outline-none flex-1 bg-transparent border border-[#6e0c8d] ${!user && 'cursor-not-allowed'}`}
            />
            {/* Button */}
            <button
                type='submit'
                aria-label='Add Todo'
                title={!user ? `Please sign up for using` : `Add one`}
                disabled={!user || isLoading}
                className={`bg-[#6e0c8d] py-2 px-4 rounded-md ${user && 'sm:hover:bg-[#6e0c8d]/50'} transition ${!user && 'cursor-not-allowed'}`}
            >
                {
                    isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        `Add`
                    )
                }
            </button>
        </form>
    )
})

export default AddTodo;