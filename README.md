# webpack_amd
Loading webpack bundles as AMD changed behavior in Webpack 5.25
We use RequireJS as glue between multiple AMD webpack bundles.
However, after upgrading Webpack the code pulling in the bundle don't receive the exports made from the root file of that bundle.
