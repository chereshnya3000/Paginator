$(document).ready(function() {

  var myBody = $('body');
  myBody.append("<div class='content'></div>");
  myBody.append("<div class='pagination'></div>");

  var pagination = $(".pagination");
  pagination.append("<div class='tostart'></div>");
  $(".tostart").text("в начало");

  pagination.append("<div class='previous'></div>");
  $(".previous").text("предыдущая");

  pagination.append("<div class='toend'></div>");
  $(".toend").text("в конец");

  pagination.append("<div class='next'></div>");
  $(".next").text("следующая");

  pagination.append("<div class='pagi'></div>");

  var resultsAmount = 1000000;
  var maxOnPage = 10;
  var pagesQty = resultsAmount/maxOnPage

  /* определяем переменную - количество ссылок отображаемых в pagination */
  var linksQty = 10;

  var pagi = $(".pagi");
  
  for (var i = 0; i < linksQty; i++) 
  {
    var pageIndex = i+1;
    pagi.append("<span>" + pageIndex + "</span>");
  
    $(pagi.children().last()).click(function() {
      $(firstElement).removeAttr("class"); /* тушим первый элемент, если он активный */
      $(lastElement).removeAttr("class"); /* тушим последний элемент, если он активный */
      $(currentActElem).removeAttr("class");
      $(this).addClass("active");
      currentActElem = this;
    });
  }

  var currentActElem = pagi.children()[0];
  $(currentActElem).addClass("active");  

  // var myFirst = $(currentActElem).parent().children().first();
  
  /* Оптимизация обращения к первому элементу */
  var firstElement = pagi.children()[0];

  /* Оптимизация обращения к последнему элементу */
  var lastElement = pagi.children()[linksQty - 1];
 
 $(".previous").click(function() {
    if ($(firstElement).is($(currentActElem))){
    return;
  }
    $(firstElement).removeAttr("class"); /* тушим первый элемент, если он активный */
    $(lastElement).removeAttr("class"); /* тушим последний элемент, если он активный */
    var prevElem = $(currentActElem).prev();
    $(currentActElem).removeAttr("class");
    $(prevElem).addClass("active");
    currentActElem = prevElem;
 });



$(".next").click(function() {
    if ($(lastElement).is($(currentActElem))){
    return;
  }
    $(firstElement).removeAttr("class"); /* тушим первый элемент, если он активный */
    $(lastElement).removeAttr("class"); /* тушим последний элемент, если он активный */
    var nextElem = $(currentActElem).next();
    $(currentActElem).removeAttr("class");
    $(nextElem).addClass("active");
    currentActElem = nextElem;
 });


/* создаем обработчик события click на кнопку в начало */

$(".tostart").click(function(){
  $(currentActElem).removeAttr("class");
  $(firstElement).addClass("active");
  currentActElem = firstElement;
});

/* создаем обработчик события click на кнопку в конец */

$(".toend").click(function(){
  $(currentActElem).removeAttr("class");
  $(lastElement).addClass("active");
  currentActElem = lastElement;
});


/* отключаем кнопки в начало и предыдущая */
/* задание на следующий раз */
/* нужно привязаться к какому-нибудь событию */

if ($(firstElement) == $(currentActElem)) {
  $(".tostart").addClass("inactive");
}





  

  
});