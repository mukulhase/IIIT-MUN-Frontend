var links = [
    {t:"Home",l:"index"},
    {t:"Schedule",l:"schedule"},
    {t:"Executive Board",l:"eb"},
    {t:"Committees",l:"committees"},
    {t:"Allotment",l:"resources"},
    {t:"Contact",l:"contact"}
];
var menus = [{t:"About",l:[
    {t:'About Felicity',l:'about-felicity'},
    {t:'About IIIT-H MUN',l:'about-iiith-mun'},
    {t:'About MUNs',l:'about-mun'}
    ]}];
angular
    .module('MUN', ['ui.router','ngMaterial', 'MUN.controllers', 'MUN.routes','sasrio.angular-material-sidenav'])
    .config(function($$mdSvgRegistry,$mdThemingProvider, $mdIconProvider,ssSideNavSectionsProvider){


        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("logo"       , "./assets/svg/logo.svg"        , 42)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');

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

    }).run(function($rootScope, $mdSidenav, ssSideNav){
        $rootScope.links = links;
        $rootScope.menus = menus;
        $rootScope.menu = ssSideNav;
        $rootScope.openMenu = function(){
            $mdSidenav('left').toggle();
        };


    }).config( function($mdThemingProvider){
// Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();   });