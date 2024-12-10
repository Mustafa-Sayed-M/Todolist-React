const baseUrl = process.env.REACT_APP_BACKEND_API
const accessToken = process.env.REACT_APP_ACCESS_TOKEN

const options = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
    },
    method: 'GET',
};

export const fetchTodos = async (userEmail, sort) => {
    const url = `${baseUrl}/todos?filters[owner][$eq]=${userEmail}&sort=${sort}:desc`; // createdAt:desc
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
export const addTodo = async (values) => {
    const url = `${baseUrl}/todos`;
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            data: values
        }),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
export const updateTodo = async (todoId, values) => {
    const url = `${baseUrl}/todos/${todoId}`;
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({
            data: values
        }),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
export const deleteTodo = async (todoId) => {
    const url = `${baseUrl}/todos/${todoId}`;
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
};