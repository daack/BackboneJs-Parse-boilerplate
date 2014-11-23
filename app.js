require.config({
    baseUrl: 'lib/js',
    paths: {
        app: '../../',
        template: '../../view/template',
        view: '../../view',
        model: '../../model',
        controller: '../../controller'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery', 'parse'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'handlebars': {
            deps: ['jquery'],
            exports: 'handlebars'
        },
        'jquery': {
            exports: 'jquery'
        },
        'parse': {
            deps: ['jquery'],
            exports: 'Parse'
        }
    }
});

require(['parse'], function(Parse){
    Parse.initialize('AppID', 'AppKey');
    window.User = Parse.User.current() || {};
});

require(['domReady', 'app/router', 'bootstrap'],function(domReady,Router,bootstrap){
    domReady(function(){
        Router.start();
    });
});