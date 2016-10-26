angular.module('MUN.routes',[])

    .config(function($stateProvider, $urlRouterProvider) {
        for(i in links){
            if (links[i].t!="Home") {
                $stateProvider.state(links[i].t, {
                    url: '/'+links[i].l,
                    views: {
                        'content': {
                            templateUrl: 'pages/'+links[i].l+'.html',
                            controller: 'GenericCtrl'
                        }
                    }
                })
            }
            else {
                $stateProvider.state(links[i].t, {
                    url: '/'+links[i].l,
                    views: {
                        'content': {
                            templateUrl: 'pages/'+links[i].l+'.html',
                            controller: 'HomeCtrl'
                        }
                    }
                })
            }
        }
        for(i in menus){
            for(j in menus[i].l) {
                $stateProvider.state(menus[i].l[j].t, {
                    url: '/' + menus[i].l[j].l,
                    views: {
                        'content': {
                            templateUrl: 'pages/' + menus[i].l[j].l + '.html',
                            controller: 'GenericCtrl'
                        }
                    }
                }) 
                
                

            }
        }

        $urlRouterProvider.otherwise('/index')

    });
