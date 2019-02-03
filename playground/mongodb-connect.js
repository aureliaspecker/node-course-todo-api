//This will work with MongoDB module 2


// ES6 destructuring: creating new variables from a property
// var user = {name: 'Andrew', age: 25};
// var {name} = user;
// console.log(name);

//The Mongo Client lets you connect to the server
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj)

//This will automatically create a database called TodoApp (by providing the path)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // }); //This automatically creates a new collection called Todos

    // db.collection('Users').insertOne({
    //     name: 'Aurelia',
    //     age: '25',
    //     location: 'London, UK'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});