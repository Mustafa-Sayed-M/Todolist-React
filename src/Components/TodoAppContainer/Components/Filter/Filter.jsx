import { useUser } from '@clerk/clerk-react';
import React from 'react';

const Filter = React.memo(({ sort, setSort }) => {

    const { user } = useUser();

    if (!user) return;

    const handleClick = (e) => {
        setSort(e.target.dataset.sort);
    };

    return (
        <div className='filter flex items-center max-sm:flex-col gap-2'>
            {/* Published Date */}
            <button
                type='button'
                onClick={handleClick}
                data-sort='createdAt'
                title='Sort your todos by published date'
                className={`bg-[#32133b] rounded-md p-3 max-sm:w-full sm:flex-1 transition ${sort === 'createdAt' ? 'bg-[#6e0c8d]' : 'sm:hover:bg-[#6e0c8d]'}`}
            >
                Published Date
            </button>
            {/* Completed */}
            <button
                type='button'
                onClick={handleClick}
                data-sort='completed'
                title='Sort your todos by completed'
                className={`bg-[#32133b] rounded-md p-3 max-sm:w-full sm:flex-1 transition ${sort === 'completed' ? 'bg-[#6e0c8d]' : 'sm:hover:bg-[#6e0c8d]'}`}
            >
                Completed
            </button>
            {/* Featured */}
            <button
                type='button'
                onClick={handleClick}
                data-sort='featured'
                title='Sort your todos by featured'
                className={`bg-[#32133b] rounded-md p-3 max-sm:w-full sm:flex-1 transition ${sort === 'featured' ? 'bg-[#6e0c8d]' : 'sm:hover:bg-[#6e0c8d]'}`}
            >
                Featured
            </button>
        </div>
    )
});

export default Filter;