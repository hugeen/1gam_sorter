(function() {
    
    var scriptsNumber = 0;
    var scriptsLoaded = 0;
    function injectScript(script) {
        scriptsNumber += 1;
        var s = document.createElement('script');
        s.setAttribute('src', script);
        document.getElementsByTagName('body')[0].appendChild(s);
        s.onload = function() {
            scriptsLoaded +=1;
            if(scriptsNumber === scriptsLoaded) {
                loadOnce();
            }
        }
    }
    
    function injectCss(css) {
        var s = document.createElement('link');
        s.setAttribute('href', css);
        s.setAttribute('rel', 'stylesheet');
        s.setAttribute('type', 'text/css');
        document.getElementsByTagName('head')[0].appendChild(s);
    }

    
    injectScript('http://code.jquery.com/jquery-1.9.0.min.js');
    injectScript('http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js');
    injectScript('http://documentcloud.github.com/underscore/underscore.js');
    
    injectCss('http://twitter.github.com/bootstrap/assets/css/bootstrap.css');
    injectCss('http://hugeen.github.com/1gam_sorter/1gam-sorter.css');

    function loadOnce() {
        
        if (typeof window.sorterLoaded !== "undefined") {
            return false;
        }
        window.sorterLoaded = true;
        
        var module = angular.module('sorter', []);
        
        $("body").attr({
            "ng-app": "sorter"
        });
        
        var games = [];
        var $games = $(".gadiv");
        var totalGames = $games.length;
        var processedGames = 0;
        
        $("body").append("<div id='waitForDataProcessingOverlay'>"+
            "<div id='waitForDataProcessing'>Wait for data processing</div>"+
            "<div id='gameProcessed'><span id='gamesProcessedNumber'>"+processedGames+"</span>/<span id='gamesTotalNumber'>"+totalGames+"</span> games processed</div>"+
        "</div>");
        
        $games.each(function() {
            var that = this;
            setTimeout(function() {
                var div = $(that);
                games.push({
                    div: div.clone(),
                    link: div.find(".ga").attr("href"),
                    title: div.find(".ga").attr("title"),
                    name: div.find(".ganame").text(),
                    description: div.find(".gabyli").text(),
                    credits: div.find(".gacred").text(),
                    tags: div.find(".gatags").text(),
                    about: div.find(".gabout").text(),
                    author: div.find(".gauser a").text(),
                    authorLink: div.find(".gauser a").attr("href"),
                    icon: div.find(".ga").attr("src")
                });

                div.remove();
                processedGames++;
                if(processedGames < totalGames) {
                    $("#gamesProcessedNumber").text(processedGames);   
                } else {
                    $("#waitForDataProcessingOverlay").remove();
                }
            }, 75);
        });
        
        window.SorterCtrl = function($scope) {
            $scope.games = games;
            $scope.tag = "";
            $scope.filterByTag = function() {
                if(_.isEmpty($scope.tag)) {
                    $scope.games = games;
                } else {
                    var matcher = new RegExp($scope.tag,"i");
                    $scope.games = _.filter(games, function(game) {
                       return matcher.test(game.tags); 
                    });
                }
            }
        }
        
        var template = '<div class="gadiv" ng-repeat="game in games">'+
            '<a class="ga" title="{{ game.title }}" href="{{ game.link }}">'+
                '<img class="gaicon" src="{{ game.icon }}">'+
                '<span class="ganame">{{ game.name }}</span>'+
                '<span class="gabyli">{{ game.description }}</span>'+
                '<span class="gacred">{{ game.credits }}</span>'+
                '<span class="gatags">{{ game.tags }}</span>'+
                '<span class="gabout">{{ game.about }}</span>'+
            '</a>'+
            '<span class="gauser">'+
                '<a href="{{ game.authorLink }}" title="Click to view author profile">{{ game.author }}</a>'+
            '</span>'+
        '</div>';

        $(".walloftext").html('<h1> Filter by tag'+
            '<form ng-submit="filterByTag()">'+
                '<input type="text" ng-model="tag" size="30">'+
                '<input type="submit" value="Filter">'+
            '</form>'+
        '</h1>');

        $(".walloftext").attr({ "ng-controller": "SorterCtrl" });
        $(".walloftext").append(template);

    }    
        

})();
