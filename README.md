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
<script src="https://cdn.jsdelivr.net/npm/@justeat/f-icons/dist/ficons.min.js"></script>
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
//      class: 'c-ficon c-ficon--x',
//      xmlns: 'http://www.w3.org/2000/svg',
//    },
//    toSvg: [Function],
// }

ficons.icons.x.toSvg()
// <svg class="c-ficon c-ficon--x" ...><line ... /><line ... /></svg>

ficons.icons.x.toSvg({ class: 'foo bar', 'stroke-width': 1, color: 'red' })
// <svg class="c-ficon c-ficon--x foo bar" stroke-width="1" color="red" ...><line ... /><line ... /></svg>
```

See the [API Reference](#api-reference) for more information about the available properties and methods of the `ficons` object.


## API Reference

### `ficons.icons`

An object with data about every icon.

#### Usage

```js
ficons.icons.x
// {
//    name: 'x',
//    contents: '<line ... /><line ... />',
//    tags: ['cancel', 'close', 'delete', 'remove'],
//    attrs: {
//      class: 'c-ficon c-ficon--x',
//      xmlns: 'http://www.w3.org/2000/svg',
//      width: 24,
//      height: 24,
//      viewBox: '0 0 24 24',
//      fill: 'none',
//      stroke: 'currentColor',
//      'stroke-width': 2,
//      'stroke-linecap': 'round',
//      'stroke-linejoin': 'round',
//    },
//    toSvg: [Function],
// }

ficons.icons.x.toString()
// '<line ... /><line ... />'
```

> **Note:** `x` in the above example can be replaced with any valid icon name.  Icons with multi-word names (e.g. `arrow-right`) **cannot** be accessed using dot notation (e.g. `ficons.icons.x`). Instead, use bracket notation (e.g. `ficons.icons['arrow-right']`).

[View Source](https://github.com/justeat/f-icons/blob/master/src/icons.js)

---

### `ficons.icons[name].toSvg([attrs])`

Returns an SVG string.

#### Parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `attrs` (optional) | Object |  Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

> **Hint:** You might find these SVG attributes helpful for manipulating icons:
> * [`color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color)
> * [`width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width)
> * [`height`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height)
> * [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width)
> * [`stroke-linecap`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)
> * [`stroke-linejoin`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin)

#### Usage

```js
ficons.icons.circle.toSvg()
// '<svg class="c-ficon c-ficon--circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

ficons.icons.circle.toSvg({ 'stroke-width': 1 })
// '<svg class="c-ficon c-ficon--circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

ficons.icons.circle.toSvg({ class: 'foo bar' })
// '<svg class="c-ficon c-ficon--circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'
```

[View Source](https://github.com/justeat/f-icons/blob/master/src/icon.js)

---

### `ficons.replace([attrs])`

Replaces all elements that have a `data-ficons` attribute with SVG markup corresponding to the element's `data-ficons` attribute value.

#### Parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `attrs` (optional)  | Object | Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

#### Usage

> **Note:** `ficons.replace()` only works in a browser environment.

Simple usage:
```html
<i data-ficons="circle"></i>
<!--
<i> will be replaced with:
<svg class="c-ficon c-ficon--circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  ficons.replace()
</script>
```

You can pass `ficons.replace()` an `attrs` object:
```html
<i data-ficons="circle"></i>
<!--
<i> will be replaced with:
<svg class="c-ficon c-ficon--circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  ficons.replace({ class: 'foo bar', 'stroke-width': 1 })
</script>
```

All attributes on the placeholder element (i.e. `<i>`) will be copied to the `<svg>` tag:

```html
<i data-ficons="circle" id="my-circle" class="foo bar" stroke-width="1"></i>
<!--
<i> will be replaced with:
<svg id="my-circle" class="c-ficon c-ficon--circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  ficons.replace()
</script>
```

[View Source](https://github.com/justeat/f-icons/blob/master/src/replace.js)

---

### (DEPRECATED) `ficons.toSvg(name, [attrs])`

> **Note:** `ficons.toSvg()` is deprecated. Please use `ficons.icons[name].toSvg()` instead.

Returns an SVG string.

#### Parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `name`    | string | Icon name   |
| `attrs` (optional) | Object |  Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

#### Usage

```js
ficons.toSvg('circle')
// '<svg class="c-ficon c-ficon--circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

ficons.toSvg('circle', { 'stroke-width': 1 })
// '<svg class="c-ficon c-ficon--circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

ficons.toSvg('circle', { class: 'foo bar' })
// '<svg class="c-ficon c-ficon--circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'
```

[View Source](https://github.com/justeat/f-icons/blob/master/src/to-svg.js)


## Credits

The `@justeat/f-icons` project owes a great deal to the [Feather SVG Icon Library](https://github.com/feathericons/feather).  This project started as a fork of that project for developers at Just Eat to build out icons, while giving us a great platform for the initial build and API that Feather had already built.
