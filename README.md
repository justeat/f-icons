# `f-icons` — Just Eat Fozzie Icon Set

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-icons.svg)](https://badge.fury.io/js/%40justeat%2Ff-icons)
[![Build Status](https://travis-ci.org/justeat/f-icons.svg)](https://travis-ci.org/justeat/f-icons)
[![Known Vulnerabilities](https://snyk.io/test/github/justeat/f-icons/badge.svg?targetFile=package.json)](https://snyk.io/test/github/justeat/f-icons?targetFile=package.json)



## Usage

At its core, `f-icons` is a collection of [SVG](https://svgontheweb.com/#svg) files. This means that you can use these icons in all the same ways you can use SVGs (e.g. `img`, `background-image`, `inline`, `object`, `embed`, `iframe`). Here's a helpful article detailing the many ways SVGs can be used on the web: [SVG on the Web – Implementation Options](https://svgontheweb.com/#implementation)

The following are additional ways you can use `f-icons`.


### Client-side JavaScript

#### 1. Install

> **Note:** If you intend to use `f-icons` with a CDN, you can skip this installation step.

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or Yarn.

```shell
npm install @justeat/f-icons --save

yarn add @justeat/f-icons
```

Or just copy [`f-icons.js`](https://unpkg.com/@justeat/f-icons/dist/f-icons.js) or [`f-icons.min.js`](https://unpkg.com/@justeat/f-icons/dist/f-icons.min.js) into your project directory. You don't need both `f-icons.js` and `f-icons.min.js`.

#### 2. Include

Include `f-icons.js` or `f-icons.min.js` with a `<script>` tag:

```html
<script src="path/to/dist/f-icons.js"></script>
```

> **Note:** `f-icons.js` and `f-icons.min.js` are located in the `dist` directory of the npm package.

Or load the script from a CDN provider:

```html
<!-- choose one -->
<script src="https://unpkg.com/@justeat/f-icons"></script>
<script src="https://cdn.jsdelivr.net/npm/@justeat/f-icons/dist/feather.min.js"></script>
```

After including the script, `f-icons` will be available as a global variable. ### TODO test if this is the name of the global variable ###

#### 3. Use

To use an icon on your page, add a `data-ficons` attribute with the icon name to an element:

```html
<i data-ficons="alert"></i>
```

<!-- ### TODO – add full icon list to docs ––  See the complete list of icons at [fozzie.just-eat.com](https://fozzie.just-eat.com/). -->

#### 4. Replace

Call the `ficons.replace()` method:

```html
<script>
  ficons.replace()
</script>
```

All elements that have a `data-ficons` attribute will be replaced with SVG markup corresponding to their `data-ficons` attribute value. See the [API Reference](#api-reference) for more information about `ficons.replace()`.


### Node
#### 1. Install

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or Yarn:

```shell
npm install @justeat/f-icons --save

yarn add @justeat/f-icons
```

#### 2. Require

```js
const ficons = require('@justeat/f-icons')
```

#### 3. Use

```js
ficons.icons.x
// {
//    name: 'x',
//    contents: '<line ... /><line ... />`,
//    tags: ['cancel', 'close', 'delete', 'remove'],
//    attrs: {
//      class: 'ficons ficons-x',
//      xmlns: 'http://www.w3.org/2000/svg',
//    },
//    toSvg: [Function],
// }

ficons.icons.x.toSvg()
// <svg class="ficons ficons-x" ...><line ... /><line ... /></svg>

ficons.icons.x.toSvg({ class: 'foo bar', 'stroke-width': 1, color: 'red' })
// <svg class="ficons ficons-x foo bar" stroke-width="1" color="red" ...><line ... /><line ... /></svg>
```

See the [API Reference](#api-reference) for more information about the available properties and methods of the `ficons` object.


## Credits

The `@justeat/f-icons` project owes a great deal to the [Feather SVG Icon Library](https://github.com/feathericons/feather).  This project started as a fork of that project for developers at Just Eat to build out icons, while giving us a great platform for the initial build and API that Feather had already built.
