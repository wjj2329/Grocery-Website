jQuery(function($) {
	'use strict';

	//Responsive Nav
	$('li.dropdown').find('.fa-angle-down').each(function() {
		$(this).on('click', function() {
			if ($(window).width() < 768) {
				$(this).parent().next().slideToggle();
			}
			return false;
		});
	});

	//Initiat WOW JS
	new WOW().init();

	// recipeSearch filter
	$(window).load(function() {

		$('.main-slider').addClass('animate-in');
		$('.preloader').remove();
		//End Preloader

		if ($('.masonery_area').length) {
			$('.masonery_area').masonry(); //Masonry
		}

		var $portfolio_selectors = $('.recipeSearch-filter >li>a');

		if ($portfolio_selectors.length) {

			var $recipeSearch = $('.recipeSearch-items');
			$recipeSearch.isotope({
				itemSelector: '.recipeSearch-item',
				layoutMode: 'fitRows'
			});

			$portfolio_selectors.on('click', function() {
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$recipeSearch.isotope({
					filter: selector
				});
				return false;
			});
		}

	});


	$('.timer').each(count);

	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}

	// Search
	$('.fa-search').on('click', function() {
		$('.field-toggle').fadeToggle(200);
	});



	// Progress Bar
	$.each($('div.progress-bar'), function() {
		$(this).css('width', $(this).attr('data-transition') + '%');
	});

});

var userName = 'User';
var userRef;
var allUserInfo = null;//User Array. 2 Variables contained in it. Format: Array GROCERYLIST[], key, items. Array WEEKRECIPES[], Day of Week, key, items.
var weekrecipes = [];

function openLogin() {
	$('#homePageDiv').hide();
	$('#planPageDiv').hide();
	$('#grocerySearchDiv').hide();
	$('#recipeSearchDiv').hide();
	$('#likedRecipes').hide();
	$('#normalHeaderDiv').hide();
	$('#loginHeaderDiv').show();
	$('#loginDiv').show();
}

function openHome() {
	$('#loginDiv').hide();
	$('#planPageDiv').hide();
	$('#grocerySearchDiv').hide();
	$('#recipeSearchDiv').hide();
	$('#loginHeaderDiv').hide();
	$('#likedRecipes').hide();
	$('#normalHeaderDiv').show();
	$('#homePageDiv').show();
	$('.userName').html(userName);
}

function openPlan() {
	$('#loginDiv').hide();
	$('#homePageDiv').hide();
	$('#grocerySearchDiv').hide();
	$('#recipeSearchDiv').hide();
	$('#loginHeaderDiv').hide();
	$('#normalHeaderDiv').show();
	$('#planPageDiv').show();
	$('#likedRecipes').show();

	//print weekly recipes
}

function openGrocery() {
	$('#loginDiv').hide();
	$('#homePageDiv').hide();
	$('#planPageDiv').hide();
	$('#recipeSearchDiv').hide();
	$('#loginHeaderDiv').hide();
	$('#likedRecipes').hide();
	$('#normalHeaderDiv').show();
	$('#grocerySearchDiv').show();

	printGroceries();
}

function openRecipe() {
	$('#loginDiv').hide();
	$('#homePageDiv').hide();
	$('#planPageDiv').hide();
	$('#grocerySearchDiv').hide();
	$('#loginHeaderDiv').hide();
	$('#normalHeaderDiv').show();
	$('#recipeSearchDiv').show();
	$('.idLabel').hide();
	$('#likedRecipes').show();
}

function printGroceries() {
	$('#outputcontent').html('');
	for (i = 0; i < groceries.length; i++) {
		var item;
		item = groceries[i];
		var htmlstring = '<li class="btn btn-lg btn-primary groceryItem">' + item + "</li>";
		$('#outputcontent').append(htmlstring);
	}
	post_to_db_func();
}

function removeFromArray(itemToRemove, arrayName) {
	var indexToRemove = jQuery.inArray(itemToRemove, arrayName);
	if (indexToRemove > -1) {
		arrayName.splice(indexToRemove, 1);
	};
}

function login() {
	userName = $('#inputName').val();

	if (userName.length === 0) {
		alert('Please Enter a username...');
	} 

	else {
		var userFound = 0; 
//		console.log(userFound);														//allUserInfo = [array in database]
	
		if (userFound === 0) {
			console.log("User not in database...yet.")
			openHome();
		}
		else {
			console.log("User Found in Database");

			openPlan();
		}
	}
	post_to_db_func();
}

$(document).ready(function() {
	openLogin();


	$('#inputName').on("keypress", function(e) {
		if (e.keyCode == 13) {
			login();
		}
	});

	$('#autocomplete').on("keypress", function(e) {
		if (e.keyCode == 13) {
			if ($('#autocomplete').val().length !== 0) {
				var ingredient = $('#autocomplete').val();
				groceries.push(ingredient);
				post_to_db_func();

				printGroceries();
				$('#autocomplete').val('');
			}
		}
	});
	$('#grocerySearchIcon').on("click", function(e) {
		if ($('#autocomplete').val().length !== 0) {
			var ingredient = $('#autocomplete').val();
			groceries.push(ingredient);
			post_to_db_func();

			printGroceries();
			$('#autocomplete').val('');
		}
	});

	$('#outputcontent').on('click', '.groceryItem', function() {
		var thisItem = $(this).text();
		removeFromArray(thisItem, groceries);
		post_to_db_func();

		//Search Mongo Array, remove item from database

		$(this).remove();
	});
	$('#likedRecipes').on('click', '.removeLiked', function() {
		var thisItem = this.parentNode.outerHTML;
		console.log(likedRecipes);
		removeFromArray(thisItem, likedRecipes);
		$(this).closest('.likedRecipe').remove();
		console.log(likedRecipes);
	});

	$('[data-toggle="tooltip"]').tooltip();


});

function post_to_db_func(){
  var myobj = {UserName: userName, GroceryList: groceries, WeeklyRecipes: weekrecipes};
  jobj = JSON.stringify(myobj);
  console.log("JSON String: " + jobj)

  var url = "user";

    $.ajax({
      url:url,
      type: "POST",
      data: jobj,
      contentType: "application/json; charset=utf-8",
      success: function(data,textStatus) {
//             $("#done").html("The User was Successfully Posted.");
      }
    });
};

function remove_from_db_func(){
      console.log(userName + " to be Removed")

      var url = "remove";

        $.ajax({
          url:url,
          type: "POST",
          data: userName,
          contentType: "application/json; charset=utf-8",
          success: function(data,textStatus) {
//             $("#done").html("The User was Successfully Posted.");
          }
        });
};

function get_users() {
  $.getJSON('user', function(data) {
    console.log(data);
    var numUsers = data.length;
    console.log("numUsers: " + numUsers);

    allUserInfo = data; 

    

//  $("#allusers").html(everything);
  })
};
