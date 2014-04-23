$(document).ready(function () {
	$('p.expandable').expander({
		slicePoint: 1,
		expandText: '[+]',
		expandPrefix: ' ',
		userCollapseText: '[-]'
	});
});

/* meetup script */
!function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.async = true;
		js.src = "https://secure.meetup.com/890357987448484755600/script/api/mu.btns.js?id=1b4chjs7431ir4rkoadvf79h8m";
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, "script", "mu-bootjs");