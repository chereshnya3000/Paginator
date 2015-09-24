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

  for (var i = 0; i < linksQty; i++) {
    $(".pagi").append("<span>" + i + "</span>");
  }

  /* делаем активную первую кнопку по умолчанию */

  $(".pagi span").first().addClass("active");




  /* создаем функцию для тушения класса active */
  var cancelActive = function(pagibuttons) {

    pagibuttons.each(function() {
      if (pagibuttons.hasClass("active")) 
      {  
        pagibuttons.removeAttr("class");
      }
    });

  }


  /* создаем активную кнопку по клику */

  $(".pagi span").each(function(index) {

    $(this).click(function() {

      cancelActive($(".pagi span"));

      $(this).addClass("active");

    });

  });

  /* добавляем действие для кнопки "предыдущая" */

  $(".previous").click(function() {

    $(".pagi span").each(function(index) {

        var curr = $(".pagi span").hasClass("active");
  
        /* препятствие 24.09.2015 */
        
        curr = curr.prev();

        console.log(curr);
        
      });

  });


  $(".pagination").append("<div class='toend'></div>");
  $(".toend").text("в конец");

  $(".pagination").append("<div class='next'></div>");
  $(".next").text("следующая");

});