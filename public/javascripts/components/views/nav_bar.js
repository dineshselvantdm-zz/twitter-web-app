var m = require("mithril");

var NavBarComponent = {

	controller: function(data){
		this.switchUser = function(){
			var allowSwitch = true;
			if(allowSwitch){
				var e = document.querySelector(".navBar__accountsSelector");
				var userValue = e.options[e.selectedIndex].value.toLowerCase();
				allowSwitch=false;
				m.request({
					method: "GET",
					url: "/fetchUserData",
					data: {user: userValue}
				}).then(function(response) {
					if (response.status == 200) {
						TwitterComponent.init(response.data);
						history.replaceState({},'/'+userValue,'/'+userValue);
						allowSwitch = true;
					}
				})
			}
		}
	},

	view: function(ctrl,args){
		return m(".navBar",[
			m(".container",[
				m(".gridCell.size1of4"),
				m(".gridCell.size2of4.size4of4",[
					m(".navBar__content",[
						m("ul.navBar__content__list",[
							TwitterComponent.navBarItems.map(function(navBarItem){
								return m("li.navBar__content__list__item",[
									m(".navBar__content__list__item__label",navBarItem.label),
									m(".navBar__content__list__item__val",navBarItem.value)
								])
							})	
						])
					])
				]),
				m(".gridCell.size1of4.size4of4.navbar__switch",[
					m("label.navBar__label","Switch User : "),
					m("select.navBar__accountsSelector",{onchange:ctrl.switchUser},[
						TwitterComponent.users.map(function(user){
							return m("option",{value:user},user)
						})
					])
				])
			])
		])
	}	
}

module.exports = {
  view : NavBarComponent.view,
  controller : NavBarComponent.controller
}