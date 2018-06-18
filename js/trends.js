$(document).ready(function() {
  var page;
  var url = window.location.pathname.replace(/\//g,"");
  var i = 1;
  /**
   * Forces a reload of all stylesheets by appending a unique query string
   * to each stylesheet URL.
   */
  function reloadStylesheets() {
      var queryString = '?reload=' + new Date().getTime();
      $('link[rel="stylesheet"]').each(function () {
          this.href = this.href.replace(/\?.*|$/, queryString);
      });
  }

  //Home page
  if (url == ""){
    $("title").text("Google Trends Show");
    $("h1").text("Google Trends Show");
    $("iframe.yt").attr("src","https://www.youtube.com/embed/videoseries?list=PLbIc1971kgPCjKm56j_tNsetBn3PA5GaY");
  }
  else {
    $(".col.s12").append('<div class="trends"></div>');
    $.ajax({
      dataType: "json",
      //url: "json/"+url+".json", (weird error)
      url: "json/"+url+".json",
      data: page,
      success: function (page) {
        $("title").text(page.title.title+" | Google Trends Show");
        $("h1").text(page.title.title);
        $("iframe.yt").attr("src",page.video.video);
        trend = ''+page.games.round1[0]+''+page.games.round1[1]+''+page.games.round1[0]+','+page.games.round1[1]+'';
        $.each(page.rounds, function(index, element) {
            $(".trends").append('<h3 class="round'+i+'">'+element+'</h3>');
            i++;
        });
        i = 1;
        $.each(page.games, function(index, element) {
            $("h3.round"+i).after('<iframe id="trends-widget-1" src="https://trends.google.com:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22'+element[0]+'%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%22today%2012-m%22%7D%2C%7B%22keyword%22%3A%22'+element[1]+'%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%22today%2012-m%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&amp;tz=-600&amp;eq=q%3D'+element[0]+'%2C'+element[1]+'%26date%3Dtoday%2012-m%2Ctoday%2012-m" width="100%" frameborder="0" scrolling="0" style="border-radius: 2px; box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) 0px 2px 2px 0px; height: 366px;"></iframe>');
            i++;
        });
        var a = $('link').first().next().next().attr('href');
        $('link').first().next().next().attr('href', a+'?refresh');
      }
    });
  }


  //Youtube iframe fullwidth
  $('.yt').height(($('.yt').width()/16)*9);

})
