const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');


//Removes all (with getting the docs back)
// Todo.remove({}).then((restult) => {
//     console.log(restult);
// })

// Find one and remove - also returns back the doc that has been deleted: 
// Todo.findOneAndRemove({_id: '5c5ef1e40b53ac0d2a58d478'}).then((todo) => {
    
// )};


// Find by ID and rmeoves
Todo.findByIdAndRemove('5c5ef1e40b53ac0d2a58d478').then((todo) => {
    console.log(todo)
});