import React from 'react';

const SkeletonAction = () => {
    return <div className='w-6 h-6 rounded-full bg-[#680385b3] animate-pulse'></div>
};

const SkeletonTodoCard = () => {
    return (
        <div className='skeleton-todo-card flex items-center gap-2 bg-[#32133b] animate-pulse p-3 rounded-md'>
            {/*  */}
            <div className='flex-1 space-y-2'>
                {/* Title */}
                <p className='h-3 rounded-md w-[100px] bg-[#680385b3] animate-pulse'></p>
                {/* Date */}
                <p className='h-3 rounded-md w-[45px] bg-[#680385b3] animate-pulse'></p>
            </div>
            {/* Actions */}
            <div className='flex items-center gap-1'>
                {/* Update */}
                <SkeletonAction />
                {/* Featured */}
                <SkeletonAction />
                {/* Delete */}
                <SkeletonAction />
            </div>
        </div>
    )
}

function SkeletonTodos() {
    return (
        <div className='space-y-2'>
            <SkeletonTodoCard />
            <SkeletonTodoCard />
            <SkeletonTodoCard />
            <SkeletonTodoCard />
        </div>
    )
}

export default SkeletonTodos;