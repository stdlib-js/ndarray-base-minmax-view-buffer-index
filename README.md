<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Min and Max View Buffer Indices

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-minmax-view-buffer-index
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var minmaxViewBufferIndex = require( '@stdlib/ndarray-base-minmax-view-buffer-index' );
```

#### minmaxViewBufferIndex( shape, strides, offset )

Computes the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.

```javascript
// Array shape:
var shape = [ 2, 2 ];

// Stride array:
var strides = [ 2, 1 ];

// Index offset which specifies the location of the first indexed value:
var offset = 0;

var idx = minmaxViewBufferIndex( shape, strides, offset );
// returns [ 0, 3 ]
```

#### minmaxViewBufferIndex.assign( shape, strides, offset, out )

Computes the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view and assigns results to a provided output array.

```javascript
var shape = [ 2, 2 ];
var strides = [ -1, -2 ];
var offset = 3;

var out = [ 0, 0 ];
var idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
// returns [ 0, 3 ]

var bool = ( idx === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var randu = require( '@stdlib/random-base-randu' );
var minmaxViewBufferIndex = require( '@stdlib/ndarray-base-minmax-view-buffer-index' );

var strides;
var offset;
var shape;
var idx;
var i;
var j;

shape = [ 0, 0, 0 ];

for ( i = 0; i < 100; i++ ) {
    // Generate a random array shape:
    shape[ 0 ] = discreteUniform( 1, 10 );
    shape[ 1 ] = discreteUniform( 1, 10 );
    shape[ 2 ] = discreteUniform( 1, 10 );

    // Generate strides:
    if ( randu() < 0.5 ) {
        strides = shape2strides( shape, 'row-major' );
    } else {
        strides = shape2strides( shape, 'column-major' );
    }
    j = discreteUniform( 0, shape.length-1 );
    strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;

    // Compute the index offset:
    offset = strides2offset( shape, strides ) + 25; // include a view offset

    // Compute the minimum and maximum linear indices:
    idx = minmaxViewBufferIndex( shape, strides, offset );
    console.log( 'Shape: %s. Strides: %s. Offset: %d. Min idx: %d. Max idx: %d.', shape.join( 'x' ), strides.join( ',' ), offset, idx[ 0 ], idx[ 1 ] );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/minmax_view_buffer_index.h"
```

#### stdlib_ndarray_minmax_view_buffer_index( ndims, \*shape, \*strides, offset, \*out )

Computes the minimum and maximum linear indices (in bytes) in an underlying data buffer accessible to an array view.

```c
int64_t ndims = 2;
int64_t shape[] = { 10, 10 };
int64_t strides[] = { 10, 1 };
int64_t offset = 0;
int64_t out[ 2 ];

stdlib_ndarray_minmax_view_buffer_index( ndims, shape, strides, offset, out );

int64_t min = out[ 0 ];
// returns 0

int64_t max = out[ 1 ];
// returns 99
```

The function accepts the following arguments:

-   **ndims**: `[in] int64_t` number of dimensions.
-   **shape**: `[in] int64_t*` array shape (dimensions).
-   **strides**: `[in] int64_t*` array strides (in bytes).
-   **offset**: `[in] int64_t` index offset.
-   **out**: `[out] int64_t*` two-element output array.

```c
int8_t stdlib_ndarray_minmax_view_buffer_index( int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset, int64_t *out );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/ndarray/base/minmax_view_buffer_index.h"
#include <stdio.h>
#include <inttypes.h>

int main() {
    int64_t ndims = 2;
    int64_t shape[] = { 10, 10 };
    int64_t strides[] = { 10, 1 };
    int64_t offset = 0;
    int64_t out[ 2 ];

    stdlib_ndarray_minmax_view_buffer_index( ndims, shape, strides, offset, out );

    printf( "min: %"PRId64"\n", out[ 0 ] );
    printf( "max: %"PRId64"\n", out[ 1 ] );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-minmax-view-buffer-index.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-minmax-view-buffer-index

[test-image]: https://github.com/stdlib-js/ndarray-base-minmax-view-buffer-index/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-minmax-view-buffer-index/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-minmax-view-buffer-index/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-minmax-view-buffer-index?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-minmax-view-buffer-index.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-minmax-view-buffer-index/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-minmax-view-buffer-index/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-minmax-view-buffer-index/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-minmax-view-buffer-index/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-minmax-view-buffer-index/main/LICENSE

</section>

<!-- /.links -->
