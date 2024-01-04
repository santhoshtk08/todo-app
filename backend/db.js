
const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://santhoshtk2001:nL6BFkkq8HBGIAOw@cluster0.c1qv3fb.mongodb.net/todo-app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}

