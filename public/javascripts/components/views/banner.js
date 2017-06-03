var m = require("mithril");

var BannerComponent = {

	controller: function(data){
	},
	view: function(ctrl,args){
		return m(".banner",[
			m("div",[
				m("img.banner__img",{src:TwitterComponent.bannerImg}),
				m(".container",[
					m(".avatar",[
						m("img.avatar__img",{src: TwitterComponent.avatarImg})
					])
				])
			])
		])
	}	
}

module.exports = {
  view : BannerComponent.view,
  controller : BannerComponent.controller
}