var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	// console.log(data);
	// response.render('index', data);

	var parseObject = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "http://lorempixel.com/400/400/people",
	};

	data.friends.push(parseObject);

	console.log(parseObject);
	response.render('index', data);
};
