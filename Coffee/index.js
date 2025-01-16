$(window).scroll(function(){
    if($(document).scrollTop() > 50) {
        $("header nav").css("background-color","black")
    }  
    else{
        $("header nav").css("background-color","transparent")
    }
});



$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});


$(document).ready(function(){
    $('#col_video button').click(function(){
        $('#col_video').css("background-image", "none")
        $('#col_video button').css("display", "none")
        $('#col_video iframe').css("display", "block")
        $('#col_video #cross').css("display", "block")
    })
})

$(document).ready(function(){
    $('#cross').click(function(){
        $('#col_video').css("background-image", "url('photos/hover_4.jpg')")
        $('#col_video button').css("display", "block")
        $('#col_video iframe').css("display", "none")
        $('#col_video #cross').css("display", "none")
    })
})