var api = require('../lib/api.js');
module.exports = function(req, res){
	api.fetchUserData(req.query.user).then(function(response){
		res.send(response);
	})
};