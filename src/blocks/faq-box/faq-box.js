$(function() {
	const $block = $('.faq-box');
	if (!$block.length) {
		return;
	}
	const $toggle = $block.find('.faq-box__item-head');
	$toggle.on('click', function(e) {
		const $parent = $(this).closest('.faq-box__item');
		const $drop = $parent.find('.faq-box__item-drop');
		if ($parent.is('.active')) {
			$parent.removeClass('active');
			$drop.slideUp(200);
		} else {
			$parent.addClass('active');
			$drop.slideDown(200);
		}
	});
});
