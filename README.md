# Poppa Popups

## Files to use

1. `assets/poppa.min.css`
2. `assets/poppa.js`




## Basic usage

```js
poppa({
	pop: '.your-popup-layout-class',
	clickTrigger: '.your-button-or-else',
})
```

Now by clicking on `'.your-button-or-else'` you will open `'.your-popup-layout-class'` with renederd wrapper and button to close this popup


## Parameters

| Parameter         | Value             | example       |
| ----------------- | ----------------- | ------------- |
| pop               | css class string  | '.your-pop'   |
| clickTrigger      | css class string or array of them | '.my-button'  |
| onOpen            | function name     | doSomething      |
| onClose           | function name     | doSomething      |
| animation         | string            | 'zoom-in', 'slide-up-down-left-right', 'zoom-out',            |
| popAlignerCustomClass | string        | 'myAlignerClass' |
| popWrapperCustomClass | string        | 'myWrapperClass' |
| position          | string            | 'top right'   |
| customPopWrapperClass | string | '.my-pop-wrapper-class' |
| customPopAlignerClass | string | '.my-pop-aligner-class' |
| customPopCloserClass | string | '.my-pop-closer-class' |
| closeType         | string            | inner/outer/none/corner |
| outOfPopClickClose | bool              | true          |
| timerTrigger      | number in seconds | 30            |
| onLeavingTrigger      | bool | false            |
| onLeavingDelay      | number in seconds | 30            |

## Planning parameters

| Parameter         | Value             | example       |
| ----------------- | ----------------- | ------------- |
| beforeOpen        | function name     | doSomething   |
| beforeClose       | function name     | doSomething   |
| openByScrollTo    | css class string  | '.features'   |
| activeByDefault   | bool              | true          |
| saveAndDestroy    | bool              | true          |
| destroyOnClose    | bool              | true          |
| popType           | string            | pop/snackbar/burger |
| animationDuration | number in ms      | 300           |
| pageLeaveTrigger  | bool              | false         |
| closeIcon         | string            | url or text   |
| zIndexModifier  | string            | number        |


## Functions

| Function                                      | is released |
| --------------------------------------------- | ----------- |
| `openPop('.my-pop', function)`                | - [x]       |
`closePop('.my-pop', function)`                 | - [x]       |
| `additionalClickTrigger('.my-pop', function)` | - [ ]       |


## FAQ

### How to set more click triggers?
```js
document.querySelector('.additional-clicktrigger')
	.addEventListener('click', function () {
		openPop('.my-pop')
	});
```
---

## TODOS
- [ ] implement babel to current bundle
- [ ] make object syntax a kindof `const myPop = new Poppa({})` [this how it works] (https://learn.javascript.ru/new-function)
	- I want to have an opportunity to call click triggers array or pop element myPop.pop and get html element wich I setup at Poppa and other parameters
	- To have an opportunity to change my parameters
- [ ] Узнай влияет ли на пейджспид твоя либа
	- [ ] Влияние на куммулятив леяут шифт
- [ ] Make function depop() — destroy pop wrapper and return popo to origin
- [ ] Make function to remove all poppa-pops-hider — the container to store pops and avoid layout shift
- [ ] Протяни пропсы как в реакте, чтобы на любом уровне вложенности ты имел одинаковые исходные данные
- [ ] make custom events like poppaOpened and poppaClosed
- [ ] for animation duration parameter use css variable
- [ ] Сделай параметр для счета количества открытия попапов вместо тру фолс
- [ ] [Сделай собития poppaOpened и poppaClosed](https://learn.javascript.ru/dispatch-events)


