$('.content > dt').each(function (index) {
	if (index > 1) {
		$(this).next().addClass('hidden');
	} else {
		$(this).next().addClass('visible');
	}
})

$('.content > dt').hover(
	function() {
		$(this).css('color', 'gray');
	},
	function() {
		$(this).css('color', 'black');
	});

$('.content > dt').on('click', function () {
	var block = $(this).next();
	if (block.hasClass('visible')) {
		block.removeClass('visible');
		block.addClass('hidden');
	} else {
		block.removeClass('hidden');
		block.addClass('visible');
	}
});