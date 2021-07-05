# POPPA.JS

## Basic usage

```js
poppa({
	pop: '.your-popup-layout-class',
	clickTrigger: '.your-button-or-else',
})
```

Now by clicking on `'.your-button-or-else'` you will open `'.your-popup-layout-class'` with renederd wrapper and button to close this popup


## Parameters

| Parameter         | Value             | example       | is released |
| ----------------- | ----------------- | ------------- | ----------- |
| pop               | css class string  | '.your-pop'   | - [x]       |
| clickTrigger      | css class string  | '.my-button'  | - [x]       |
| onOpen            | function name     | doSomething   | - [x]       |
| onClose           | function name     | doSomething   | - [x]       |
| beforeOpen        | function name     | doSomething   | - [ ]       |
| beforeClose       | function name     | doSomething   | - [ ]       |
| timerTrigger      | number in ms      | 30            | - [ ]       |
| openByScrollTo    | css class string  | '.features'   | - [ ]       |
| outOfPopClose     | bool              | true          | - [ ]       |
| logEvents         | bool              | true          | - [ ]       |
| activeByDefault   | bool              | true          | - [ ]       |
| saveAndDestroy    | bool              | true          | - [ ]       |
| destroyOnClose    | bool              | true          | - [ ]       |
| popType           | string            | pop/snackbar/burger | - [ ] |
| animation         | string            | 'zoom-in', 'slide-up-down-left-right', 'zoom-out', 'fade'|  - [ ] |
| animationDuration | number in ms      | 300           | - [ ]       |
| pageLeaveeTrigger | bool              | false         | - [ ]       |
| preventScrolling  | bool              | true          | - [ ]       |


## Functions

| Function                                      | is released |
| `openPop('.my-pop', function)`                | - [x]       |
`closePop('.my-pop', function)`                 | - [x]       |
| `additionalClickTrigger('.my-pop', function)` | - [ ]       |


## FAQ

### How to set more click triggers?
> `document.querySelector('.additional-clicktrigger).addEventListener('click', function (){openPop('.my-pop')})`
WIP additionalClickTrigger