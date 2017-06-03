//Isomorphic Javascript 
//MVC JS Framework
var m = require("mithril");
var BannerComponent = require("./components/views/banner.js");
var NavBarComponent = require("./components/views/nav_bar.js");
var SideBarComponent = require("./components/views/side_bar.js");
var TimelineComponent = require("./components/views/timeline.js");

//MVC Mithril Component for TwitterComponent

TwitterComponent = {
	init: function(data){
		TwitterComponent.bannerImg = data.bannerImg;
		TwitterComponent.avatarImg = data.avatarImg;
		TwitterComponent.navBarItems = data.navBarItems;
		TwitterComponent.profileName = data.profileName;
		TwitterComponent.profileAtName = data.profileAtName;
		TwitterComponent.profileContent = data.profileContent;
		TwitterComponent.profileLocationName = data.profileLocationName;
		TwitterComponent.profileLocationURL = data.profileLocationURL;
		TwitterComponent.profileJoinDate = data.profileJoinDate;
		TwitterComponent.profileHeadings = data.profileHeadings;
		TwitterComponent.profileHeadImg = data.profileHeadImg;
		TwitterComponent.profileHeadName = data.profileHeadName;
		TwitterComponent.profileHeadAtName = data.profileHeadAtName;
		TwitterComponent.tweets = data.tweets;
	},
	controller: function(data){
		TwitterComponent.init(data);
		TwitterComponent.users = data.users;
	},

	view: function(ctrl,args){
		return [
			m.component(BannerComponent),
			m.component(NavBarComponent),
			m(".mainContent",[
				m(".container",[
					m.component(SideBarComponent),
					m.component(TimelineComponent),
					m(".gridCell.size1of4")
				])
			])
		]	
	}	

}

module.exports = {
  view : TwitterComponent.view,
  controller : TwitterComponent.controller
}