//Check if all the keys in model matches with stub
//If not print that key
var api = require("../lib/api.js");
var stubUserData = require("./stubs/userModel.js");
describe("user model", function () {
	it("all the api keys should be in the stub", function () {
		var userName = "javascript";
		api.fetchUserData(userName).then(function(response){
			var apiUserData = response.data;
			Object.keys(apiUserData).forEach((key) => {
		      if (stubUserData[key] === undefined) {
		        console.log(`${key} not found`)
		        expect(stubUserData[key]).not.toBeUndefined();
		      }
		    })
		})    
	});
});

//Check if all the keys in stub matches with model
//If not print that key
describe("user stub", function () {
	it("all the stub keys should be in the api", function () {
		var userName = "javascript";
		api.fetchUserData(userName).then(function(response){
			var apiUserData = response.data;
			Object.keys(stubUserData).forEach((key) => {
		      if (apiUserData[key] === undefined) {
		        console.log(`${key} not found`)
		        expect(apiUserData[key]).not.toBeUndefined();
		      }
		    })
		})    
	});
});


//Keys are removed from stub and expects to fix each missed key
//Console .log will be shown in tests
//Check if all the keys in model matches with stub
//If not print that key

//Error should be
//console.log tests/model.test.js:50
//     bannerImg not found


var wrongStubUserData = require("./stubs/wrongUserModel.js");
describe("user error model", function () {
	it("bannerImg not found error should be displayed", function () {
		var userName = "javascript";
		return api.fetchUserData(userName).then(function(response){
			var apiUserData = response.data;
			Object.keys(apiUserData).forEach((key) => {
		      if (wrongStubUserData[key] === undefined) {
		        console.log(`${key} not found`)
		        expect(wrongStubUserData[key]).not.toBeUndefined();
		      }
		    })
		})    
	});
});
