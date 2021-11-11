import { gsap } from 'gsap';

$(function() {
	const $block = $('.ticker-box');
	if (!$block.length) {
		return;
	}

	$block.each(function() {
		const $this = $(this);
		const $inner = $(this).find('.ticker-box__inner');
		const $item = $this.find('.ticker-box__item');
		
		$item.wrapAll("<div class='ticker-box__wrap'></div>");
		const $wrap = $this.find('.ticker-box__wrap');
		$inner.append($wrap.clone());

		gsap.to($inner, { x: -$wrap.width(), repeat: -1, duration: 60, ease: 'none' })
	});
});
