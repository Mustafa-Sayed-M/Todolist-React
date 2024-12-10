import React from 'react'
import FeaturedAction from './Components/FeaturedAction';
import UpdateAction from './Components/UpdateAction';
import DeleteAction from './Components/DeleteAction';

function Actions({ todoData, setTodosData }) {
    return (
        <div className='actions'>
            {/* Actions Container */}
            <div className='actions-container flex items-center gap-1'>
                {/* Update Action */}
                <UpdateAction todoData={todoData} setTodosData={setTodosData} />
                {/* Featured Action */}
                <FeaturedAction todoData={todoData} setTodosData={setTodosData} />
                {/* Delete Action */}
                <DeleteAction todoData={todoData} setTodosData={setTodosData} />
            </div>
        </div>
    )
}

export default Actions;