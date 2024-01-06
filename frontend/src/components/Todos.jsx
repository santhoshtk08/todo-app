import React from 'react';

const Todos = ({ todos }) => {
    return (
        <div className="mt-8 space-y-4">
            {todos.map((todo) => (
                <div
                    key={todo._id}
                    className="bg-white p-4 rounded-md shadow-md flex justify-between items-center"
                >
                    <div>
                        <h1 className="text-xl font-bold">{todo.title}</h1>
                        <h2 className="text-gray-600">{todo.description}</h2>
                    </div>

                    <button
                        className={`${todo.completed
                                ? 'bg-green-500 text-white'
                                : 'bg-blue-500 text-white'
                            } px-4 py-2 rounded`}
                        onClick={async () => {
                            await fetch('http://localhost:3000/completed', {
                                method: 'PUT',
                                body: JSON.stringify({
                                    id: todo._id,
                                }),
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            });
                        }}
                    >
                        {todo.completed ? 'Completed' : 'Mark as Complete'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Todos;
