// logErrors: parametr
// Протяни пропсы как в реакте, чтобы на любом уровне вложенности ты имел одинаковые исходные данные

let popClass = 'poppa';
let popOpenedClass = 'poppa--opened'

let popWrapperClass = 'poppa-wrapper';
let popWrapperOenedClass = 'poppa-wrapper--opened';

let poppaAlignerClass = 'poppa-aligner';

let poppaCloserClass = 'poppa__closer';

let poppaScrollBlockerClass = 'poppa-html--opened';

/**
 * 
 * Open popup
 * 
 * @param {string} $pop className or querySelecotr
 * @param {function} $onOpen function on open
 */

function openPop( $pop, $onOpen = null) {
	if ( typeof $pop == 'object' ) {
		let popWrap = document.querySelector('.' + $pop.classList[0] + '-wrapper');
		popWrap.classList.add(popWrapperOenedClass)
		$pop.classList.add(popOpenedClass);
	} else if ( typeof $pop == 'string' ) {
		document.querySelector($pop + '-wrapper').classList.add(popWrapperOenedClass)
		document.querySelector($pop).classList.add(popOpenedClass);
	} else {
		console.log('not valid vrgument type')
	}


	document.querySelector('html').classList.add(poppaScrollBlockerClass);
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
		popWrap.classList.remove(popWrapperOenedClass)
		$pop.classList.remove(popOpenedClass);
	} else if ( typeof $pop == 'string' ) {
		document.querySelector($pop + '-wrapper').classList.remove(popWrapperOenedClass)
		document.querySelector($pop).classList.remove(popOpenedClass);
	} else {
		console.log('not valid vrgument type')
	}

	document.querySelector('html').classList.remove(poppaScrollBlockerClass)
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
	document.querySelector($.popWrap).addEventListener('click', function(event) {

		/* Normally - event.tagert.class[0] on click outside the pop === 'pop-aligner' */
		if (event.target.classList[0] === poppaAlignerClass) {
			let pop = document.querySelector($.pop);
			let onClose = $.onClose;
			closePop( pop, onClose );
		}
	})
}


/**
 * 
 * @param {object} $pop querySelecotr for pop
 * @param {function} $onOpen callback on open
 * @param {function} $onClose  callback on close
 */
function popToggle($pop, $onOpen, $onClose){
	let popWrap = document.querySelector('.' + $pop.classList[0] + '-wrapper');
	let	isPopHidden = window.getComputedStyle(popWrap).getPropertyValue('visibility') == 'hidden';
	let pop = $pop;
	isPopHidden
		? openPop( pop, $onOpen)
		: closePop( pop, $onClose)
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
	document.querySelector('body').appendChild(jsPopWrapper);

	let jsPopAlingner = document.createElement('div');
	jsPopAlingner;
	jsPopAlingner.classList.add(poppaAlignerClass);
	jsPopWrapper.appendChild(jsPopAlingner);
	/* === /Create main wrapper === */


	let jsPopCloser = document.createElement('button');
	let closerCounter = 0;
	jsPopCloser;
	jsPopCloser.innerText = '×';

	if ($.popCloser != undefined) {
		jsPopCloser.classList.add($.popCloser.replace('.', ''));
	}
	jsPopCloser.classList.add(poppaCloserClass);
	


	let pop = document.querySelector($.pop)
	jsPopAlingner.appendChild(pop);
	// console.log('Now pop inside aligner');
	pop.classList.add(popClass);
	// console.log('pop created');
	
	/* === inner closer ====  */
	if ( $.popCloserType === 'inner' ) {
		jsPopCloser.classList.add( poppaCloserClass + '--inner' );
		pop.appendChild(jsPopCloser)
		closerCounter = 1;
	}

	/* === outer closer ====  */
	if ( $.popCloserType === 'outer')  {
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



function modality($){
	// let opener = [...document.querySelectorAll(data.clickTrigger)];
	// let closer = [...document.querySelectorAll(data.popCloser)];
	let popaData = $;
	$.popWrap = $.pop + '-wrapper';

	createPopStructure(popaData);

	// let popWrap = document.querySelector( $.popWrap );
	let popWrap = document.querySelector( $.pop + '-wrapper' );
	let pop = document.querySelector( $.pop );

	if ($.clickTrigger == 'page-leaving') {
		// while(true) {
		//     if (window.onbeforeunload != null) {
		//         window.onbeforeunload = null;
		//     }
		// }
		//
		//
		//
		// TODO: 
		// Сделай параметр для счета количества открытия попапов вместо тру фолс
		//
		let popShown = false;
		document.querySelector('.pop-leaving-area').addEventListener('mouseenter', function() {
			if (popShown === false) {
				openPop(popWrap, pop);
				popShown = true;
				// setTimeout(function(){
				//     popShown = false
				// }, 90000)
			}
		})
		// document.addEventListener('mouseleave', function() {
		//     if (popShown === false) {
		//         openPop(popWrap, pop);
		//         popShown = true;
		//         // setTimeout(function(){
		//         //     popShown = false
		//         // }, 90000)
		//     }
		// })

	} else {
		// let opener = document.querySelector($.clickTrigger);
		const opener = [...document.querySelectorAll($.clickTrigger)];
		opener.map(trigger => {
			trigger.addEventListener("click", function() { popToggle( pop, $.onOpen, $.onClose );

			})
		// opener.addEventListener("click", function() { popToggle(popWrap, pop, $.onOpen, $.onClose);
		});
	}

	let closer;
	if (closer == undefined) {
		closer = popWrap.querySelector('.' + poppaCloserClass);
	} else {
		closer = popWrap.querySelector( $.popCloser );
	}

	// popaAddClasses(popWrap, pop)
	
	popWrap.removeAttribute('hidden');
	
	closer.addEventListener('click', function() {closePop( pop, $.onClose )});
	closePopByOutsideClick(popaData);

	// opener.map(mapped => mapped.addEventListener("click", () => popToggle(data.popWrap, data.pop)));
	// closer.map(mapped => mapped.addEventListener('click', () => closePop(data.popWrap, data.pop)));
}