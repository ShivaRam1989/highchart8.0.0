define(['durandal/app', 'knockout', 'highcharts'], function (app, ko, highchart) {
    var ctor = function () {
        require([
            'highcharts'
        ], function (Highcharts) {
            // This function runs when the above files have been loaded.
            // Create a test chart.
            var highchar = Highcharts;

        });
    };


    return ctor;
});