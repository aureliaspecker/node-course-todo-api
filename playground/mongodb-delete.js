//This will work with MongoDB module 2

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany (deletes all items that match the criteria)
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Aurelia'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne (delete the first item it sees that matches the criteria)
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c56f51876708b38566ce110')}).then((result) => {
        console.log(result);
    })

    // db.close();
});