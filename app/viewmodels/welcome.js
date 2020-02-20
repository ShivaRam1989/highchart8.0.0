define(['durandal/app', 'knockout', 'highcharts'], function (app, ko) {
    var ctor = function () {
        //highcharts.chart("chartdata", { series: [{ data: [1, 2, 3] }] });
        require([
            'highcharts',
            'highcharts/modules/exporting',
            'highcharts/highcharts-3d'
        ], function (Highcharts) {
            var iDiv = document.createElement('div');
            iDiv.id = 'stockChart';
            iDiv.className = 'block';
            document.getElementsByTagName('body')[0].appendChild(iDiv);

            // Now create and append to iDiv
            var innerDiv = document.createElement('div');
            innerDiv.className = 'block-2';

            // The variable iDiv is still good... Just append to it.
            iDiv.appendChild(innerDiv);
            var iDiv2 = document.createElement('div');
            iDiv2.id = 'chart';
            iDiv2.className = 'block';
            document.getElementsByTagName('body')[0].appendChild(iDiv2);

            // Now create and append to iDiv
            var innerDiv2 = document.createElement('div');
            innerDiv2.className = 'block-2';

            // The variable iDiv is still good... Just append to it.
            iDiv.appendChild(innerDiv);
            Highcharts.chart('chart', {

                title: {
                    text: 'Solar Employment Growth by Sector, 2010-2016'
                },

                subtitle: {
                    text: 'Source: thesolarfoundation.com'
                },

                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                plotOptions: {
                    series: {
                        pointStart: 2010
                    }
                },

                series: [{
                    name: 'Installation',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                }, {
                    name: 'Manufacturing',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                }, {
                    name: 'Sales & Distribution',
                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                }, {
                    name: 'Project Development',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                }, {
                    name: 'Other',
                    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                }]

            });
            Highcharts.stockChart('stockChart', {
                chart: {
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 15,
                        beta: 15,
                        viewDistance: 25,
                        depth: 40
                    }
                },
                title: {
                    text: 'Solar Employment Growth by Sector, 2010-2016'
                },

                subtitle: {
                    text: 'Source: thesolarfoundation.com'
                },

                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                plotOptions: {
                    series: {
                        pointStart: 2010
                    }
                },

                series: [{
                    name: 'Installation',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                }, {
                    name: 'Manufacturing',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                }, {
                    name: 'Sales & Distribution',
                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                }, {
                    name: 'Project Development',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                }, {
                    name: 'Other',
                    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                }]

            });
            
            // This function runs when the above files have been loaded.
            // Create a test chart.

        });
    };

    // Your existing code unmodified...
   
    return ctor;
});