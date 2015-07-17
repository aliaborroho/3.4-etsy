var loadEtsy = function (query, onload, immediate) {
    var oReq = new XMLHttpRequest();
    var apiKey = 'etsy';
    var url = 'https://api.etsy.com/v2/listings/active.js?api_key=' +
        apiKey +
        '&keywords=' +
        query +
        '&includes=Images,Shop&sort_on=score';

    $.ajax({
        url: url,
        jsonp: 'callback',
        dataType: 'jsonp',
        success: onload
    });
if (immediate) {
    immediate();

}
};
