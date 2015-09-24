$(document).ready(function() {

  $('body').append("<div class='content'></div>");
  $('body').append("<div class='pagination'></div>");

  $(".pagination").append("<div class='tostart'></div>");
  $(".tostart").text("в начало");

  $(".pagination").append("<div class='previous'></div>");
  $(".previous").text("предыдущая");


  $(".pagination").append("<div class='pagi'></div>");

  var resultsAmount = 1000000;
  var maxOnPage = 10;
  var pagesQty = resultsAmount/maxOnPage

  /* определяем переменную - количество ссылок отображаемых в pagination */
  var linksQty = 10;
  var currentPage = 1;

  $(currentPage).addClass("active");

  for (var i = 0; i < linksQty; i++) {
    $(".pagi").append("<span>" + i + "</span>").click(function() {
      
    });
  }


  $(".pagination").append("<div class='toend'></div>");
  $(".toend").text("в конец");

  $(".pagination").append("<div class='next'></div>");
  $(".next").text("следующая");

});