import React, { useState } from 'react'

const CreateTodo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input type="text"
                placeholder='title'
                onChange={(e) => {
                    setTitle(e.target.value)
                }} />
            <br />
            <br />

            <input type="text"
                placeholder='description'
                onChange={(e) => {
                    setDescription(e.target.value)
                }} />
            <br />
            <br />

            <button onClick={async() => {
                await fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            title: title,
                            description: description
                        }
                    ),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(async (res) => {
                        const json = await res.json();
                        alert("Todo added!!")
                    })
            }}>Add a Todo</button>
        </div>
    )
}

export default CreateTodo