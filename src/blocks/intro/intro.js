import { gsap } from 'gsap';

$(function() {
	const $block = $('.intro');
	if (!$block.length) {
		return;
	}
	const $bg = $(this).find('.intro__bg');
	gsap.to($bg, { opacity: 1, duration: 0.5, ease: 'none' })
});
