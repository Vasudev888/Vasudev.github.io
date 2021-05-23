var lang = {
    "html": "80%",
    "css": "70%",
    "javascript": "70%",
    "php": "55%",
    "angular": "65%"
};

var multiply = 4;

$.each(lang, function (language, pourcent) {

    var delay = 700;

    setTimeout(function () {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});