# PostCSS Border Radius [![Build Status][ci-img]][ci]

[PostCSS] plugin for border-radius shorthand.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jakelazaroff/postcss-border-radius.svg
[ci]:      https://travis-ci.org/jakelazaroff/postcss-border-radius

## Usage

```js
postcss([ require('postcss-border-radius') ])
```

**Input:**

```css
.top {
    border-top-radius: 5px;
}

.right {
    border-right-radius: 5px;
}

.bottom {
    border-bottom-radius: 5px;
}

.left {
    border-left-radius: 5px;
}
```

**Output:**

```css
.top {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.bottom {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}

.left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
```

See [PostCSS] docs for examples for your environment.
