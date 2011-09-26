var APP = (function () {
	
	var ret = {};
	
	// Start this bad dude up
	ret.init = function () {
		
		$('#conferenceinfo h2').fitText(0.68);
		$('#conferenceinfo h3').fitText(1.5);
		$('[role=banner] a h2').fitText(1.3, {
			'minFontSize': '19'
		});
		
		$('#conferenceinfo a').click(function (e) {
			var elem = $('<p />', {
				'class': 'registration-closed',
				text: 'We\'ll open up registration tomorrow, Sept. 26th at 1:00pm EST'
			})
			
			if ($('p.registration-closed').length === 0) {
				$(this).before(elem);
				
				setTimeout(function () {
					$('p.registration-closed').fadeOut(100, function () {
						$(this).remove();
					});
				}, 5000);
			}
			
			e.preventDefault();
		});
	};
	
	return ret;
}());

$(document).ready(APP.init);