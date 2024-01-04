import React from 'react'

const Todos = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={async()=>{
                            await fetch("http://localhost:3000/completed", {
                                method: "PUT",
                                body: JSON.stringify(
                                    {
                                        id:todo._id
                                    }
                                ),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                        }}>{todo.completed==true?"completed":"Mark as Complete"}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos