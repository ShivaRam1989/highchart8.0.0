requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'highcharts': '../lib/chart/highstock/',
        'chart': '../lib/chart/highchartBootstrapper'  
    },
    packages: [{
        name: 'highcharts',
        main: 'highstock'
    }],
    shim: {
        'chart': {
            //These script dependencies highcharts should be loaded before any other modules
            deps: ['highcharts',
                'highcharts/modules/annotations',
                'highcharts/modules/exporting',
                'highcharts/modules/offline-exporting'],
            //Once loaded, use the global 'Highcharts' as the
            //module value.
            //This exports the Highcharts object into your define method wherever it is called
            exports: 'Highcharts'
        },
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'], function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Starter Kit';

    app.configurePlugins({
        router:true,
        dialog: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});