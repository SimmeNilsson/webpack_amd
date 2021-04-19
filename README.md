# webpack_amd
Loading webpack bundles as AMD changed behavior in Webpack 5.25.
We use RequireJS as glue between multiple AMD webpack bundles.
However, after upgrading Webpack, the code pulling in the bundle doesn't receive the exports made from the entry file of that bundle.

Webpack 5.25+, main won't receive exported object from bundle.

Webpack 5.24, main will receive exported object from bundle.
