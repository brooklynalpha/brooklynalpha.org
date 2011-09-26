var APP = (function () {
	
	var ret = {},
		showRegMsg = function (e, targetElem) {
			var elem = $('<p />', {
				'class': 'registration-closed',
				text: 'We\'ll open up registration tomorrow, Sept. 27'
			})
			
			if ($('p.registration-closed').length === 0) {
				
				if (targetElem) {
					targetElem.before(elem);
				} else {
					$('[role=navigation]').prepend(elem);
				}
				
				setTimeout(function () {
					$('p.registration-closed').fadeOut(100, function () {
						$(this).remove();
					});
				}, 5000);
			}
			
			e.preventDefault();
		};
	
	// Start this bad dude up
	ret.init = function () {
		
		$('#conferenceinfo h2').fitText(0.68);
		$('#conferenceinfo h3').fitText(1.5);
		$('[role=banner] a h2').fitText(1.3, {
			'minFontSize': '19'
		});
		
		$('#conferenceinfo a').click(function (e) {
			var targetElem = $(this);
			showRegMsg(e, targetElem);
		});
		
		$('[role=banner] [role=navigation] a:last').click(showRegMsg);
	};
	
	return ret;
}());

$(document).ready(APP.init);