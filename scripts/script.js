$(document).on('ready', function () {

$('.accordion-toggle').parent().next().addClass('collapse').collapse('hide');

$('body').on('click.collapse-next.data-api', '[data-toggle=collapse-next]', function (e) {
  	$(this).parent().next().collapse('toggle');
});

$('.glyphicon-menu-up').on('click', function () {
	$('.accordion-toggle').parent().next().collapse('hide');
});

$('.glyphicon-menu-down').on('click', function () {
	$('.accordion-toggle').parent().next().collapse('show');
});

});
