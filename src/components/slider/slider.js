if (document.querySelector('.js-slider')) {
	const slides = document.querySelectorAll('.js-slide');
	const next = document.querySelector('.js-slide-next');
	const prev = document.querySelector('.js-slide-prev');
	const firstSlide = document.querySelector('.js-slide:first-child');
	const lastSlide = document.querySelector('.js-slide:last-child');
	const activeSlideClass = 'is-show';
	const hideSlideClass = 'is-hide';
	const titleNext = 'Next Slide';
	const titlePrev = 'Prev Slide';

	let index = 0;

	const showSlide = index => {
		slides.forEach(item => {
			item.classList.remove(activeSlideClass);
			item.classList.add(hideSlideClass);
		});

		slides[index].classList.remove(hideSlideClass);
		slides[index].classList.add(activeSlideClass);
	};

	const activeButton = () => {
		if (firstSlide.classList.contains(activeSlideClass)) {
			prev.disabled = true;
			prev.setAttribute('title', '');
		} else {
			prev.disabled = false;
			prev.setAttribute('title', titlePrev);
		}

		if (lastSlide.classList.contains(activeSlideClass)) {
			next.disabled = true;
			next.setAttribute('title', '');
		} else {
			next.disabled = false;
			next.setAttribute('title', titleNext);
		}
	};

	const nextSlide = () => {
		index++;
		if (index > slides.length - 1) {
			index = 0;
		}

		showSlide(index);
		activeButton();
	};

	const prevSlide = () => {
		index--;
		if (index < 0) {
			index = slides.length - 1;
		}

		showSlide(index);
		activeButton();
	};

	next.addEventListener('click', nextSlide);
	prev.addEventListener('click', prevSlide);
}
