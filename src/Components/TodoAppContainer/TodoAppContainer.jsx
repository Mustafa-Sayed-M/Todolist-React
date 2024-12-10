import React from 'react';
import Header from './Components/Header/Header';
import AddTodo from './Components/AddTodo/AddTodo';
import TodosWrapper from './Components/TodosWrapper/TodosWrapper';
import Filter from './Components/Filter/Filter';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../../Utils/api';
import { useUser } from '@clerk/clerk-react';
import SkeletonTodos from '../Skeletons/SkeletonTodos';

function TodoAppContainer() {

    const { user } = useUser();

    const [todosData, setTodosData] = React.useState([]);
    const [sort, setSort] = React.useState('createdAt');

    // Fetch Todos:
    const todosQuery = useQuery({
        queryKey: ['todos', sort],
        queryFn: () => fetchTodos(user.primaryEmailAddress.emailAddress, sort),
        enabled: Boolean(user && true),
        staleTime: 1000 * 60 * 5,
    });

    React.useEffect(() => {
        console.log(todosQuery.data);

        if (todosQuery.data) setTodosData(todosQuery.data.data);
    }, [todosQuery.data]);

    return (
        <div className='todo-app-container backdrop-blur-sm w-full md:max-w-[600px] bg-[#22012b]/70 text-white p-5 rounded-md mx-auto space-y-3'>
            {/* Header */}
            <Header />
            {/* Add Todo */}
            <AddTodo setTodosData={setTodosData} />
            {/* Todos Wrapper */}
            {
                !user ? (
                    <p className='text-center opacity-80'>Please sign up for using</p>
                ) : todosQuery.isLoading ? (
                    <SkeletonTodos />
                ) : todosData.length === 0 ? (
                    <p className='text-center'>No todos added yet</p>
                ) : (
                    <TodosWrapper todosData={todosData} setTodosData={setTodosData} />
                )
            }
            {/* Filter */}
            <Filter sort={sort} setSort={setSort} />
        </div>
    )
}

export default TodoAppContainer;