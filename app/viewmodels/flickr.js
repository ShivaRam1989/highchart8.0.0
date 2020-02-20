﻿define(['plugins/http', 'durandal/app', 'knockout', 'highcharts'], function (http, app, ko, Highcharts) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.
    var chartm;
    $(document).ready(function () {
        $(function () {
               
            
            var test = "";
        });
    });
    return {
        displayName: chartm,
        images: ko.observableArray([]),
        activate: function () {
            //the router's activator calls this function and waits for it to complete before proceeding
            if (this.images().length > 0) {
                return;
            }
            chartm = new Highcharts.Chart({
                renderTo: document.getElementById('chartdata'),
                legend: { enabled: false },
                title: { text: 'Number of active users per clinic' },
                subtitle: { text: 'for how many weeks they kept on using Triabetes' },
                tooltip: { enabled: false }
            });
            var that = this;
            return http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', { tags: 'mount ranier', tagmode: 'any', format: 'json' }, 'jsoncallback').then(function(response) {
                that.images(response.items);
            });
        },
        select: function(item) {
            //the app model allows easy display of modal dialogs by passing a view model
            //views are usually located by convention, but you an specify it as well with viewUrl
            item.viewUrl = 'views/detail';
            app.showDialog(item);
        },
        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        }
    };
});