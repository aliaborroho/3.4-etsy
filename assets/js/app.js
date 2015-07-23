var contentEl = document.querySelector('.listings');

function registerByQuery(selector) {
  var templateString = document.querySelector(querySelector).innerHTML;
  templateString = templateString.replace('&gt;', '>');

  return Handlebars.compile(templateString);
}

function registerPartialByQuery(name) {
  var templateString = document.querySelector('#' + name + '-partial').innerHTML;
  templateString = templateString.replace('&gt;', '>');

  return Handlebars.registerPartial(name, templateString);
}

//registerPartialByQuery('article');
//Handlebars.registerHelper('my-date', function(dateString) { //return 'Something Else';
//});
var handlebarsTemplate = registerByQuery('#main-template');

loadEtsy('fashion', function(data) {
  var allArticles = '';

  allArticles += handlebarsTemplate(data);

  contentEl.innerHTML = allArticles;
});
