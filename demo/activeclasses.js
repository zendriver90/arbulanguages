$(document).ready(function() {
  // Sprawdź, czy w localStorage są zapisane klasy
  var savedClasses = localStorage.getItem('savedClasses');
  if (savedClasses) {
    // Jeśli są zapisane klasy, zastosuj je do odpowiednich elementów
    var classes = JSON.parse(savedClasses);
	$('.Button1, Button2').addClass(classes.Button1Button2);
	$('#hej').addClass(classes.hej);
    $('#itemitem').addClass(classes.itemitem);
	$('#hejnowe').addClass(classes.hejnowe);
    $('#itemitem2').addClass(classes.itemitem2);
	$('#hejnowes').addClass(classes.hejnowes);
	$('#itemitem3').addClass(classes.itemitem3);
	$('#hejnowess').addClass(classes.hejnowes);
	$('#itemitem4').addClass(classes.itemitem4);
	$('#hejnowesss').addClass(classes.hejnowes);
	$('#itemitem5').addClass(classes.itemitem5);
	$('#hejnowessss').addClass(classes.hejnowes);
	$('#itemitem6').addClass(classes.itemitem6);
	$('#heji').addClass(classes.heji);
	$('#itemitemi').addClass(classes.itemitemi);
	$('#hejnowei').addClass(classes.hejnowei);
	$('#itemitem2i').addClass(classes.itemitem2i);
	$('#hejnowesi').addClass(classes.hejnowesi);
	$('#itemitem3i').addClass(classes.itemitem3i);
	$('#hejnowessi').addClass(classes.hejnowessi);
	$('#itemitem4i').addClass(classes.itemitem4i);
	$('#hejnowesssi').addClass(classes.hejnowesssi);
	$('#itemitem5i').addClass(classes.itemitem5i);
	$('#hejnowesssai').addClass(classes.hejnowesssi);
	$('#itemitem6i').addClass(classes.itemitem6i);
	$('#itemitemj').addClass(classes.itemitemj);
	$('#itemitem2j').addClass(classes.itemitem2j);
	$('#itemitem3j').addClass(classes.itemitem3j);
  } else {
    // Jeśli nie ma zapisanych klas, dodaj je na początku
    $('#itemitem').addClass('transform bordered hideBefore');
		$('.Button1, .Button2').addClass('active');
  }

  $('#jQueryColorChange').click(function() {
	  	$('#jQueryColorChange11, #jQueryColorChange22').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
        $('#hej').addClass('selected2');
	    $('#itemitem2').addClass('transformb bordered hideBefore');
        $('#itemitem').removeClass('transform bordered hideBefore');
		$('#itemitem').addClass('orange');
		$('.Button1, .Button2').removeClass('active').addClass('inactive');
		$('.Button11, .Button22').removeClass('inactive').addClass('active');
   
   var classesToSave = {
		Button1Button2: $('.Button1, .Button2').attr('class'),
		hej: $('#hej').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
  $('#jQueryColorChange2').click(function() {
	  	$('#jQueryColorChange11, #jQueryColorChange22').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
        $('#hej').addClass('selected');
	    $('#itemitem2').addClass('transformb bordered hideBefore');
        $('#itemitem').removeClass('transform bordered hideBefore');
		$('#itemitem').addClass('green');
		$('.Button1, .Button2').removeClass('active').addClass('inactive');
		$('.Button11, .Button22').removeClass('inactive').addClass('active');
   
   var classesToSave = {
		hej: $('#hej').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange11').click(function() {
		$('#jQueryColorChange111, #jQueryColorChange222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
        $('#hejnowe').addClass('selected4');
	    $('#itemitem3').addClass('transformc bordered hideBefore');
        $('#itemitem2').removeClass('transformb bordered hideBefore');
	    $('#itemitem2').addClass('orange');
		$('.Button11, .Button22').removeClass('active').addClass('inactive');
		$('.Button111, .Button222').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	    hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
	  	itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
  $('#jQueryColorChange22').click(function() {
		$('#jQueryColorChange111, #jQueryColorChange222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
        $('#hejnowe').addClass('selected3');
	    $('#itemitem3').addClass('transformc bordered hideBefore');
        $('#itemitem2').removeClass('transformb bordered hideBefore');
		$('#itemitem2').addClass('green');
		$('.Button11, .Button22').removeClass('active').addClass('inactive');
		$('.Button111, .Button222').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	    hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
	  	itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
     $('#jQueryColorChange111').click(function() {
		$('#jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowes').addClass('selected6');
	    $('#itemitem4').addClass('transformd bordered hideBefore');
        $('#itemitem3').removeClass('transformc bordered hideBefore');
		$('#itemitem3').addClass('orange');
		$('.Button111, .Button222').removeClass('active').addClass('inactive');
		$('.Button1111, .Button2222').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	    hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
  $('#jQueryColorChange222').click(function() {
	  	$('#jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowes').addClass('selected5');
	    $('#itemitem4').addClass('transformd bordered hideBefore');
        $('#itemitem3').removeClass('transformc bordered hideBefore');
		$('#itemitem3').addClass('green');
		$('.Button111, .Button222').removeClass('active').addClass('inactive');
		$('.Button1111, .Button2222').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
}); 
$('#jQueryColorChange1111').click(function() {
		$('#jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
        $('#hejnowess').addClass('selected8');
	    $('#itemitem5').addClass('transforme bordered hideBefore');
        $('#itemitem4').removeClass('transformd bordered hideBefore');
		$('#itemitem4').addClass('orange');
		$('.Button1111, .Button2222').removeClass('active').addClass('inactive');
		$('.Button11111, .Button22222').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
}); 
$('#jQueryColorChange2222').click(function() {
		$('#jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
        $('#hejnowess').addClass('selected7');
	    $('#itemitem5').addClass('transforme bordered hideBefore');
        $('#itemitem4').removeClass('transformd bordered hideBefore');
		$('#itemitem4').addClass('green');
		$('.Button1111, .Button2222').removeClass('active').addClass('inactive');
		$('.Button11111, .Button22222').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
}); 
$('#jQueryColorChange11111').click(function() {
		$('#jQueryColorChange111111, #jQueryColorChange222222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowesss').addClass('selected10');
	    $('#itemitem6').addClass('transformf bordered hideBefore');
        $('#itemitem5').removeClass('transforme bordered hideBefore');
		$('#itemitem5').addClass('orange');
		$('.Button11111, .Button22222').removeClass('active').addClass('inactive');
		$('.Button111111, .Button222222').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowesss').attr('class'),
	    hejnowesss: $('#hejnowess').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem5').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
}); 
$('#jQueryColorChange22222').click(function() {
		$('#jQueryColorChange111111, #jQueryColorChange222222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowesss').addClass('selected9');
	    $('#itemitem6').addClass('transformf bordered hideBefore');
        $('#itemitem5').removeClass('transforme bordered hideBefore');
		$('#itemitem5').addClass('green');
		$('.Button11111, .Button22222').removeClass('active').addClass('inactive');
		$('.Button111111, .Button222222').removeClass('inactive').addClass('active');
   
   var classesToSave = {
		hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
}); 
$('#jQueryColorChange111111').click(function() {
        $('#hejnowessss').addClass('selected12');
	    $('#itemitemi').addClass('transform bordered hideBefore');
        $('#itemitem6').removeClass('transformf bordered hideBefore');
		$('#itemitem6').addClass('orange');
		$('.Button111111, .Button222222').removeClass('active').addClass('inactive');
		$('.Button1i, .Button2i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
}); 
$('#jQueryColorChange222222').click(function() {
        $('#hejnowessss').addClass('selected11');
	    $('#itemitemi').addClass('transform bordered hideBefore');
        $('#itemitem6').removeClass('transformf bordered hideBefore');
		$('#itemitem6').addClass('green');
		$('.Button111111, .Button222222').removeClass('active').addClass('inactive');
		$('.Button1i, .Button2i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChangei').click(function() {
        $('#heji').addClass('selected14');
	    $('#itemitem2i').addClass('transformb bordered hideBefore');
        $('#itemitemi').removeClass('transform bordered hideBefore');
		$('#itemitemi').addClass('orange');
		$('.Button1i, .Button2i').removeClass('active').addClass('inactive');
		$('.Button11i, .Button22i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
}); 
$('#jQueryColorChange2i').click(function() {
        $('#heji').addClass('selected13');
	    $('#itemitem2i').addClass('transformb bordered hideBefore');
        $('#itemitemi').removeClass('transform bordered hideBefore');
		$('#itemitemi').addClass('green');
		$('.Button1i, .Button2i').removeClass('active').addClass('inactive');
		$('.Button11i, .Button22i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange11i').click(function() {
        $('#hejnowei').addClass('selected16');
	    $('#itemitem3i').addClass('transformc bordered hideBefore');
        $('#itemitem2i').removeClass('transformb bordered hideBefore');
		$('#itemitem2i').addClass('orange');
		$('.Button11i, .Button22i').removeClass('active').addClass('inactive');
		$('.Button111i, .Button222i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange22i').click(function() {
        $('#hejnowei').addClass('selected15');
	    $('#itemitem3i').addClass('transformc bordered hideBefore');
        $('#itemitem2i').removeClass('transformb bordered hideBefore');
		$('#itemitem2i').addClass('green');
		$('.Button11i, .Button22i').removeClass('active').addClass('inactive');
		$('.Button111i, .Button222i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange111i').click(function() {
        $('#hejnowesi').addClass('selected18');
	    $('#itemitem4i').addClass('transformd bordered hideBefore');
        $('#itemitem3i').removeClass('transformc bordered hideBefore');
		$('#itemitem3i').addClass('orange');
		$('.Button111i, .Button222i').removeClass('active').addClass('inactive');
		$('.Button1111i, .Button2222i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange222i').click(function() {
        $('#hejnowesi').addClass('selected17');
	    $('#itemitem4i').addClass('transformd bordered hideBefore');
        $('#itemitem3i').removeClass('transformc bordered hideBefore');
		$('#itemitem3i').addClass('green');
		$('.Button111i, .Button222i').removeClass('active').addClass('inactive');
		$('.Button1111i, .Button2222i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange1111i').click(function() {
        $('#hejnowessi').addClass('selected20');
	    $('#itemitem5i').addClass('transforme bordered hideBefore');
        $('#itemitem4i').removeClass('transformd bordered hideBefore');
		$('#itemitem4i').addClass('orange');
		$('.Button1111i, .Button2222i').removeClass('active').addClass('inactive');
		$('.Button11111i, .Button22222i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		hejnowessi: $('#hejnowessi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class'),
		itemitem5i: $('#itemitem5i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange2222i').click(function() {
        $('#hejnowessi').addClass('selected19');
	    $('#itemitem5i').addClass('transforme bordered hideBefore');
        $('#itemitem4i').removeClass('transformd bordered hideBefore');
		$('#itemitem4i').addClass('green');
		$('.Button1111i, .Button2222i').removeClass('active').addClass('inactive');
		$('.Button11111i, .Button22222i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		hejnowessi: $('#hejnowessi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class'),
		itemitem5i: $('#itemitem5i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange11111i').click(function() {
        $('#hejnowesssi').addClass('selected22');
	    $('#itemitem6i').addClass('transformf bordered hideBefore');
        $('#itemitem5i').removeClass('transforme bordered hideBefore');
		$('#itemitem5i').addClass('orange');
		$('.Button11111i, .Button22222i').removeClass('active').addClass('inactive');
		$('.Button111111i, .Button222222i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		hejnowessi: $('#hejnowessi').attr('class'),
		hejnowesssi: $('#hejnowesssi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class'),
		itemitem5i: $('#itemitem5i').attr('class'),
		itemitem6i: $('#itemitem6i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange22222i').click(function() {
        $('#hejnowessi').addClass('selected21');
	    $('#itemitem6i').addClass('transformf bordered hideBefore');
        $('#itemitem5i').removeClass('transforme bordered hideBefore');
		$('#itemitem5i').addClass('green');
		$('.Button11111i, .Button22222i').removeClass('active').addClass('inactive');
		$('.Button111111i, .Button222222i').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		hejnowessi: $('#hejnowessi').attr('class'),
		hejnowesssi: $('#hejnowesssi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class'),
		itemitem5i: $('#itemitem5i').attr('class'),
		itemitem6i: $('#itemitem6i').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange111111i').click(function() {
        $('#hejnowessi').addClass('selected21');
	    $('#itemitemj').addClass('transform bordered hideBefore');
        $('#itemitem6i').removeClass('transformf bordered hideBefore');
		$('#itemitem6i').addClass('orange');
		$('.Button111111i, .Button222222i').removeClass('active').addClass('inactive');
		$('.Button1j, .Button1j').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		hejnowessi: $('#hejnowessi').attr('class'),
		hejnowesssi: $('#hejnowesssi').attr('class'),
		hejnowessssi: $('#hejnowessssi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class'),
		itemitem5i: $('#itemitem5i').attr('class'),
		itemitem6i: $('#itemitem6i').attr('class'),
		itemitemj: $('#itemitemj').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange222222i').click(function() {
        $('#hejnowessi').addClass('selected21');
	    $('#itemitemj').addClass('transform bordered hideBefore');
        $('#itemitem6i').removeClass('transformf bordered hideBefore');
		$('#itemitem6i').addClass('green');
		$('.Button111111i, .Button222222i').removeClass('active').addClass('inactive');
		$('.Button1j, .Button1j').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		hejnowessi: $('#hejnowessi').attr('class'),
		hejnowesssi: $('#hejnowesssi').attr('class'),
		hejnowessssi: $('#hejnowessssi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class'),
		itemitem5i: $('#itemitem5i').attr('class'),
		itemitem6i: $('#itemitem6i').attr('class'),
		itemitemj: $('#itemitemj').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChangej').click(function() {
        $('#hejnowessi').addClass('selected21');
	    $('#itemitem2j').addClass('transformb bordered hideBefore');
        $('#itemitemj').removeClass('transform bordered hideBefore');
		$('#itemitemj').addClass('orange');
		$('.Button1j, .Button1j').removeClass('active').addClass('inactive');
		$('.Button2j, .Button2j').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		hejnowessi: $('#hejnowessi').attr('class'),
		hejnowesssi: $('#hejnowesssi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class'),
		itemitem5i: $('#itemitem5i').attr('class'),
		itemitem6i: $('#itemitem6i').attr('class'),
		itemitemj: $('#itemitemj').attr('class'),
		itemitem2j: $('#itemitem2j').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange2j').click(function() {
        $('#hejnowessi').addClass('selected21');
	    $('#itemitem2j').addClass('transformb bordered hideBefore');
        $('#itemitemj').removeClass('transform bordered hideBefore');
		$('#itemitemj').addClass('green');
		$('.Button1j, .Button1j').removeClass('active').addClass('inactive');
		$('.Button2j, .Button2j').removeClass('inactive').addClass('active');
   
   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowesss').attr('class'),
		hejnowessss: $('#hejnowessss').attr('class'),
		heji: $('#heji').attr('class'),
		hejnowei: $('#hejnowei').attr('class'),
		hejnowesi: $('#hejnowesi').attr('class'),
		hejnowessi: $('#hejnowessi').attr('class'),
		hejnowesssi: $('#hejnowesssi').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
	  	itemitemi: $('#itemitemi').attr('class'),
		itemitem2i: $('#itemitem2i').attr('class'),
		itemitem3i: $('#itemitem3i').attr('class'),
		itemitem4i: $('#itemitem4i').attr('class'),
		itemitem5i: $('#itemitem5i').attr('class'),
		itemitem6i: $('#itemitem6i').attr('class'),
		itemitemj: $('#itemitemj').attr('class'),
		itemitem2j: $('#itemitem2j').attr('class')
    };
    localStorage.setItem('savedClasses', JSON.stringify(classesToSave));
});
$('#jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222, #jQueryColorChange11111, #jQueryColorChange22222, #jQueryColorChange111111, #jQueryColorChange222222').prop('disabled', true);
	$('.Button11, .Button22').addClass('inactive');
	$('.Button111, .Button222').addClass('inactive');
	$('.Button1111, .Button2222').addClass('inactive');
	$('.Button11111, .Button22222').addClass('inactive');
	$('.Button111111, .Button222222').addClass('inactive');
	$('.Button1i, .Button2i').addClass('inactive');
	$('.Button11i, .Button22i').addClass('inactive');
	$('.Button111i, .Button222i').addClass('inactive');
	$('.Button1111i, .Button2222i').addClass('inactive');
});