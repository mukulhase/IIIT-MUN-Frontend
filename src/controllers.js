angular.module('MUN.controllers', [])

    .controller('HomeCtrl', function ($scope) {
    	$(document).ready(function() {
            $('#fullpage').fullpage({
                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
                verticalCentered: true,
  				resize : true,
  				css3: true,
  				scrollOverflow:true

            });
        });
    })

    .controller('AboutCtrl', function ($scope) {

    });
