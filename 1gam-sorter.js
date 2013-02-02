(function() {

    var s = document.createElement('script');
    s.setAttribute('src', 'http://code.jquery.com/jquery-1.9.0.min.js');
    document.getElementsByTagName('body')[0].appendChild(s);

    var s = document.createElement('script');
    s.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js');
    document.getElementsByTagName('body')[0].appendChild(s);

    var s = document.createElement('link');
    s.setAttribute('href', 'http://twitter.github.com/bootstrap/assets/css/bootstrap.css');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('type', 'text/css');
    document.getElementsByTagName('head')[0].appendChild(s);

    var s = document.createElement('link');
    s.setAttribute('href', 'http://hugeen.github.com/1gam_sorter/1gam-sorter.css');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('type', 'text/css');
    document.getElementsByTagName('head')[0].appendChild(s);


    window.onload = function() {
        
        var module = angular.module('sorter', []);
        
        $("body").attr({
            "ng-app": "sorter"
        });
        
        var games = [];
        
        $(".gadiv").each(function() {
            var div = $(this);
            games.push({
                div: div,
                name: div.find(".ganame").text(),
                description: div.find(".gabyli").text(),
                credits: div.find(".gacred").text(),
                tags: div.find(".gatags").text(),
                about: div.find(".gabout").text(),
                author: div.find(".gauser a").text()
            });
        });
        
        console.log(games);
        window.sorterCtrl = function($scope) {
            
        }
        
    }

})();
