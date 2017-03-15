(function() {
    'use strict';

    angular
        .module('app')
        .factory('inqstatsFactory', inqstatsFactory);

    inqstatsFactory.$inject = ['$http', 'inqstatsApiKey', ];

    /* @ngInject */
    function inqstatsFactory($http, inqstatsApiKey) {

        var service = {
            getData: getData
        };

        return service;


        function getData(data) {

            var url = 'http://inqstatsapi.inqubu.com?api_key=' + inqstatsApiKey + '&data=' + data + '&countries=us';

            return $http
                .get(url)
                .then(function(response) {
                    return response.data[0];
                });

        }
    }
})();
/* -- STEP 2 - FINISH THIS FACTORY FUNCTION --
   This factory function is mostly complete. Your task here is to build the request URL.

   Hints:
   You have access to a `data` parameter (see line 18) that contains
   a comma seperated list of data keys required by INQStats.

   E.g.
   bigmac_index,birth_rate,co2_emissions

   You also have access to the inqstatsApiKey specified in app.module.js due
   to the dependency injection happening on lines 8 and 11 (2nd parameter)
   (To learn more, read this point in the John Papa Style Guide)
   https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection)

   Put it all together to generate the URL that's needed by INQStats.
   Our code will take care of the rest.

   Once you've finished that (or if you get stuck), move onto ./charts.controller.js.
*/
