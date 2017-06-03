var m = require("mithril");

var SideBarComponent = {

	controller: function(data){
		this.tweet= function(){
			var tweetText = document.querySelector('.sideBar__composeTweet__input').value;
			if(tweetText.length>0){
				var tweetObj = {
					text : tweetText,
					image : "",
					retweetCount : "0",
					likeCount : "0"
				};
				TwitterComponent.tweets.unshift(tweetObj);
				document.querySelector('.sideBar__composeTweet__input').value = "";
			}
		}
	},
							
	view: function(ctrl,args){
		return m(".gridCell.size1of4.size4of4",[
			m(".sideBar",[
				m("h1.sideBar__profileName",TwitterComponent.profileName),
				m("h2.sideBar__profileAtName",TwitterComponent.profileAtName),
				m("p.sideBar__profileContent",TwitterComponent.profileContent),
				m(".sideBar__profileLocation",[
					m("span.iconGeo"),
					m(".sideBar__profileLocation__name",TwitterComponent.profileLocationName)
				]),
				m(".sideBar__profileURL",[
					m("span.iconURL"),
					m(".sideBar__profileLocation__name",[
						m("a.sideBar__profileLocation__name__url",{href:"/"},TwitterComponent.profileLocationURL)
					])
				]),
				m(".sideBar__joinDate",[
					m("span.iconDate"),
					m(".sideBar__profileLocation__name",TwitterComponent.profileJoinDate)
				]),
				m(".sideBar__composeTweet",[
					m(".sideBar__composeTweet__head","What's happening?"),
					m("textarea.sideBar__composeTweet__input"),
					m(".sideBar__composeTweet__btnWrap",[
						m("button.sideBar__composeTweet__btnWrap__btn",{onclick: ctrl.tweet.bind(this)},[
							m("span.iconTweet"),
							m("span","Tweet")
						])
					])
				])
			])	
		])
	}	
}

module.exports = {
  view : SideBarComponent.view,
  controller : SideBarComponent.controller
}