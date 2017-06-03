
var usersData = require("./models/users.js") 
module.exports = {
	fetchUserData: function(user) {
		return new Promise(function(resolve, reject) {
			return resolve({data: usersData[user],status:200});
		})
	}
}