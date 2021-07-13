let popClass = 'poppa';
let popOpenedClass = 'poppa--opened'

let popWrapperClass = 'poppa-wrapper';
let popWrapperOpenedClass = 'poppa-wrapper--opened';

let poppaAlignerClass = 'poppa-aligner';

let poppaCloserClass = 'poppa__closer';

let poppaToScrollBlockElement = 'html';
let poppaScrollBlockerClass = 'poppa-block-scrolling';


/**
 * 
 * Open popup
 * 
 * @param {string} $pop className or querySelecotr
 * @param {function} $onOpen function on open
 */

function openPop( $pop, $onOpen = null ) {
	if ( typeof $pop == 'object' ) {
		let popWrap = document.querySelector('.' + $pop.classList[0] + '-wrapper');
		popWrap.classList.add(popWrapperOpenedClass)
		$pop.classList.add(popOpenedClass);
	} else if ( typeof $pop == 'string' ) {
		document.querySelector($pop + '-wrapper').classList.add(popWrapperOpenedClass)
	} else {
		console.log('not valid vrgument type')
	}


	if ($onOpen != null) {
		$onOpen();
	}
}


/**
 * 
 * Close popup
 * 
 * @param {string} $pop className or querySelecotr
 * @param {function} $onClose function on open
 */
function closePop( $pop, $onClose = null) {
	if ( typeof $pop == 'object' ) {
		let popWrap = document.querySelector('.' + $pop.classList[0] + '-wrapper');
		popWrap.classList.remove(popWrapperOpenedClass)
		$pop.classList.remove(popOpenedClass);
	} else if ( typeof $pop == 'string' ) {
		document.querySelector($pop + '-wrapper').classList.remove(popWrapperOpenedClass)
		document.querySelector($pop).classList.remove(popOpenedClass);
	} else {
		console.log('not valid vrgument type')
	}

	if ($onClose != null) {
		$onClose();
	}
}


/**
 * 
 * Helper just for main function poppa
 * @param {*} $ 
 */
function closePopByOutsideClick($) {
	if ($.outOfPopClickClose !== false) {
		document.querySelector($.popWrap).addEventListener('click', function(event) {
			/* Normally - event.tagert.class[0] on click outside the pop === 'pop-aligner' */
			if (event.target.classList[0] === poppaAlignerClass) {
				let pop = document.querySelector($.pop);
				let onClose = $.onClose;
				closePop( pop, onClose );
				document.querySelector(poppaToScrollBlockElement).classList.remove(poppaScrollBlockerClass)
			}
		})
	}
}


/**
 * 
 * @param {object} $pop querySelecotr for pop
 * @param {function} $onOpen callback on open
 * @param {function} $onClose  callback on close
 */
// function popToggle($pop, $onOpen, $onClose){
function popToggle($){
	let popWrap = document.querySelector('.' + $.pop.classList[0] + '-wrapper');
	let	isPopHidden = window.getComputedStyle(popWrap).getPropertyValue('visibility') == 'hidden';
	// let pop = $.pop;
	if (isPopHidden) {
		openPop( $.pop, $.onOpen)
			document.querySelector(poppaToScrollBlockElement).classList.add(poppaScrollBlockerClass);
	} else {
		closePop( $.pop, $.onClose)
		document.querySelector(poppaToScrollBlockElement).classList.remove(poppaScrollBlockerClass)
	}
}


/**
 * 
 * @param {} $popWrap 
 * @param {*} $pop 
 */
function popaAddClasses($popWrap, $pop) {
	if ($popWrap != null || $popWrap != undefined) {
		( !$popWrap.classList.contains(popWrapperClass) )
			? $popWrap.classList.add(popWrapperClass)
			: false ;
	}
	if ($pop != null || $pop != undefined) {
		( !$pop.classList.contains(popClass) )
			? $pop.classList.add(popClass)
			: false ;
	}
}


function createPopStructure($) {

	/* === Create main wrapper === */
	let jsPopWrapper = document.createElement('div');
	jsPopWrapper;
	jsPopWrapper.classList.add($.popWrap.replace('.', ''));
	jsPopWrapper.classList.add(popWrapperClass);
	typeof($.customPopWrapperClass) == 'string'
		? jsPopWrapper.classList.add($.customPopWrapperClass) 
		: false
	
	document.querySelector('body').appendChild(jsPopWrapper);

	if ($.popWrapperCustomClass) {
		jsPopAlingner.classList.add(popWrapperCustomClass);
	}

	let jsPopAlingner = document.createElement('div');
	jsPopAlingner;
	jsPopAlingner.classList.add(poppaAlignerClass);
	typeof($.customPopAlignerClass) == 'string'
		? jsPopAlingner.classList.add($.customPopAlignerClass)
		: false
	jsPopWrapper.appendChild(jsPopAlingner);

	if ($.position) {
		console.log($.position)
		let vPosition;
		let hPosition;
		if ( $.position.includes('top') ) {
			vPosition = 'top';
			jsPopAlingner.classList.add(jsPopAlingner.classList[0] + '--' + vPosition);
		} else if ( $.position.includes('bottom') ) {
			vPosition = 'bottom';
			jsPopAlingner.classList.add(jsPopAlingner.classList[0] + '--' + vPosition);
		}
		if ( $.position.includes('left') ) {
			hPosition = 'left';
			jsPopAlingner.classList.add(jsPopAlingner.classList[0] + '--' + hPosition);
		} else if ( $.position.includes('right') ) {
			hPosition = 'right';
			jsPopAlingner.classList.add(jsPopAlingner.classList[0] + '--' + hPosition);
		}
	}
	if ($.popAlignerCustomClass) {
		jsPopAlingner.classList.add(popAlignerCustomClass);
	}
	/* === /Create main wrapper === */


	let jsPopCloser = document.createElement('button');
	let closerCounter = 0;
	jsPopCloser;
	jsPopCloser.innerText = '×';

	if ($.popCloser != undefined) {
		jsPopCloser.classList.add($.popCloser.replace('.', ''));
	}
	jsPopCloser.classList.add(poppaCloserClass);
	typeof($.customPopCloserClass) == 'string'
		? jsPopCloser.classList.add($.customPopCloserClass)
		: false
	


	let pop = document.querySelector($.pop)
	jsPopAlingner.appendChild(pop);
	// console.log('Now pop inside aligner');
	pop.classList.add(popClass);
	// console.log('pop created');

	/* === none closer ====  */
	if ( $.closerType === 'none' ) {
		jsPopCloser.classList.add( poppaCloserClass + '--none' );
		pop.appendChild(jsPopCloser)
		closerCounter = 1;
	}
	
	/* === inner closer ====  */
	if ( $.closerType === 'inner' ) {
		jsPopCloser.classList.add( poppaCloserClass + '--inner' );
		pop.appendChild(jsPopCloser)
		closerCounter = 1;
	}

	/* === outer closer ====  */
	if ( $.closerType === 'outer')  {
		jsPopCloser.classList.add( poppaCloserClass + '--outer' );
		pop.appendChild(jsPopCloser)
		closerCounter = 1;
	}
	
	/* === corner close button === */
	if (closerCounter == 0) {
		jsPopAlingner.appendChild(jsPopCloser);
		jsPopCloser.classList.add( poppaCloserClass + '--corner' );
	}
	// console.log('Closer created');
}




function poppa( $ ){
	// let opener = [...document.querySelectorAll(data.clickTrigger)];
	// let closer = [...document.querySelectorAll(data.popCloser)];
	let popaData = $;
	$.popWrap = $.pop + '-wrapper';

	createPopStructure(popaData);

	// let popWrap = document.querySelector( $.popWrap );
	let popWrap = document.querySelector( $.pop + '-wrapper' );
	let pop = document.querySelector( $.pop );

	if ($.onLeavingTrigger == true) {
		let popShown = false;
		let onLeavingDelay;
		if ($.onLeavingDelay) {
			onLeavingDelay = 5000
		} else {
			onLeavingDelay = $.onLeavingDelay * 1000;
		}
		setTimeout(() => {
			document.addEventListener('mouseleave', function() {
				if (popShown === false) {
						openPop(pop);
						popShown = true;
					setTimeout(function(){
						popShown = false
					}, 120000)
				}
			})
		}, 5000)

	} else {
		const opener = [...document.querySelectorAll($.clickTrigger)];
		opener.map(trigger => {
			trigger.addEventListener("click", function() {
				popToggle({
					pop: pop,
					onOpen: $.onOpen,
					onClose: $.onClose,
				});
			})
		});
	}

	let closer;
	if (closer == undefined) {
		closer = popWrap.querySelector('.' + poppaCloserClass);
	} else {
		closer = popWrap.querySelector( $.popCloser );
	}

	
	popWrap.removeAttribute('hidden');

	if ($.animation) {
		pop.classList.add( 'poppa--' + $.animation );
	} else {
		pop.classList.add( 'poppa--zoom-in' );
	}
	
	closer.addEventListener('click', function() {closePop( pop, $.onClose )});
	closePopByOutsideClick(popaData);

	if ($.timerTrigger != null) {
		if ( typeof($.timerTrigger) == 'number' ) {
			setTimeout(() => {
				openPop(pop);
			}, $.timerTrigger * 1000)
		}
	}
	// opener.map(mapped => mapped.addEventListener("click", () => popToggle(data.popWrap, data.pop)));
	// closer.map(mapped => mapped.addEventListener('click', () => closePop(data.popWrap, data.pop)));
}
