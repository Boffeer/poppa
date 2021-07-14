// Animations
poppa({
	clickTrigger: '.demo-card__button--zoom-in',
	pop: '.demo-zoom-in',
	animation: 'zoom-in',
	customPopWrapperClass: 'custom-pop-wrapper-class',
	customPopAlignerClass: 'custom-pop-aligner-class',
	customPopCloserClass: 'custom-pop-closer-class',
});
poppa({
	clickTrigger: '.demo-card__button--zoom-pong',
	pop: '.demo-zoom-pong',
	animation: 'zoom-pong',
});
poppa({
	clickTrigger: '.demo-card__button--zoom-out',
	pop: '.demo-zoom-out',
	animation: 'zoom-out'
});
poppa({
	clickTrigger: '.demo-card__button--slide-up',
	pop: '.demo-slide-up',
	animation: 'slide-up'
});
poppa({
	clickTrigger: '.demo-card__button--slide-down',
	pop: '.demo-slide-down',
	animation: 'slide-down'
});
poppa({
	clickTrigger: '.demo-card__button--slide-left',
	pop: '.demo-slide-left',
	animation: 'slide-left'
});
poppa({
	clickTrigger: '.demo-card__button--slide-right',
	pop: '.demo-slide-right',
	animation: 'slide-right',
});

// Position
poppa({
	clickTrigger: '.demo-card__button--position-top-left',
	pop: '.demo-position-top-left',
	animation: 'slide-right',
	position: 'top left'
});
poppa({
	clickTrigger: '.demo-card__button--position-top',
	pop: '.demo-position-top',
	animation: 'slide-down',
	position: 'top'
});
poppa({
	clickTrigger: '.demo-card__button--position-top-right',
	pop: '.demo-position-top-right',
	animation: 'slide-left',
	position: 'top right'
});
poppa({
	clickTrigger: '.demo-card__button--position-left',
	pop: '.demo-position-left',
	animation: 'slide-right',
	position: 'left'
});
poppa({
	clickTrigger: '.demo-card__button--position-center',
	pop: '.demo-position-center',
	animation: 'zoom-in',
});
poppa({
	clickTrigger: '.demo-card__button--position-right',
	pop: '.demo-position-right',
	animation: 'slide-left',
	position: 'right'
});
poppa({
	clickTrigger: '.demo-card__button--position-bottom-left',
	pop: '.demo-position-bottom-left',
	animation: 'slide-right',
	position: 'bottom left'
});
poppa({
	clickTrigger: '.demo-card__button--position-bottom',
	pop: '.demo-position-bottom',
	animation: 'slide-up',
	position: 'bottom'
});
poppa({
	clickTrigger: '.demo-card__button--position-bottom-right',
	pop: '.demo-position-bottom-right',
	animation: 'slide-left',
	position: 'bottom right'
});

// Closers
poppa({
	clickTrigger: '.demo-card__button--closer-none',
	pop: '.demo-closer-none',
	closerType: 'none'
});
poppa({
	clickTrigger: '.demo-card__button--closer-outer',
	pop: '.demo-closer-outer',
	closerType: 'outer'
});
poppa({
	clickTrigger: '.demo-card__button--closer-inner',
	pop: '.demo-closer-inner',
	closerType: 'inner'
});
poppa({
	clickTrigger: '.demo-card__button--closer-corner',
	pop: '.demo-closer-corner',
	closerType: 'corner',
});
// Timer
poppa({
	pop: '.demo-timer',
	timerTrigger: 30,
});


let howActivatorCounter = 0
document.querySelector('.how__activator').addEventListener('click', function (event) {
	event.preventDefault();
	howActivatorCounter++

	if (howActivatorCounter < 2) {
		this.innerText = 'Call the popup';

		poppa({
			pop: '.how-pop',
			clickTrigger: '.how__activator',
			coolText: true,
		})
	}

})
