$(document).ready(function() {
  $(document).on("click", "ul.prod-gram .init", function() {
    $(this).parent().find('li:not(.init)').toggle();
  });
  var allOptions1 = $("ul.prod-gram").children('li:not(.init)');
  $("ul.prod-gram").on("click", "li:not(.init)", function() {
    allOptions1.removeClass('selected');
    $(this).addClass('selected');
    var liValue = $("ul.prod-gram").find(".selected").data("value");
    if ( allOptions1 ) 
    event.preventDefault();
	event.stopPropagation();
    $(this).parent().children('.init').html($(this).html());
    $(this).parent().find('li:not(.init)').toggle();
  });
});

$(document).ready(function() {
  $(document).on("click", "ul.prod-gramnowy .initnowy", function() {
    $(this).parent().find('li:not(.initnowy)').toggle();
  });
  var allOptions2 = $("ul.prod-gramnowy").children('li:not(.initnowy)');
  $("ul.prod-gramnowy").on("click", "li:not(.initnowy)", function() {
    allOptions2.removeClass('selected');
    $(this).addClass('selected');
    var liValue = $("ul.prod-gramnowy").find(".selected").data("value");
    if ( allOptions2 ) 
    event.preventDefault();
	event.stopPropagation();
    $(this).parent().children('.initnowy').html($(this).html());
    $(this).parent().find('li:not(.initnowy)').toggle();
  });
});

$(document).ready(function() {
  $(document).on("click", "ul.prod-gramnew .initnew", function() {
    $(this).parent().find('li:not(.initnew)').toggle();
  });
  var allOptions2 = $("ul.prod-gramnew").children('li:not(.initnew)');
  $("ul.prod-gramnew").on("click", "li:not(.initnew)", function() {
    allOptions3.removeClass('selected');
    $(this).addClass('selected');
    var liValue = $("ul.prod-gramnew").find(".selected").data("value");
    if ( allOptions3 ) 
    event.preventDefault();
	event.stopPropagation();
    $(this).parent().children('.initnew').html($(this).html());
    $(this).parent().find('li:not(.initnew)').toggle();
  });
});


$("#menu").click(function() {
  var liValue = $("ul.prod-gram").find(".selected").data("value");
  var ulId = $(this).closest('ul').attr('id');
});

$("#menumenu").click(function() {
  var liValue = $("ul.prod-gramnowy").find(".selected").data("value");
  var ulId = $(this).closest('ul').attr('id');
});

$("#menumenumenu").click(function() {
  var liValue = $("ul.prod-gramnew").find(".selected").data("value");
  var ulId = $(this).closest('ul').attr('id');
});


$("#menu").click(function() {
    var liValue = $("#menu").find(".selected").data("value");
	var info = {
		"language":liValue,
	};
	console.log(info);
	
	$.ajax({
		data: info,
		url: "language.php",
		type: "POST",
		method: "POST",
		success: function(result){
			console.log("finished");
			console.log(result);
			},
		error: function(result){
			console.log("error");
			console.log(result);
			}
		});
	});

$("ul.prod-gram").on("click", "li:not(.init)", function(){
	var liV = $(this).attr('id');
	var liVV = $(this).attr('id2');
	var liVVV = $(this).attr('id4');
	var li = $(this).attr('id44');
	var info = {
		"language2":liV,
		"language3":liVV,
		"language4":liVVV,
		"language44":li,
		
	};
	console.log(info);
	
	$.ajax({
		data: info,
		url: "language2i.php",
		type: "POST",
		method: "POST",
		success: function(result){
			console.log("finished");
			console.log(result);
			},
		error: function(result){
			console.log("error");
			console.log(result);
			}
		});
	});
	
$("#menumenu").click(function() {
    var liValue2 = $("#menumenu").find(".selected").data("value");
	var info = {
		"language7":liValue2,
	};
	console.log(info);
	
	$.ajax({
		data: info,
		url: "language7.php",
		type: "POST",
		method: "POST",
		success: function(result){
			console.log("finished");
			console.log(result);
			},
		error: function(result){
			console.log("error");
			console.log(result);
			}
		});
	});

$("ul.prod-gramnowy").on("click", "li:not(.init)", function(){
	var linowy = $(this).attr('id');
	var linowy2 = $(this).attr('id2');
	var linowy3 = $(this).attr('id3');
	var linowy4 = $(this).attr('id4');
	var info = {
		"language8":linowy,
		"language9":linowy2,
		"language10":linowy3,
		"language11":linowy4,
	};
	console.log(info);
	
	$.ajax({
		data: info,
		url: "language8i.php",
		type: "POST",
		method: "POST",
		success: function(result){
			console.log("finished");
			console.log(result);
			},
		error: function(result){
			console.log("error");
			console.log(result);
			}
		});
	});
	
$("#menumenumenu").click(function() {
    var liValue15 = $("#menumenumenu").find(".selected").data("value");
	var info = {
		"language70":liValue15,
	};
	console.log(info);
	
	$.ajax({
		data: info,
		url: "language70.php",
		type: "POST",
		method: "POST",
		success: function(result){
			console.log("finished");
			console.log(result);
			},
		error: function(result){
			console.log("error");
			console.log(result);
			}
		});
	});

$("ul.prod-gramnew").on("click", "li:not(.initnew)", function(){
	var linowy = $(this).attr('id');
	var linowy2 = $(this).attr('id2');
	var linowy3 = $(this).attr('id3');
	var linowy4 = $(this).attr('id4');
	var info = {
		"language8":linowy,
		"language9":linowy2,
		"language10":linowy3,
		"language11":linowy4,
	};
	console.log(info);
	
	$.ajax({
		data: info,
		url: "language70i.php",
		type: "POST",
		method: "POST",
		success: function(result){
			console.log("finished");
			console.log(result);
			},
		error: function(result){
			console.log("error");
			console.log(result);
			}
		});
	});