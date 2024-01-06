import React, { useState } from 'react';

const CreateTodo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md m-10">
            <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 mb-4 border rounded-md"
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Description"
                className="w-full px-4 py-2 mb-4 border rounded-md"
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={async () => {
                    await fetch('http://localhost:3000/todo', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(async (res) => {
                            const json = await res.json();
                            alert('Todo added!!');
                        });
                }}
            >
                Add a Todo
            </button>
        </div>
    );
};

export default CreateTodo;
