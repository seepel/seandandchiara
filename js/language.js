(function() {
    if(window.location.pathname == '/') {
        var language = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
        if(language == 'it-it') {
            window.location.replace('/it/');
        };
    }
}())
