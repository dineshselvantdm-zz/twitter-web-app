//Mount the component on client side
var m = require("mithril");
var TwitterComponent = require('./app.js');
module.exports = (function() {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {
        // document ready
		m.mount(document.getElementById('appContainer'), {
			controller: TwitterComponent.controller(userData),
			view: TwitterComponent.view
		});		
    }
    else setTimeout(arguments.callee, 100);
})();