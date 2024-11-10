const Todo = require("../models/todo");

exports.getAllTodos = (req, res) => {
  Todo.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};
exports.createTodo = (req, res) => {
  const { title, description, due_date } = req.body;
  const formattedDueDate = new Date(due_date).toISOString().split("T")[0];

  Todo.create(title, description, formattedDueDate, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Todo created successfully" });
  });
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, completed } = req.body;

  const updatedFields = {};
  if (title) updatedFields.title = title;
  if (description) updatedFields.description = description;
  if (due_date) updatedFields.due_date = due_date;
  if (completed !== undefined) updatedFields.completed = completed;

  Todo.update(id, updatedFields, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    console.log(err);
    res.status(200).json({ message: "Todo updated successfully" });
  });
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  Todo.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Todo delete successfully" });
  });
};
