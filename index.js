// taskkill /F /IM node.exe

const express = require('express');
const port = 7500;

const db = require('./config/mongoose');
const ToDo = require('./models/todoSchema');

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.get('/', function(req, res){
    ToDo.find({}, function(err, tasks){
        if (err){
            console.log(`There was an error in fetching the task from the database: ${err}`);
        }
        console.log(`The task is successfully fetched from the database.`);
        return res.render('home', {
            title: "TODO",
            todo_list: tasks
        });
    });
    
});

app.post('/create-task', function(req, res){
    ToDo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate,
    }, function(err, taskList){
        if (err){
            console.log("There was an error in connecting the server to the database:", err);
        }
        console.log("The task has been successfully added to the database:", taskList);
        
        return res.redirect('back');
    });
});

app.get('/delete-task', function(req, res){
    let id = req.query.id;
    ToDo.findByIdAndDelete(id, function(err){
        if (err){
            console.log(`The task has been successfully deleted from the server ${err}`);
        }
        return res.redirect('back');
    })
})


// app.get('/', function(req, res){
//     return res.render('home', {
//         todo_list: todoList
//     });
// });

// app.post('/create-task', function(req, res){
//     todoList.push(req.body);
//     return res.redirect('/');
// });

// app.get('/delete-task/', function(req, res){
//     let description = req.query.description;
//     let deleteTask = todoList.findIndex(task => task.description == description);

//     if (deleteTask != -1){
//         todoList.splice(deleteTask, 1);
//     };
//     return res.redirect('back');
// });

app.listen(port, function(err){
    if (err){
        console.log(`There's an error in connecting to the server: ${err}`);
        return
    }
    console.log(`The server is up and running at the port: ${port}`);
});