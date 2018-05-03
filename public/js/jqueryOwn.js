var i = 0;
var groceries = [];

function REMOVETHING(day) {
  if (day === monday) {
    $('#m').children('div').each(function() {
      var thisItem = $(this).text();
      removeFromArray(thisItem, groceries);
    });

    $("#monday").empty();
    $("#monday").append('<p>Having Trouble? <br> Try another Dish ID:</p>');
    $("#monday").append('<div style="width: 100%"><input id="monform"  style="width: 80%"></input></div>');
    $("#monday").append('<a href="#" onclick="doDay(monday)"><i class="fa fa-plus-circle"></i></a>');
    $("#m").empty();

  }
  if (day === tuesday) {
    $('#t').children('div').each(function() {
      var thisItem = $(this).text();
      removeFromArray(thisItem, groceries);
    });

    $("#tuesday").empty();
    $("#tuesday").append('<p>Having Trouble? <br> Try another Dish ID:</p>');
    $("#tuesday").append('<div style="width: 100%"><input id="tuesform"  style="width: 80%"></input></div>');
    $("#tuesday").append('<a href="#" onclick="doDay(tuesday)"><i class="fa fa-plus-circle"></i></a>');
    $("#t").empty();

  }
  if (day === wednesday) {
    $('#w').children('div').each(function() {
      var thisItem = $(this).text();
      removeFromArray(thisItem, groceries);
    });

    $("#wednesday").empty();
    $("#wednesday").append('<p>Cant Decide? Try another ID:</p>');
    $("#wednesday").append('<div style="width: 100%"><input id="wedform"  style="width: 80%"></input></div>');
    $("#wednesday").append('<a href="#" onclick="doDay(wednesday)"><i class="fa fa-plus-circle"></i></a>');
    $("#w").empty();

  }
  if (day === thursday) {
    $('#th').children('div').each(function() {
      var thisItem = $(this).text();
      removeFromArray(thisItem, groceries);
    });

    $("#thursday").empty();
    $("#thursday").append('<p>Having Trouble? <br> Try a different ID:</p>');
    $("#thursday").append('<div style="width: 100%"><input id="thursform"  style="width: 80%"></input></div>');
    $("#thursday").append('<a href="#" onclick="doDay(thursday)"><i class="fa fa-plus-circle"></i></a>');
    $("#th").empty();
  }
  if (day === friday) {
    $('#f').children('div').each(function() {
      var thisItem = $(this).text();
      removeFromArray(thisItem, groceries);
    });

    $("#friday").empty();
    $("#friday").append('<p>Having Trouble? <br> Try another Dish ID:</p>');
    $("#friday").append('<div style="width: 100%"><input id="friform"  style="width: 80%"></input></div>');
    $("#friday").append('<a href="#" onclick="doDay(friday)"><i class="fa fa-plus-circle"></i></a>');
    $("#f").empty();

  }
  if (day === saturday) {
    $('#s').children('div').each(function() {
      var thisItem = $(this).text();
      removeFromArray(thisItem, groceries);
    });

    $("#saturday").empty();
    $("#saturday").append('<p>Having Trouble? <br> Try another Dish ID:</p>');
    $("#saturday").append('<div style="width: 100%"><input id="satform"  style="width: 80%"></input></div>');
    $("#saturday").append('<a href="#" onclick="doDay(saturday)"><i class="fa fa-plus-circle"></i></a>');
    $("#s").empty();
  }
}

function doDay(day) {
  var TitleKeyword;
  if (day === monday) {
    TitleKeyword = $("#monform").val();
  }
  if (day === tuesday) {
    TitleKeyword = $("#tuesform").val();
  }
  if (day === wednesday) {
    TitleKeyword = $("#wedform").val();
  }
  if (day === thursday) {
    TitleKeyword = $("#thursform").val();
  }
  if (day === friday) {
    TitleKeyword = $("#friform").val();
  }
  if (day === saturday) {
    TitleKeyword = $("#satform").val();
  }
  console.log(TitleKeyword);
  var apiKey = "2MX8tWBt2B3U5VWChEngoRCT4dnHx8Uf";
  var url = "http://api2.bigoven.com/recipe/" + TitleKeyword + "?api_key=" + apiKey;
  $.ajax({
    type: "GET",
    dataType: 'xml',
    cache: false,
    url: url,
    success: function(xml) {
      console.log(xml);
      var title = $(xml).find('Title').text();
      var imgUrl = "";
      imgUrl = $(xml).find('ImageURL').text();
      if (imgUrl === "") {
        imgUrl = "http://photos.bigoven.com/recipe/hero/recipe-no-image.jpg"
      }

      if (day === monday) {
        weekrecipes.push({
          Weekday: "Monday",
          Recipe_ID: TitleKeyword,
          Recipe_Img: imgUrl,
          Recipe_Title: title
        });
      }
      if (day === tuesday) {
        weekrecipes.push({
          Weekday: "Tuesday",
          Recipe_ID: TitleKeyword,
          Recipe_Img: imgUrl,
          Recipe_Title: title
        });
      }
      if (day === wednesday) {
        weekrecipes.push({
          Weekday: "Wednesday",
          Recipe_ID: TitleKeyword,
          Recipe_Img: imgUrl,
          Recipe_Title: title
        });
      }
      if (day === thursday) {
        weekrecipes.push({
          Weekday: "Thursday",
          Recipe_ID: TitleKeyword,
          Recipe_Img: imgUrl,
          Recipe_Title: title
        });
      }
      if (day === friday) {
        weekrecipes.push({
          Weekday: "Friday",
          Recipe_ID: TitleKeyword,
          Recipe_Img: imgUrl,
          Recipe_Title: title
        });
      }
      if (day === saturday) {
        weekrecipes.push({
          Weekday: "Saturday",
          Recipe_ID: TitleKeyword,
          Recipe_Img: imgUrl,
          Recipe_Title: title
        });
      }


      
      var synonyms = $(xml).find('Ingredients')
      synonyms.find('Ingredient').each(function() {
        var name = "";
        var ingr = $(this).find('IngredientInfo');
        name = ingr.find('Name').text();
        var quantity = $(this).find('Quantity').text();
        var unit = $(this).find('Unit').text();
        if (name === "") {} else {
          var fullInfo = quantity + " " + unit + " " + name;
          groceries.push(fullInfo);
          
          console.log(groceries);
          if (day === monday) {
            $("#m").append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');
          }
          if (day === tuesday) {
            $("#t").append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');
          }
          if (day === wednesday) {
            $("#w").append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');

          }
          if (day === thursday) {
            $("#th").append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');

          }
          if (day === friday) {
            $("#f").append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');
          }
          if (day === saturday) {
            $("#s").append('<div class="btn-lg btn-primary" id="' + i + '"/><p class="alignleft"></p><div style="clear: both;"></div></div>');

          }

          $('#' + i + '').text(fullInfo);
          i++;
        }
      });
      if (day === monday) {
        $("#monday").empty();
        $("<div/>").addClass("redbold").text(title).appendTo("#monday");
        $('#monday').append('<img id="monImg" width="150px"/>');
        $('#monday').append('<a href="#" onclick="REMOVETHING(monday)" class="text-center">Remove</a>');
        $('#monImg').attr("src", imgUrl);
      }
      if (day === tuesday) {
        $("#tuesday").empty();
        $("<div/>").addClass("redbold").text(title).appendTo("#tuesday");
        $('#tuesday').append('<img id="tuesImg" width="150px"/>')
        $('#tuesday').append('<a href="#" onclick="REMOVETHING(tuesday)" class="text-center">Remove</a>');
        $('#tuesImg').attr("src", imgUrl);
      }
      if (day === wednesday) {
        $("#wednesday").empty();
        $("<div/>").addClass("redbold").text(title).appendTo("#wednesday");
        $('#wednesday').append('<img id="wedImg" width="150px"/>')
        $('#wednesday').append('<a href="#" onclick="REMOVETHING(wednesday)" class="text-center">Remove</a>');
        $('#wedImg').attr("src", imgUrl);
      }
      if (day === thursday) {
        $("#thursday").empty();
        $("<div/>").addClass("redbold").text(title).appendTo("#thursday");
        $('#thursday').append('<img id="thurImg" width="150px"/>')
        $('#thursday').append('<a href="#" onclick="REMOVETHING(thursday)" class="text-center">Remove</a>');
        $('#thurImg').attr("src", imgUrl);
      }
      if (day === friday) {
        $("#friday").empty();
        $("<div/>").addClass("redbold").text(title).appendTo("#friday");
        $('#friday').append('<img id="friImg" width="150px"/>')
        $('#friday').append('<a href="#" onclick="REMOVETHING(friday)" class="text-center">Remove</a>');
        $('#friImg').attr("src", imgUrl);
      }
      if (day === saturday) {
        $("#saturday").empty();
        $("<div/>").addClass("redbold").text(title).appendTo("#saturday");
        $('#saturday').append('<img id="satImg" width="150px"/>')
        $('#saturday').append('<a href="#" onclick="REMOVETHING(saturday)" class="text-center">Remove</a>');
        $('#satImg').attr("src", imgUrl);
      }
    }
  });

}