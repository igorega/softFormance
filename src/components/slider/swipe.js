export const swipeSlides = (slider, nextBtn, prevBtn, nextSlide, prevSlide) => {
	let xDown = null;
	let yDown = null;

	const getTouches = (e) => {
		return e.touches || e.originalEvent.touches;
	};

	const handleTouchStart = (e) => {
		const firstTouch = getTouches(e)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	};

	const handleTouchMove = (e) => {
		if (!xDown || !yDown) {
			return;
		}

		let xUp = e.touches[0].clientX;
		let yUp = e.touches[0].clientY;

		let xDiff = xDown - xUp;
		let yDiff = yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {

			if ( xDiff > 0 ) {
				// right swipe
				if (!nextBtn.hasAttribute('disabled')) {
					nextSlide();
				}

			} else {
				// left swipe
				if (!prevBtn.hasAttribute('disabled')) {
					prevSlide();
				}
			}

		} else {

			if ( yDiff > 0 ) {
				// down swipe
			} else {
				// up swipe
			}
		}

		xDown = null;
		yDown = null;
	};

	slider.addEventListener('touchstart', handleTouchStart, false);
	slider.addEventListener('touchmove', handleTouchMove, false);
};
