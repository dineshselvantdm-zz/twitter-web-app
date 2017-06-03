//Twitter View will be converted to HTML 
//if no errors during conversion, snapshot will be taken and saved in 
//jest_*,__snapshots__ folder
//For any change in code, test case will fail and 
//prompts thhe developer to accept the change to pass test case

var m = require("mithril");
var render = require('mithril-node-render');
var tidy = require("tidy-html5").tidy_html5;
var userData = require("./stubs/userModel.js");
var TwitterComponent = require("../public/javascripts/app.js");

describe("Twitter View", function () {		
	it("Should render the twitter view for user", function () {
		var html = render(m.component(TwitterComponent,userData))	
		return expect(tidy(html, { "indent": true, "tidy-mark": false })).toMatchSnapshot();
	})
});