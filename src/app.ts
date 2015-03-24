/// <reference path="js/require.d.ts" />

require.config({
    paths: {
        'modernizr': 'js/modernizr',
        'jquery': 'js/jquery-1.10.2.min',
        'plugins': 'js/jquery.plugins',
        'underscore': 'js/underscore-min',
        'pubsub': 'js/pubsub',
        'jsviews': 'js/jsviews.min',
        'yepnope': 'js/yepnope.1.5.4-min',
        'yepnopecss': 'js/yepnope.css',
        'l10n': 'js/l10n',
        'sanitize': 'js/sanitize'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        plugins: {
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        pubsub: {
            deps: ['jquery']
        },
        jsviews: {
            deps: ['jquery']
        },
        yepnopecss: {
            deps: ['yepnope']
        }
    }
});

require([
        'modernizr',
        'jquery',
        'plugins',
        'underscore',
        'pubsub',
        'jsviews',
        'yepnope',
        'yepnopecss',
        'bootstrapper',
        'l10n',
        'sanitize',
<<<<<<< HEAD
        'extensions/bl-seadragon-extension/extension',
        'extensions/bl-seadragon-extension/provider',
        'extensions/uv-seadragon-extension/provider',
=======
        'extensions/uv-seadragon-extension/extension',
        'extensions/uv-seadragon-extension/iiifProvider',
>>>>>>> a9642577de76cf8fb61f2d42cffdf8a7c8e9e385
        'extensions/uv-mediaelement-extension/extension',
        'extensions/uv-mediaelement-extension/provider',
        'extensions/uv-pdf-extension/extension',
        'extensions/uv-pdf-extension/provider'
    ], (modernizr,
        $,
        plugins,
        _,
        pubsub,
        jsviews,
        yepnope,
        yepnopecss,
        bootstrapper,
        l10n,
        sanitize,
        seadragonExtension,
        seadragonIIIFProvider,
        mediaelementExtension,
        mediaelementProvider,
        pdfExtension,
        pdfProvider) => {

        // todo: use a compiler flag (when available)
        window.DEBUG = true; // this line is removed on build.

        var extensions = {};

        extensions['seadragon/iiif'] = {
            type: seadragonExtension.Extension,
            provider: seadragonIIIFProvider.Provider,
            name: 'bl-seadragon-extension'
        };

        //extensions['video/mp4'] = {
        //    type: mediaelementExtension.Extension,
        //    provider: mediaelementProvider.Provider,
        //    name: 'uv-mediaelement-extension'
        //};
        //
        //extensions['video/multiple-sources'] = {
        //    type: mediaelementExtension.Extension,
        //    provider: mediaelementProvider.Provider,
        //    name: 'uv-mediaelement-extension'
        //};
        //
        //extensions['audio/mp3'] = {
        //    type: mediaelementExtension.Extension,
        //    provider: mediaelementProvider.Provider,
        //    name: 'uv-mediaelement-extension'
        //};
        //
        //extensions['application/pdf'] = {
        //    type: pdfExtension.Extension,
        //    provider: pdfProvider.Provider,
        //    name: 'uv-pdf-extension'
        //};

        var bs = new bootstrapper(extensions);

        bs.bootStrap();
    });