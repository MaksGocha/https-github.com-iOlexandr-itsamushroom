$(function() {
	const $block = $('.header');
	if (!$block.length) {
		return;
	}
	const $menuLink = $(this).find('.header__menu-link');

	$menuLink.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000);
	});
});
