var template = require('../views/index.marko');
var api = require('../lib/api.js');
var m = require('mithril');
var render = require('mithril-node-render');
var TwitterComponent = require('../public/javascripts/app.js');


//GET index page

var getServerSideData = function(req){
	var userName = req.params.user || "javascript" 
	return new Promise(function(resolve,reject){
		api.fetchUserData(userName).then(function(response){
			//Server side rendered HTML from Isomorphic Mithril JS
			var userData = response.data;
			var twitter_component_html = render(m.component(TwitterComponent,userData));
			resolve({
				serverside_rendered_html : twitter_component_html,
				userData : userData
			})
		})
		
	})
}

exports.index = function(req, res){	
	//Stream HTML - Chunked Encoding for better TTFB
	template.stream({
		promiseData: getServerSideData(req)
	})
	.pipe(res);
};