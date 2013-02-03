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

    if(typeof $ !== "undefined") {
        loadOnce();
    } else {
        window.onload = function() { loadOnce() };
    }
    
    
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
            
            var div = $(this);
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
                icon: div.find(".ga").attr("src")
            });
            
            div.remove();
            processedGames++;
            if(processedGames < totalGames) {
                $("#gamesProcessedNumber").text(processedGames);   
            } else {
                $("#waitForDataProcessingOverlay").remove();
            }
            
        });
        
        $(".walloftext").append("")
        
        window.sorterCtrl = function($scope) {
            $scope.games = games;
        }

    }    
        

})();
