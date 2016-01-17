$('.content > dt').each(function (index) {
	if (index > 1) {
		$(this).next().addClass('hidden');
	} else {
		$(this).next().addClass('visible');
	}
});

var setHover = function (elt) {
	elt.hover(
	function() {
		$(this).css('color', 'gray');
	},
	function() {
		$(this).css('color', 'black');
	});
}

setHover($('.glyphicon'));

var setBlocks = function (areVisible) {
	$('.content > dt').each(function () {
	if (areVisible) {
		$(this).next().removeClass('hidden');
		$(this).next().addClass('visible');
	} else {
		$(this).next().removeClass('visible');
		$(this).next().addClass('hidden');
	}
});
}

$('.glyphicon-menu-up').on('click', function () {
	setBlocks(false);
});

$('.glyphicon-menu-down').on('click', function () {
	setBlocks(true);
});

setHover($('.content > dt'));

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
