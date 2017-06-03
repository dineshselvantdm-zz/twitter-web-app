var m = require("mithril");

var TimelineComponent = {

	controller: function(data){

	},

	view: function(ctrl,args){
		return m(".gridCell.size2of4.size4of4",[
			m(".profileHead",[
				m(".profileHead__content",[
					m("ul.profileHead__content__list",[
						TwitterComponent.profileHeadings.map(function(profileHeading){
							return m("li.profileHead__content__list__item",profileHeading)
						})
					])
				])
			]),
			m(".timeline",[
				m("ol.timeline__list",[
					TwitterComponent.tweets.map(function(tweet){
						return m("li.timeline__list__item",[
							m(".timeline__list__item__content",[
								m(".timeline__list__item__content__header",[
									m("div",[
										m("img.timeline__list__item__content__header__img",{
											src:TwitterComponent.profileHeadImg
										}),
										m("span.timeline__list__item__content__header__name",TwitterComponent.profileHeadName),
										m("span.timeline__list__item__content__header__sideName",TwitterComponent.profileHeadAtName),
										m("span.timeline__list__item__content__header__sideName",tweet.duration)
									])
								]),
								m(".timeline__list__item__content__tweet",[
									m("p.timeline__list__item__content__tweetText",tweet.text)
								]),
								m(".timeline__list__item__content__media",[
									tweet.image.length>0 ?
									m("img.timeline__list__item__content__media__img",{src:tweet.image}) : ""
								]),
								m(".timeline__list__item__content__footer",[
									m(".timeline__list__item__content__footer__icon",[
										m("span.timeline__list__item__content__footer__icon__reply")
									]),
									m(".timeline__list__item__content__footer__icon",[
										m("span.timeline__list__item__content__footer__icon__retweet"),
										m("span.timeline__list__item__content__footer__icon__count",tweet.retweetCount)
									]),
									m(".timeline__list__item__content__footer__icon",[
										m("span.timeline__list__item__content__footer__icon__like"),
										m("span.timeline__list__item__content__footer__icon__count",tweet.likeCount)
									]),
									m(".timeline__list__item__content__footer__icon",[
										m("span.timeline__list__item__content__footer__icon__msg")
									])
								])
							])
						])
					})
				])
			])
		])
	}	

}

module.exports = {
  view : TimelineComponent.view,
  controller : TimelineComponent.controller
}