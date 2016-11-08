angular.module('MUN.controllers', [])

	.controller('HomeCtrl', function ($scope) {
		$scope.range = function(min, max, step) {
		    step = step || 1;
		    var input = [];
		    for (var i = min; i <= max; i += step) {
		        input.push(i);
		    }
		    return input;
		};
		$scope.fit = Math.floor($(window).width()/464);
		$(window).resize(function() {
			$scope.fit = Math.floor($(window).width()/464);
		});
		
		$scope.mainOptions = {
            sectionsColor: ['black','whitesmoke', 'whitesmoke', 'white', '#ccddff'],
            resize : true,
            css3: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,          //Accessibility
            keyboardScrolling: true,
            //autoScrolling:false,
            afterLoad: function(){
                setTimeout(function(){
                    $('#mun_title').fitText();
                },50);
            },
            afterResponsive:function(isResponsive){
                if(isResponsive){
                    setTimeout(function(){
                    	document.body.innerHTML+="<style>.fp-section,.fp-slide,.fp-tableCell{height: auto !important;}</style>"
                	},100)
                }
            }
        }
		$(document).ready(function() {

			loaded=true;
		    var date = new Date(2017, 1, 27);
		    var now = new Date();
		    var diff = (date.getTime()/1000) - (now.getTime()/1000);

		    var clock = $('.clock').FlipClock(diff,{
		        clockFace: 'DailyCounter',
		        countdown: true
	    	});
		});
        
// 8am 27jan 2017
// contact us:
// aditya bharti
// aayush
// saumya srivastava
// Sid
// Sriram Indurthi

    })
	.controller('GenericCtrl', function ($scope) {
    })
    .controller('AboutCtrl', function ($scope) {
    });
