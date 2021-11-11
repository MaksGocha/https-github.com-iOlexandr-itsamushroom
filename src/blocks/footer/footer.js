$(function() {
	const $block = $('.footer');
	if (!$block.length) {
		return;
	}
	const $year = $(this).find('.footer__copyright-year');
	const date = new Date();

	$year.text(date.getFullYear());
});
