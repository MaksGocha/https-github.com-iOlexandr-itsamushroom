$(function() {
	const observer = lozad('.lozad', {
		rootMargin: '100px 0px',
		threshold: 0.1,
		loaded: function(el) {
			$(el).trigger('mediaLoaded');
		}
	});
	observer.observe()
});
