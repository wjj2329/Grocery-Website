var resultsTitle = [];
var resultsID = [];
var likedRecipes = [];

$(document).ready(function() {

  $("form").submit(function(e) {
    e.preventDefault();
    $('.idLabel').show();
    while (resultsTitle.length > 0) {
        resultsTitle.pop();
    }
    while (resultsID.length > 0) {
        resultsID.pop();
    }
    var myQuery = document.getElementById("inputbox").value;
    var urls = "https://api2.bigoven.com/recipes?title_kw=" + myQuery + "&pg=1&rpp=20&api_key=2MX8tWBt2B3U5VWChEngoRCT4dnHx8Uf";
    document.getElementById("inputbox").value = "";
    $.ajax({
      url: urls,
      dataType: 'json',
      success: function(data) {
        var pic = "pic";
        var fancypic = "fancypic";
        var link = "link";
        var number = 1;
        var title = "text";
        var id = "id"
        if (data['Results'].length == 0) {
          console.log("Failure");
          alert("Invalid Search... Please Try Again");
        }
        $.each(data['Results'], function(name2, value) {
          if (number < 17) {
            var currentpic = pic + number;
            var currentrecipe = title + number;
            var currentfancypic = fancypic + number;
            var currentlink = link + number;
            var currentRecipeID = id + number;
            resultsTitle.push(value.Title);
            resultsID.push(value.RecipeID);
            document.getElementById(currentpic).src = value.PhotoUrl;
            document.getElementById(currentpic).style.width = "261px";
            document.getElementById(currentpic).style.height = "269px";
            document.getElementById(currentrecipe).innerHTML = value.Title;
            document.getElementById(currentRecipeID).innerHTML = value.RecipeID;
            document.getElementById(currentfancypic).href = value.PhotoUrl;
            document.getElementById(currentlink).href = value.WebURL;
            number++;
          }

        });
      }

    });
  });


  $(document).on('click', '#add1', function() {
    var likedTitle = resultsTitle[0];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[0];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style="white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add2', function() {
    var likedTitle = resultsTitle[1];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[1];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style=" white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add3', function() {
    var likedTitle = resultsTitle[2];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[2];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style="white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add4', function() {
    var likedTitle = resultsTitle[3];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[3];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style=" white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add5', function() {
    var likedTitle = resultsTitle[4];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[4];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style="white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add6', function() {
    var likedTitle = resultsTitle[5];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[5];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style=" white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add7', function() {
    var likedTitle = resultsTitle[6];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[6];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style="white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add8', function() {
    var likedTitle = resultsTitle[7];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[7];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style=" white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add9', function() {
    var likedTitle = resultsTitle[8];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[8];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style="white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add10', function() {
    var likedTitle = resultsTitle[9];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[9];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style=" white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add11', function() {
    var likedTitle = resultsTitle[10];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[10];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style="white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add12', function() {
    var likedTitle = resultsTitle[11];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[11];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style=" white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add13', function() {
    var likedTitle = resultsTitle[12];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[12];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style="white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add14', function() {
    var likedTitle = resultsTitle[13];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[13];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style=" white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add15', function() {
    var likedTitle = resultsTitle[14];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[14];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style="white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });
  $(document).on('click', '#add16', function() {
    var likedTitle = resultsTitle[15];
    var shortTitle = jQuery.trim(likedTitle).substring(0, 12).split(" ").slice(0, -1).join(" ") + "...";
    var likedID = resultsID[15];
    var likedRecipeHTML = '<div class="likedRecipe col-sm-1"><span class="likedTitle" style=" white-space:nowrap; overflow:hidden;">' 
                          + shortTitle
                          + '</span><br>ID: <span class="likedID">'
                          + likedID
                          + '</span><i class="fa fa-times removeLiked"></i></div>'
    likedRecipes.push(likedRecipeHTML);
    $('#likedRecipes').empty();
    for (i=0; i<likedRecipes.length; i++) { //PRINT THE LIKED RECIPES
      $('#likedRecipes').append(likedRecipes[i]);
    }
  });

  $("#icon").click(
    function(e) {
      $('.idLabel').show();
      var myQuery = document.getElementById("inputbox").value;
      var urls = "https://api2.bigoven.com/recipes?title_kw=" + myQuery + "&pg=1&rpp=20&api_key=2MX8tWBt2B3U5VWChEngoRCT4dnHx8Uf";
      document.getElementById("inputbox").value = "";
      $.ajax({
        url: urls,
        dataType: 'json',
        success: function(data) {
          var pic = "pic";
          var fancypic = "fancypic";
          var link = "link";
          var number = 1;
          var title = "text";
          if (data['Results'].length == 0) {
            console.log("Failure");
            alert("Invalid Search Please Try Again");
          }
          $.each(data['Results'], function(name2, value) {
            if (number < 17) {
              var currentpic = pic + number;
              var currentrecipe = title + number;
              var currentfancypic = fancypic + number;
              var currentlink = link + number;
              document.getElementById(currentpic).src = value.PhotoUrl;
              document.getElementById(currentpic).style.width = "261px";
              document.getElementById(currentpic).style.height = "269px";
              document.getElementById(currentrecipe).innerHTML = value.Title;
              document.getElementById(currentfancypic).href = value.PhotoUrl;
              document.getElementById(currentlink).href = value.WebURL;
              number++;
            }


          });

        }

      });
    });
})
