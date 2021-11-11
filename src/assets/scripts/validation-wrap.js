$(function() {
	const $block = $('.validation-wrap');
	if (!$block) {
		return;
	}
	const $form = $block.find('form');
	const $this = $(this);

	$form.submit(function(e) {
		e.preventDefault();
		let validation = true;

		$(this).find('[required]').each(function() {
			let checked;
			if ($(this).val() === '') {
				validation = false;
				$(this).closest('.form-group').addClass('has-error');
			}
			if ($(this).is('[type="checkbox"]')) {
				checked = $(this).prop('checked');
				if (!checked) {
					validation = false;
					$(this).closest('.form-group').addClass('has-error');
				}
			}
		});

		$(this).find('input[type="email"]').each(function() {
			let emailReg;
			if ($(this).val() !== '') {
				emailReg = /^.+@.+\..+$/;
				if (!emailReg.test($(this).val())) {
					validation = false;
					$(this).closest('.form-group').addClass('has-error');
				}
			}
		});

		$(this).find('input[type="tel"]').each(function() {
			if (!$(this).inputmask('isComplete')) {
				validation = false;
				$(this).closest('.form-group').addClass('has-error');
			}
		});

		if (validation) {
			const $formWrap = $(this).closest('.validation-wrap');
			$formWrap.addClass('submitting');
			setTimeout(function() {
				$formWrap.removeClass('submitting').addClass('submitted');
			}, 1000);
			$(this).trigger('validation-submit', $(this));
		} else {
			$(this).trigger('validation-error', $(this));
		}
	});

	$(document).on('click focus', '.has-error input, .has-error textarea', function(e) {
		$(e.currentTarget).closest('.has-error').removeClass('has-error');
	});

	if ($this.find('.validation-wrap').hasClass('submitted')) {
		$this.find('form').get(0).reset();
	}

	$this.find('.has-error').removeClass('has-error');
	$this.find('.validation-wrap').removeClass('submitted');
});
