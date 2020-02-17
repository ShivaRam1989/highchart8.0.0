requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1',
        //chart
        'chart': '../lib/chart/highstock/highstock',
        'chartmore': '../lib/chart/highchart/highcharts-more',
        'chart3d': '../lib/chart/highchart/highcharts-3d',
        'chartexport': '../lib/chart/modules/exporting',
        'chart-noData-display': '../lib/chart/modules/no-data-to-display',
        'chart-heatmap': '../lib/chart/modules/heatmap',
        'chart-treemap': '../lib/chart/modules/treemap',
        'chart-offline-export': '../lib/chart/modules/offline-exporting',

        //highcharts 
        'highcharts': '../lib/chart/highchart/highcharts',
        'highcharts-export': '../lib/chart/modules/exporting',
        'highcharts-offline-exporting': '../lib/chart/modules/offline-exporting',
        'highcharts-drilldown': '../lib/chart/modules/drilldown',
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        "chart": {
            exports: "Highcharts.Chart"
        },
        "chart3d": {
            deps: ["chart"],
            exports: "Highcharts.Chart"
        },
        "chartmore": {
            deps: ["chart"],
            exports: "Highcharts.Chart"
        },
        "chart-heatmap": {
            deps: ["chart"],
            exports: "Highcharts.Chart"
        },
        "chart-treemap": {
            deps: ["chart"],
            exports: "Highcharts.Chart"
        },
        "chartexport": {
            deps: ["chart"],
            exports: "Highcharts"
        },
        "chart-offline-export": {
            deps: ["chart"],
            exports: "Highcharts.Chart"
        },
        "chart-noData-display": {
            deps: ["chart"],
            exports: "Highcharts"
        },
        "highcharts": {
            exports: "Highcharts"
        },
        "highcharts-export": {
            deps: ["highcharts"],
            exports: "Highcharts"
        },
        "highcharts-offline-exporting": {
            deps: ["highcharts-export"],
            exports: "Highcharts"
        },
        "highcharts-drilldown": {
            deps: ["chart"],
            exports: "Highcharts"
        }
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