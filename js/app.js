var APP = (function () {
	
	var ret = {};
	
	// Start this bad dude up
	ret.init = function () {
		$('#conferenceinfo h2').fitText(0.68);
		$('#conferenceinfo h3').fitText(1.3);
	};
	
	return ret;
}());

$(document).ready(APP.init);