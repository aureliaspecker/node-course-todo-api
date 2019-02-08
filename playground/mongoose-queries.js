//Queries: https://mongoosejs.com/docs/queries.html

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c5d1f6f11eedb7d17375d0111';

// ObjectID.isValid returns true if our ID is valid and false if it isn't

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({                 //returns an array of objects
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({              //returns the document object
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// When the collection you're looking for isn't in the database, it won't throw an error; instead it returns null (or an empty array in the case of the first example)

var userId = '5c57e2c5acfbe47f09626b4b';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));