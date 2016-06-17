var links = [
    {t:"Home",l:"index"},
    {t:"Schedule",l:"schedule"},
    {t:"Executive Board",l:"eb"},
    {t:"Allotment",l:"resources"},
    {t:"Contact",l:"contact"}
];
var menus = [{t:"About",l:[
    {t:'About Felicity',l:'about-felicity'},
    {t:'About IIIT-H MUN',l:'about-iiith-mun'},
    {t:'About MUNs',l:'about-mun'}
    ]}];
angular
    .module('MUN', ['ui.router','ngMaterial', 'MUN.controllers', 'MUN.routes'])
    .config(function($mdThemingProvider, $mdIconProvider){

        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');

    }).run(function($rootScope){
        $rootScope.links = links;
        $rootScope.menus = menus;


    }).config( function($mdThemingProvider){
// Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();   });