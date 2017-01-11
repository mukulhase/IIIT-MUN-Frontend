var loaded=false;
var readmore;
angular
    .module('MUN', ['fullPage.js','ui.router','ngMaterial', 'MUN.controllers', 'MUN.routes','sasrio.angular-material-sidenav'])
    .config(function($$mdSvgRegistry,$mdThemingProvider, $mdIconProvider,ssSideNavSectionsProvider){


        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("logo"       , "./assets/svg/logo.svg"        , 42)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512)
            .icon('md-toggle-arrow', $$mdSvgRegistry.mdToggleArrow);

        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('blue');

        var sections=[];
        for(var i in links){
            var temp={
                'id':'link'+i,
                'name':links[i].t,
                'state':links[i].t,
                'type':'link'
            };
            sections.push(temp);
        }
        for(i in menus){
            var temp={
                id:     'toogle_'+i,
                name:   menus[i].t,
                type:   'toggle',
                pages: []
            };      
            for(j in menus[i].l) {
                temp.pages.push({
                    id:     'toggle_item_'+i+j,
                    name:   menus[i].l[j].t,
                    state:  menus[i].l[j].t
                });
            }
            sections.push(temp);
        }
        ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
        ssSideNavSectionsProvider.initWithSections(sections);

    }).run(function($rootScope, $mdSidenav, ssSideNav, $mdDialog, $sce, $location){
        $rootScope.links = links;
        $rootScope.menus = menus;
        $rootScope.menu = ssSideNav;
        $rootScope.secretariat = secretariat;
        $rootScope.committees = committees;
        $rootScope.letter = letter;
        $rootScope.applications = applications;
        $rootScope.schedule = schedule;
        $rootScope.contact = contact;
        $rootScope.sponsors =  sponsors;
        $rootScope.go = function ( path ) {
            $location.path( path );
        };
        $rootScope.openMenu = function(){
            $mdSidenav('left').toggle();
        };
        $rootScope.renderHtml = function(html_code)
        {
            return $sce.trustAsHtml(html_code);
        };
        $rootScope.openForm = function(link){
            $mdDialog.show({
              // controller: DialogController,
              template: '<iframe style="width:90vh; height:90vh" src='+link+'></iframe>',
              parent: angular.element(document.body),
              clickOutsideToClose:true,
              fullscreen: false // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {

            }, function() {
            });
        };
        readmore = function(){
            $mdDialog.show({
              // controller: DialogController,
              templateUrl: "pages/letter.html",
              parent: angular.element(document.body),
              clickOutsideToClose:true,
              fullscreen: false // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {

            }, function() {
            });
        }
        $rootScope.readmore = readmore;


    }).config( function($mdThemingProvider){
// Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();   });