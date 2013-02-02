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
    
    
    $(function() {
       
       $("body").attr({ "ng-app": "sorter" });   
        
    });
    
})();