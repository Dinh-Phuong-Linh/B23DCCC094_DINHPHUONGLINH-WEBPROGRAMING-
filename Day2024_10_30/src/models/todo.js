const db = require('../configs/database');

const Todo = {
    getAll: (callBack) =>{
        db.query('SELECT * FROM todos',callBack);
    },
    create: (title,description,due_date,callback)=>{
        db.query('INSERT INTO todos( title,description,due_date) VALUES (?,?,?)',[title,description,due_date],callback);
    },
    update: (id,title,description,completed,due_date,callback) =>{
        db.query('UPDATE todos SET title = ?,description = ?,due_date = ?,completed = ? WHERE id = ?',[title,description,due_date,completed,id],callback);
    },
    delete: (id,callback) =>{
        db.query('DELETE FROM todos WHERE id = ?',[id],callback);
    }
};

module.exports = Todo;
