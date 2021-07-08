# POPPA.JS

# TODOS
- [ ] rewrite poppa styles on sass, and move it to /assets/ folder
- [ ] make minified js, and move it to /assets/ folder
- [ ] implement babel to current bundle
- [ ] make array checker to clickTrigger parameter to open one modal from plenty buttons
- [ ] make object syntax a kindof `const myPop = new Poppa({})`
	- I want to have an opportunity to call click triggers array or pop element myPop.pop and get html element wich I setup at Poppa and other parameters
	- To have an opportunity to change my parameters
- [ ] Make block about methods
- [ ] Make block about closer types
- [ ] Пофикси съежание леяута вправо при блоке скролла

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
| animation         | string            | 'zoom-in', 'slide-up-down-left-right', 'zoom-out',|  - [x] |
| popAlignerCustomClass | string        | 'myAlignerClass' | - [x]    |
| popWrapperCustomClass | string        | 'myWrapperClass' | - [x]    |
| position          | string            | 'top right'   |  - [x]      |
| closeType         | string            | inner/outer/none | - [ ]    |
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
| animationDuration | number in ms      | 300           | - [ ]       |
| pageLeaveTrigger  | bool              | false         | - [ ]       |
| preventScrolling  | bool              | true          | - [ ]       |
| closeIcon         | string            | url or text   | - [ ]       |
| z-index-modifier  | string            | url or text   | - [ ]       |


## Functions

| Function                                      | is released |
| --------------------------------------------- | ----------- |
| `openPop('.my-pop', function)`                | - [x]       |
`closePop('.my-pop', function)`                 | - [x]       |
| `additionalClickTrigger('.my-pop', function)` | - [ ]       |


## FAQ

### How to set more click triggers?
> `document.querySelector('.additional-clicktrigger).addEventListener('click', function (){openPop('.my-pop')})`
WIP additionalClickTrigger