(function() {
    if(window.location.pathname == '/') {
        if(navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage) == 'it-it') {
            window.location.replace('/it/');
        };
    }
}())
