const {SHA256} = require('crypto-js');

// To hash a message, all we have to do is pass it in the SHA256 function

var message = 'I am user number 2';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

// Hashing is a one-way algorithm: given this message, I am always going to get that hash back, but I cannot figure out the message if I only have the hash

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// Salting the hash means that you add something on to the hash that is unique that changes the value

// How to validate that the data wasn't manipulated

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do not trust.')
}

// JWT (JSON Web Token) does all of the above for you and handles all of the edge cases