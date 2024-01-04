document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('konsola');
  const button2 = document.getElementById('znam'); // Nowy przycisk
  const resetButton = document.getElementById('kasowanie');

const actions2 = [
  () => {
	  	    $('#itemitem').addClass('transform bordered hideBefore');
  },
  () => {
	  							$("#audioplayer").hide();
	      $('#jQueryColorChange11, #jQueryColorChange22').prop('disabled', false);
    $('#jQueryColorChange1, #jQueryColorChange2, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
    $('#hej').addClass('selected2');
    $('#itemitem2').addClass('transformb bordered hideBefore');
    $('#itemitem').removeClass('transform bordered hideBefore');
    $('#itemitem').addClass('green');
    $('.Button1, .Button2').removeClass('active').addClass('inactive');
    $('.Button11, .Button22').removeClass('inactive').addClass('active');
	currentActionIndex = 1;
	   var classesToSave = {
		hej: $('#hej').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
  },
  () => {
			$('#jQueryColorChange111, #jQueryColorChange222').prop('disabled', false);
        $('#hejnowe').addClass('selected4');
	    $('#itemitem3').addClass('transformc bordered hideBefore');
        $('#itemitem2').removeClass('transformb bordered hideBefore');
	    $('#itemitem2').addClass('green');
		$('.Button11, .Button22').removeClass('active').addClass('inactive');
		$('.Button111, .Button222').removeClass('inactive').addClass('active');
		currentActionIndex = 2;
		   var classesToSave = {
	    hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
	  	itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
  },
    () => {
				$('#jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowes').addClass('selected6');
	    $('#itemitem4').addClass('transformd bordered hideBefore');
        $('#itemitem3').removeClass('transformc bordered hideBefore');
		$('#itemitem3').addClass('green');
		$('.Button111, .Button222').removeClass('active').addClass('inactive');
		$('.Button1111, .Button2222').removeClass('inactive').addClass('active');
		currentActionIndex = 3;
		   var classesToSave = {
	    hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
	},
	    () => {
					$('#jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
        $('#hejnowess').addClass('selected8');
	    $('#itemitem5').addClass('transforme bordered hideBefore');
        $('#itemitem4').removeClass('transformd bordered hideBefore');
		$('#itemitem4').addClass('green');
		$('.Button1111, .Button2222').removeClass('active').addClass('inactive');
		$('.Button11111, .Button22222').removeClass('inactive').addClass('active');
		currentActionIndex = 4;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
		() => {
				$('#jQueryColorChange111111, #jQueryColorChange222222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowesss').addClass('selected9');
	    $('#itemitem6').addClass('transformf bordered hideBefore');
        $('#itemitem5').removeClass('transforme bordered hideBefore');
		$('#itemitem5').addClass('green');
		$('.Button11111, .Button22222').removeClass('active').addClass('inactive');
		$('.Button1i, .Button2i').removeClass('inactive').addClass('active');
		currentActionIndex = 5;
		   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowess').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem5').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
		() => {
						startScrolling2();
		$('#jQueryColorChangei, #jQueryColorChange2i').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowesss').addClass('selected10');
	    $('#itemitemi').addClass('transform bordered hideBefore');
        $('#itemitem6').removeClass('transformf bordered hideBefore');
		$('#itemitem6').addClass('green');
		$('.Button111111, .Button222222').removeClass('active').addClass('inactive');
		$('.Button1i, .Button2i').removeClass('inactive').addClass('active');
		currentActionIndex = 6;
		   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowess').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
		itemitemi: $('#itemitemi').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
				() => {
			$('#jQueryColorChange11i, #jQueryColorChange22i').prop('disabled', false);
        $('#heji').addClass('selected14');
	    $('#itemitem2i').addClass('transformb bordered hideBefore');
        $('#itemitemi').removeClass('transform bordered hideBefore');
		$('#itemitemi').addClass('green');
		$('.Button1i, .Button2i').removeClass('active').addClass('inactive');
		$('.Button11i, .Button22i').removeClass('inactive').addClass('active');
		currentActionIndex = 7;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
						() => {
			$('#jQueryColorChange111i, #jQueryColorChange222i').prop('disabled', false);
        $('#hejnowei').addClass('selected16');
	    $('#itemitem3i').addClass('transformc bordered hideBefore');
        $('#itemitem2i').removeClass('transformb bordered hideBefore');
		$('#itemitem2i').addClass('green');
		$('.Button11i, .Button22i').removeClass('active').addClass('inactive');
		$('.Button111i, .Button222i').removeClass('inactive').addClass('active');
		currentActionIndex = 8;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
								() => {
        $('#hejnowesi').addClass('selected18');
	    $('#itemitem4i').addClass('transformd bordered hideBefore');
        $('#itemitem3i').removeClass('transformc bordered hideBefore');
		$('#itemitem3i').addClass('green');
		$('.Button111i, .Button222i').removeClass('active').addClass('inactive');
		$('.Button1111i, .Button2222i').removeClass('inactive').addClass('active');
		currentActionIndex = 9;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
										() => {
        $('#hejnowessi').addClass('selected20');
	    $('#itemitem5i').addClass('transforme bordered hideBefore');
        $('#itemitem4i').removeClass('transformd bordered hideBefore');
		$('#itemitem4i').addClass('green');
		$('.Button1111i, .Button2222i').removeClass('active').addClass('inactive');
		$('.Button11111i, .Button22222i').removeClass('inactive').addClass('active');
		currentActionIndex = 10;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
												() => {
        $('#hejnowesssi').addClass('selected22');
	    $('#itemitem6i').addClass('transformf bordered hideBefore');
        $('#itemitem5i').removeClass('transforme bordered hideBefore');
		$('#itemitem5i').addClass('green');
		$('.Button11111i, .Button22222i').removeClass('active').addClass('inactive');
		$('.Button111111i, .Button222222i').removeClass('inactive').addClass('active');
		currentActionIndex = 11;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
  // Dodaj tutaj kolejne akcje jako funkcje
];

const actions = [
  () => {
	  	    $('#itemitem').addClass('transform bordered hideBefore');
  },
  () => {
	  							$("#audioplayer").hide();
	      $('#jQueryColorChange11, #jQueryColorChange22').prop('disabled', false);
    $('#jQueryColorChange1, #jQueryColorChange2, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
    $('#hej').addClass('selected2');
    $('#itemitem2').addClass('transformb bordered hideBefore');
    $('#itemitem').removeClass('transform bordered hideBefore');
    $('#itemitem').addClass('orange');
    $('.Button1, .Button2').removeClass('active').addClass('inactive');
    $('.Button11, .Button22').removeClass('inactive').addClass('active');
	currentActionIndex = 1;
	   var classesToSave = {
		hej: $('#hej').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
  },
  () => {
			$('#jQueryColorChange111, #jQueryColorChange222').prop('disabled', false);
        $('#hejnowe').addClass('selected4');
	    $('#itemitem3').addClass('transformc bordered hideBefore');
        $('#itemitem2').removeClass('transformb bordered hideBefore');
	    $('#itemitem2').addClass('orange');
		$('.Button11, .Button22').removeClass('active').addClass('inactive');
		$('.Button111, .Button222').removeClass('inactive').addClass('active');
		currentActionIndex = 2;
		   var classesToSave = {
	    hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
	  	itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
  },
    () => {
				$('#jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowes').addClass('selected6');
	    $('#itemitem4').addClass('transformd bordered hideBefore');
        $('#itemitem3').removeClass('transformc bordered hideBefore');
		$('#itemitem3').addClass('orange');
		$('.Button111, .Button222').removeClass('active').addClass('inactive');
		$('.Button1111, .Button2222').removeClass('inactive').addClass('active');
		currentActionIndex = 3;
		   var classesToSave = {
	    hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		itemitem: $('#itemitem').attr('class'),
	  	itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
	},
	    () => {
					$('#jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
        $('#hejnowess').addClass('selected8');
	    $('#itemitem5').addClass('transforme bordered hideBefore');
        $('#itemitem4').removeClass('transformd bordered hideBefore');
		$('#itemitem4').addClass('orange');
		$('.Button1111, .Button2222').removeClass('active').addClass('inactive');
		$('.Button11111, .Button22222').removeClass('inactive').addClass('active');
		currentActionIndex = 4;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
		() => {
				$('#jQueryColorChange111111, #jQueryColorChange222222').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowesss').addClass('selected9');
	    $('#itemitem6').addClass('transformf bordered hideBefore');
        $('#itemitem5').removeClass('transforme bordered hideBefore');
		$('#itemitem5').addClass('orange');
		$('.Button11111, .Button22222').removeClass('active').addClass('inactive');
		$('.Button1i, .Button2i').removeClass('inactive').addClass('active');
		currentActionIndex = 5;
		   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowess').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem5').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
		() => {
						startScrolling2();
		$('#jQueryColorChangei, #jQueryColorChange2i').prop('disabled', false);
		$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
        $('#hejnowesss').addClass('selected10');
	    $('#itemitemi').addClass('transform bordered hideBefore');
        $('#itemitem6').removeClass('transformf bordered hideBefore');
		$('#itemitem6').addClass('orange');
		$('.Button111111, .Button222222').removeClass('active').addClass('inactive');
		$('.Button1i, .Button2i').removeClass('inactive').addClass('active');
		currentActionIndex = 6;
		   var classesToSave = {
	   	hej: $('#hej').attr('class'),
		hejnowe: $('#hejnowe').attr('class'),
		hejnowes: $('#hejnowes').attr('class'),
		hejnowess: $('#hejnowess').attr('class'),
	    hejnowesss: $('#hejnowess').attr('class'),
		itemitem: $('#itemitem').attr('class'),
		itemitem2: $('#itemitem2').attr('class'),
		itemitem3: $('#itemitem3').attr('class'),
		itemitem4: $('#itemitem4').attr('class'),
		itemitem5: $('#itemitem5').attr('class'),
		itemitem6: $('#itemitem6').attr('class'),
		itemitemi: $('#itemitemi').attr('class')
    };
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
				() => {
			$('#jQueryColorChange11i, #jQueryColorChange22i').prop('disabled', false);
        $('#heji').addClass('selected14');
	    $('#itemitem2i').addClass('transformb bordered hideBefore');
        $('#itemitemi').removeClass('transform bordered hideBefore');
		$('#itemitemi').addClass('orange');
		$('.Button1i, .Button2i').removeClass('active').addClass('inactive');
		$('.Button11i, .Button22i').removeClass('inactive').addClass('active');
		currentActionIndex = 7;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
						() => {
			$('#jQueryColorChange111i, #jQueryColorChange222i').prop('disabled', false);
        $('#hejnowei').addClass('selected16');
	    $('#itemitem3i').addClass('transformc bordered hideBefore');
        $('#itemitem2i').removeClass('transformb bordered hideBefore');
		$('#itemitem2i').addClass('orange');
		$('.Button11i, .Button22i').removeClass('active').addClass('inactive');
		$('.Button111i, .Button222i').removeClass('inactive').addClass('active');
		currentActionIndex = 8;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
								() => {
        $('#hejnowesi').addClass('selected18');
	    $('#itemitem4i').addClass('transformd bordered hideBefore');
        $('#itemitem3i').removeClass('transformc bordered hideBefore');
		$('#itemitem3i').addClass('orange');
		$('.Button111i, .Button222i').removeClass('active').addClass('inactive');
		$('.Button1111i, .Button2222i').removeClass('inactive').addClass('active');
		currentActionIndex = 9;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
										() => {
        $('#hejnowessi').addClass('selected20');
	    $('#itemitem5i').addClass('transforme bordered hideBefore');
        $('#itemitem4i').removeClass('transformd bordered hideBefore');
		$('#itemitem4i').addClass('orange');
		$('.Button1111i, .Button2222i').removeClass('active').addClass('inactive');
		$('.Button11111i, .Button22222i').removeClass('inactive').addClass('active');
		currentActionIndex = 10;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
												() => {
        $('#hejnowesssi').addClass('selected22');
	    $('#itemitem6i').addClass('transformf bordered hideBefore');
        $('#itemitem5i').removeClass('transforme bordered hideBefore');
		$('#itemitem5i').addClass('orange');
		$('.Button11111i, .Button22222i').removeClass('active').addClass('inactive');
		$('.Button111111i, .Button222222i').removeClass('inactive').addClass('active');
		currentActionIndex = 11;
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
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		},
  // Dodaj tutaj kolejne akcje jako funkcje
];

let currentActionIndex = 0;
  let currentActionIndex2 = 0;
  let lastStoppedIndex = -1; // Zmienna do śledzenia ostatnio zatrzymanego indeksu

  function executeAction(actionIndex, activeActions) {
    if (actionIndex < activeActions.length) {
      activeActions[actionIndex]();
      if (activeActions === actions) {
        currentActionIndex = actionIndex;
        localStorage.setItem('currentActionIndex', currentActionIndex);
        lastStoppedIndex = currentActionIndex;
      } else {
        currentActionIndex2 = actionIndex;
        localStorage.setItem('currentActionIndex2', currentActionIndex2);
        lastStoppedIndex = currentActionIndex2;
      }
    } else {
      console.log('Wszystkie akcje zostały wykonane');
    }
  }

  const savedCurrentActionIndex = localStorage.getItem('currentActionIndex');
  if (savedCurrentActionIndex !== null) {
    currentActionIndex = parseInt(savedCurrentActionIndex);
  }

  const savedCurrentActionIndex2 = localStorage.getItem('currentActionIndex2');
  if (savedCurrentActionIndex2 !== null) {
    currentActionIndex2 = parseInt(savedCurrentActionIndex2);
  }

  function resetCurrentActionIndexes() {
    currentActionIndex = 0;
    currentActionIndex2 = 0;
    lastStoppedIndex = -1;
    localStorage.removeItem('currentActionIndex');
    localStorage.removeItem('currentActionIndex2');
  }

  function handleButtonClick() {
    if (lastStoppedIndex !== -1 && currentActionIndex !== lastStoppedIndex) {
      currentActionIndex = lastStoppedIndex;
    }
    executeAction(currentActionIndex + 1, actions);
  }

  function handleButton2Click() {
    if (lastStoppedIndex !== -1 && currentActionIndex2 !== lastStoppedIndex) {
      currentActionIndex2 = lastStoppedIndex;
    }
    executeAction(currentActionIndex2 + 1, actions2);
  }

  button.addEventListener('click', handleButtonClick);
  button2.addEventListener('click', handleButton2Click);

  resetButton.addEventListener('click', function() {
    resetCurrentActionIndexes();
    // Dodaj tutaj inne czynności, które mają być wykonywane po kliknięciu przycisku resetującego
  });

  // Funkcja do zapisywania klas do localStorage
  function bindColorChangeButton(buttonId, actionIndex) {
    $(buttonId).click(function() {
    executeAction(actionIndex, actions);

      const classesToSave = {
        hej: $('#hej').attr('class'),
        hejnowe: $('#hejnowe').attr('class'),
        itemitem: $('#itemitem').attr('class'),
        itemitem2: $('#itemitem2').attr('class'),
        itemitem3: $('#itemitem3').attr('class')
      };
      localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
    });
  }

  // Dodaj tutaj inne wywołania funkcji bindColorChangeButton dla przycisków actions2
  bindColorChangeButton('#jQueryColorChange1', 1);
  bindColorChangeButton('#jQueryColorChange2', 1);
  bindColorChangeButton('#jQueryColorChange11', 2);
  bindColorChangeButton('#jQueryColorChange22', 2);
  bindColorChangeButton('#jQueryColorChange111', 3);
  bindColorChangeButton('#jQueryColorChange222', 3);
  bindColorChangeButton('#jQueryColorChange1111', 4);
  bindColorChangeButton('#jQueryColorChange2222', 4);
  bindColorChangeButton('#jQueryColorChange11111', 5);
  bindColorChangeButton('#jQueryColorChange22222', 5);
  bindColorChangeButton('#jQueryColorChange111111', 6);
  bindColorChangeButton('#jQueryColorChange222222', 6);
  bindColorChangeButton('#jQueryColorChangei', 7);
  bindColorChangeButton('#jQueryColorChange2i', 7);
  bindColorChangeButton('#jQueryColorChange11i', 8);
  bindColorChangeButton('#jQueryColorChange22i', 8);
  bindColorChangeButton('#jQueryColorChange111i', 9);
  bindColorChangeButton('#jQueryColorChange222i', 9);
  bindColorChangeButton('#jQueryColorChange1111i', 10);
  bindColorChangeButton('#jQueryColorChange2222i', 10);
  bindColorChangeButton('#jQueryColorChange11111i', 11);
  bindColorChangeButton('#jQueryColorChange22222i', 11);
  bindColorChangeButton('#jQueryColorChange111111i', 12);
  bindColorChangeButton('#jQueryColorChange222222i', 12);
});