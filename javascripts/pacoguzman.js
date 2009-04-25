var Pacoguzman = {
	initialize: function() {
		this.pacoguzman_nav.initialize();
	},
	pacoguzman_nav: {
		opened: false,
		initialize: function() {
			var port = this;
			$('.pacoguzman_nav_open').click(function() {
				if (port.opened) {
					port.close();
				} else {
					port.open();
				}
			});
			$('.pacoguzman_nav_close').click(function() {
				port.close();
			});
		},
		open: function() {
			this.initial_top = $('#logo').css('top');
			$('#logo').animate({'top': '0px'}, 400);
			$('#pacoguzman_nav').slideDown(400, function() {
				$('.pacoguzman_nav_close').slideDown();
			});
			this.opened = true;
		},
		close: function() {
			$('.pacoguzman_nav_close').hide();
			$('#logo').animate({'top': this.initial_top}, 400);
			$('#pacoguzman_nav').slideUp(400);
			this.opened = false;
		}
	}
};


$(function() {
	Pacoguzman.initialize();
})
