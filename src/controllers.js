angular.module('MUN.controllers', [])

	.controller('HomeCtrl', function ($scope) {
		$('#mun_title').fitText();
		$(document).ready(function() {
			$('#fullpage').fullpage({
		            sectionsColor: ['black','#1bbc9b', '#4BBFC3', '#7BAABE', '#ccddff'],
		            resize : true,
		            css3: true,
		            easing: 'easeInOutCubic',
		            easingcss3: 'ease',
		            touchSensitivity: 15,
		            normalScrollElementTouchThreshold: 5,          //Accessibility
		            keyboardScrolling: true,
		            verticalCentered: false,
		            animateAnchor: true,
		            recordHistory: true,
		            responsiveWidth: 900,
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
		        });
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
		if(loaded==true){
			$.fn.fullpage.destroy('all');
		}
    })
    .controller('AboutCtrl', function ($scope) {

    });
