const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bdc68e37d2ea1869c1fbdc9';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id:id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id:id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

User.findById(id).then((user) => {
	if(!user)
		return console.log('User Id not found');
	console.log('User By Id', user);
}).catch((err) => console.log(err));