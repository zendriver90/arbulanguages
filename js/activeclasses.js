document.addEventListener('DOMContentLoaded', function () {
	$('#kasowanie').click(function () {
		startScrollingall();
		$('#startButton8').hide();
		$('#itemitem').addClass('transform bordered hideBefore');
		$('#storyplay').addClass('hidden');
		$('#znam').removeClass('hej3');
		$('#znam').addClass('hej4');
		$('#slowoagain').addClass('hidden');
		$('#dalej').removeClass('hej4');
		$('#dalej').addClass('hej3');
		$('#trening').removeClass('hidden');
		$('#trening').addClass('hej3');
		$('#slowo').removeClass('hej3');
		$('#slowo').addClass('hidden');
		$('#story').removeClass('hej3');
		$('#story').addClass('hidden');
		$("#audioplayer").removeClass('add');
		$("#audioplayer").addClass('on');
		$('.Button1').addClass('active');
		$('.Button2').addClass('active');
		$('#jQueryColorChange1, #jQueryColorChange2').prop('disabled', false);
		$('.Button1, .Button2').removeClass('inactive').addClass('active');
		$('.Button11, .Button22').removeClass('active').addClass('inactive');
		$('#itemitem2').removeClass('transformb bordered hideBefore');
		$('#itemitem3').removeClass('transformc bordered hideBefore');
		$('#itemitem4').removeClass('transformd bordered hideBefore');
		$('#itemitem5').removeClass('transforme bordered hideBefore');
		$('#itemitem6').removeClass('transformf bordered hideBefore');
		$('#itemitemi').removeClass('transform bordered hideBefore');
		$('#itemitem2i').removeClass('transformb bordered hideBefore');
		$('#itemitem3i').removeClass('transformc bordered hideBefore');
		$('#itemitem4i').removeClass('transformd bordered hideBefore');
		$('#itemitem5i').removeClass('transforme bordered hideBefore');
		$('#itemitem6i').removeClass('transformf bordered hideBefore');
		$('#itemitemj').removeClass('transform bordered hideBefore');
		$('#itemitem2j').removeClass('transformb bordered hideBefore');
		$('#itemitem3j').removeClass('transformc bordered hideBefore');
		$('#itemitem4j').removeClass('transformd bordered hideBefore');
		$('#itemitem5j').removeClass('transforme bordered hideBefore');
		$('#itemitem6j').removeClass('transformf bordered hideBefore');
		$('#itemitemk').removeClass('transform bordered hideBefore');
		$('#itemitem2k').removeClass('transformb bordered hideBefore');
		$('#itemitem3k').removeClass('transformc bordered hideBefore');
		$('#itemitem4k').removeClass('transformd bordered hideBefore');
		$('#itemitem5k').removeClass('transforme bordered hideBefore');
		$('#itemitem6k').removeClass('transformf bordered hideBefore');
		$('#itemitem').removeClass('green orange');
		$('#itemitem2').removeClass('green orange');
		$('#itemitem3').removeClass('green orange');
		$('#itemitem4').removeClass('green orange');
		$('#itemitem5').removeClass('green orange');
		$('#itemitem6').removeClass('green orange');
		$('#itemitemi').removeClass('green orange');
		$('#itemitem2i').removeClass('green orange');
		$('#itemitem3i').removeClass('green orange');
		$('#itemitem4i').removeClass('green orange');
		$('#itemitem5i').removeClass('green orange');
		$('#itemitem6i').removeClass('green orange');
		$('#itemitemj').removeClass('green orange');
		$('#itemitem2j').removeClass('green orange');
		$('#itemitem3j').removeClass('green orange');
		$('#itemitem4j').removeClass('green orange');
		$('#itemitem5j').removeClass('green orange');
		$('#itemitem6j').removeClass('green orange');
		$('#itemitemk').removeClass('green orange');
		$('#itemitem2k').removeClass('green orange');
		$('#itemitem3k').removeClass('green orange');
		$('#itemitem4k').removeClass('green orange');
		$('#itemitem5k').removeClass('green orange');
		$('#itemitem6k').removeClass('green orange');
		$('#itemiteml').removeClass('green orange');
		$('#itemitem2l').removeClass('green orange');
		$('#itemitem3l').removeClass('green orange');
		$('#itemitem4l').removeClass('green orange');
		$('#itemitem5l').removeClass('green orange');
		$('#itemitem6l').removeClass('green orange');
		$('#hej').removeClass('selected1');
		$('#hej').removeClass('selected2');
		$('#hejnowe').removeClass('selected3');
		$('#hejnowe').removeClass('selected4');
		$('#hejnowes').removeClass('selected5');
		$('#hejnowes').removeClass('selected6');
		$('#hejnowess').removeClass('selected7');
		$('#hejnowess').removeClass('selected8');
		$('#hejnowesss').removeClass('selected9');
		$('#hejnowesss').removeClass('selected10');
		$('#hejnowessss').removeClass('selected11');
		$('#hejnowessss').removeClass('selected12');
		$('#heji').removeClass('selected13');
		$('#heji').removeClass('selected14`');
		$('#hejnowei').removeClass('selected15');
		$('#hejnowei').removeClass('selected16');
		$('#hejnowesi').removeClass('selected17');
		$('#hejnowesi').removeClass('selected18');
		$('#hejnowessi').removeClass('selected19');
		$('#hejnowessi').removeClass('selected20');
		localStorage.removeItem('savedClassesb');
	});
	$(document).ready(function () {
		var item1Clickedb = false;
		var item2Clickedb = false;
		var item3Clickedb = false;
		var item4Clickedb = false;
		var item5Clickedb = false;
		var item6Clickedb = false;
		$('#jQueryColorChange').click(function () {
			item1Clickedb = true;
			$('#hej').addClass('selected2');
			$('.item2').addClass('transformb bordered hideBefore');
			$('.item').removeClass('transform bordered hideBefore');
			$('#itemitem').addClass('orange');
			$('.Button1, .Button2').removeClass('active').addClass('inactive');
			$('.Button11, .Button22').removeClass('inactive').addClass('active');

			var classesToSave = {
				hej: $('#hej').attr('class'),
				itemitem: $('#itemitem').attr('class'),
				itemitem2: $('#itemitem2').attr('class')
			};
    localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2').click(function () {
			$('#hej').addClass('selected1');
			$('.item2').addClass('transformb bordered hideBefore');
			$('.item').removeClass('transform bordered hideBefore');
			$('#itemitem').addClass('green');
			$('.Button1, .Button2').removeClass('active').addClass('inactive');
			$('.Button11, .Button22').removeClass('inactive').addClass('active');

			var classesToSave = {
				hej: $('#hej').attr('class'),
				itemitem: $('#itemitem').attr('class'),
				itemitem2: $('#itemitem2').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11').click(function () {
			item2Clickedb = true;
			$('#hejnowe').addClass('selected4');
			$('.item3').addClass('transformc bordered hideBefore');
			$('.item2').removeClass('transformb bordered hideBefore')
			$('.Button111, .Button222').removeClass('inactive').addClass('active');

			var classesToSave = {
				hej: $('#hej').attr('class'),
				hejnowe: $('#hejnowe').attr('class'),
				itemitem: $('#itemitem').attr('class'),
				itemitem2: $('#itemitem2').attr('class'),
				itemitem3: $('#itemitem3').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22').click(function () {
			$('#hejnowe').addClass('selected3');
			$('.item3').addClass('transformc bordered hideBefore');
			$('.item2').removeClass('transformb bordered hideBefore');
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111').click(function () {
			item3Clickedb = true;
			$('#hejnowes').addClass('selected6');
			$('.item4').addClass('transformd bordered hideBefore');
			$('.item3').removeClass('transformc bordered hideBefore');
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange1111').click(function () {
			item4Clickedb = true;
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2222').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11111').click(function () {
			item5Clickedb = true;
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
				hejnowess: $('#hejnowess').attr('class'),
				hejnowesss: $('#hejnowesss').attr('class'),
				itemitem: $('#itemitem').attr('class'),
				itemitem2: $('#itemitem2').attr('class'),
				itemitem3: $('#itemitem3').attr('class'),
				itemitem4: $('#itemitem4').attr('class'),
				itemitem5: $('#itemitem5').attr('class'),
				itemitem6: $('#itemitem5').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22222').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111111').click(function () {
			item6Clickedb = true;
			$('#jQueryColorChange111111, #jQueryColorChange222222').prop('disabled', false);
			$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222222').click(function () {
			$('#jQueryColorChange111111, #jQueryColorChange222222').prop('disabled', false);
			$('#jQueryColorChange, #jQueryColorChange2, #jQueryColorChange11, #jQueryColorChange22, #jQueryColorChange111, #jQueryColorChange222, #jQueryColorChange1111, #jQueryColorChange2222, #jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', true);
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChangei').click(function () {
			$('#jQueryColorChangei, #jQueryColorChange2i').prop('disabled', false);
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2i').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11i').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22i').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111i').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222i').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange1111i').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2222i').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11111i').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22222i').click(function () {
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111111i').click(function () {
			$('#hejnowessi').addClass('selected23');
			$('#itemitemj').addClass('transform bordered hideBefore');
			$('#itemitem6i').removeClass('transformf bordered hideBefore');
			$('#itemitem6i').addClass('orange');
			$('.Button111111i, .Button222222i').removeClass('active').addClass('inactive');
			$('.Button1j, .Button2j').removeClass('inactive').addClass('active');

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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222222i').click(function () {
			$('#hejnowessi').addClass('selected22');
			$('#itemitemj').addClass('transform bordered hideBefore');
			$('#itemitem6i').removeClass('transformf bordered hideBefore');
			$('#itemitem6i').addClass('green');
			$('.Button111111i, .Button222222i').removeClass('active').addClass('inactive');
			$('.Button1j, .Button2j').removeClass('inactive').addClass('active');

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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange1j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem2j').addClass('transformb bordered hideBefore');
			$('#itemitemj').removeClass('transform bordered hideBefore');
			$('#itemitemj').addClass('orange');
			$('.Button1j, .Button2j').removeClass('active').addClass('inactive');
			$('.Button11j, .Button22j').removeClass('inactive').addClass('active');

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
				hejj: $('#hejj').attr('class'),
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem2j').addClass('transformb bordered hideBefore');
			$('#itemitemj').removeClass('transform bordered hideBefore');
			$('#itemitemj').addClass('green');
			$('.Button1j, .Button2j').removeClass('active').addClass('inactive');
			$('.Button11j, .Button22j').removeClass('inactive').addClass('active');

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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem3j').addClass('transformc bordered hideBefore');
			$('#itemitem2j').removeClass('transformb bordered hideBefore');
			$('#itemitem2j').addClass('orange');
			$('.Button11j, .Button22j').removeClass('active').addClass('inactive');
			$('.Button111j, .Button222j').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem3j').addClass('transformc bordered hideBefore');
			$('#itemitem2j').removeClass('transformb bordered hideBefore');
			$('#itemitem2j').addClass('green');
			$('.Button11j, .Button22j').removeClass('active').addClass('inactive');
			$('.Button111j, .Button222j').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem4j').addClass('transformd bordered hideBefore');
			$('#itemitem3j').removeClass('transformc bordered hideBefore');
			$('#itemitem3j').addClass('orange');
			$('.Button111j, .Button222j').removeClass('active').addClass('inactive');
			$('.Button1111j, .Button2222j').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem4j').addClass('transformd bordered hideBefore');
			$('#itemitem3j').removeClass('transformc bordered hideBefore');
			$('#itemitem3j').addClass('green');
			$('.Button111j, .Button222j').removeClass('active').addClass('inactive');
			$('.Button1111j, .Button2222j').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange1111j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem5j').addClass('transforme bordered hideBefore');
			$('#itemitem4j').removeClass('transformd bordered hideBefore');
			$('#itemitem4j').addClass('orange');
			$('.Button1111j, .Button2222j').removeClass('active').addClass('inactive');
			$('.Button11111j, .Button22222j').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2222j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem5j').addClass('transforme bordered hideBefore');
			$('#itemitem4j').removeClass('transformd bordered hideBefore');
			$('#itemitem4j').addClass('green');
			$('.Button1111j, .Button2222j').removeClass('active').addClass('inactive');
			$('.Button11111j, .Button22222j').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11111j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem6j').addClass('transformf bordered hideBefore');
			$('#itemitem5j').removeClass('transforme bordered hideBefore');
			$('#itemitem5j').addClass('orange');
			$('.Button1k, .Button2k').removeClass('active').addClass('inactive');
			$('.Button1k, .Button2k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22222j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem6j').addClass('transformf bordered hideBefore');
			$('#itemitem5j').removeClass('transforme bordered hideBefore');
			$('#itemitem5j').addClass('green');
			$('.Button1k, .Button2k').removeClass('active').addClass('inactive');
			$('.Button1k, .Button2k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111111j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitemk').addClass('transform bordered hideBefore');
			$('#itemitem6j').removeClass('transformf bordered hideBefore');
			$('#itemitem6j').addClass('orange');
			$('.Button111111j, .Button222222j').removeClass('active').addClass('inactive');
			$('.Button1k, .Button2k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class'),
				itemitemk: $('#itemitemk').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222222j').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitemk').addClass('transform bordered hideBefore');
			$('#itemitem6j').removeClass('transformf bordered hideBefore');
			$('#itemitem6j').addClass('green');
			$('.Button111111j, .Button222222j').removeClass('active').addClass('inactive');
			$('.Button1k, .Button2k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class'),
				itemitemk: $('#itemitemk').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChangek').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem2k').addClass('transformb bordered hideBefore');
			$('#itemitemk').removeClass('transform bordered hideBefore');
			$('#itemitemk').addClass('orange');
			$('.Button1k, .Button2k').removeClass('active').addClass('inactive');
			$('.Button11k, .Button22k').removeClass('inactive').addClass('active');

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
				hejj: $('#hejj').attr('class'),
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem2k').addClass('transformb bordered hideBefore');
			$('#itemitemk').removeClass('transform bordered hideBefore');
			$('#itemitemk').addClass('green');
			$('.Button1k, .Button2k').removeClass('active').addClass('inactive');
			$('.Button11k, .Button22k').removeClass('inactive').addClass('active');

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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem3k').addClass('transformc bordered hideBefore');
			$('#itemitem2k').removeClass('transformb bordered hideBefore');
			$('#itemitem2k').addClass('orange');
			$('.Button11k, .Button22k').removeClass('active').addClass('inactive');
			$('.Button111k, .Button222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem3k').addClass('transformc bordered hideBefore');
			$('#itemitem2k').removeClass('transformb bordered hideBefore');
			$('#itemitem2k').addClass('green');
			$('.Button11k, .Button22k').removeClass('active').addClass('inactive');
			$('.Button111k, .Button222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem4k').addClass('transformd bordered hideBefore');
			$('#itemitem3k').removeClass('transformc bordered hideBefore');
			$('#itemitem3k').addClass('orange');
			$('.Button111k, .Button222k').removeClass('active').addClass('inactive');
			$('.Button1111k, .Button2222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem4k').addClass('transformd bordered hideBefore');
			$('#itemitem3k').removeClass('transformc bordered hideBefore');
			$('#itemitem3k').addClass('green');
			$('.Button111k, .Button222k').removeClass('active').addClass('inactive');
			$('.Button1111k, .Button2222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange1111k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem5k').addClass('transforme bordered hideBefore');
			$('#itemitem4k').removeClass('transformd bordered hideBefore');
			$('#itemitem4k').addClass('orange');
			$('.Button1111k, .Button2222k').removeClass('active').addClass('inactive');
			$('.Button11111k, .Button22222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2222k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem5k').addClass('transforme bordered hideBefore');
			$('#itemitem4k').removeClass('transformd bordered hideBefore');
			$('#itemitem4k').addClass('green');
			$('.Button1111k, .Button2222k').removeClass('active').addClass('inactive');
			$('.Button11111k, .Button22222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11111k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem6k').addClass('transformf bordered hideBefore');
			$('#itemitem5k').removeClass('transforme bordered hideBefore');
			$('#itemitem5k').addClass('orange');
			$('.Button11111k, .Button22222k').removeClass('active').addClass('inactive');
			$('.Button111111k, .Button222222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22222k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem6k').addClass('transformf bordered hideBefore');
			$('#itemitem5k').removeClass('transforme bordered hideBefore');
			$('#itemitem5k').addClass('green');
			$('.Button11111k, .Button22222k').removeClass('active').addClass('inactive');
			$('.Button111111k, .Button222222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111111k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemiteml').addClass('transform bordered hideBefore');
			$('#itemitem6k').removeClass('transformf bordered hideBefore');
			$('#itemitem6k').addClass('orange');
			$('.Button11111k, .Button22222k').removeClass('active').addClass('inactive');
			$('.Button111111k, .Button222222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222222k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemiteml').addClass('transform bordered hideBefore');
			$('#itemitem6k').removeClass('transformf bordered hideBefore');
			$('#itemitem6k').addClass('green');
			$('.Button11111k, .Button22222k').removeClass('active').addClass('inactive');
			$('.Button111111k, .Button222222k').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChangel').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem2l').addClass('transformb bordered hideBefore');
			$('#itemiteml').removeClass('transform bordered hideBefore');
			$('#itemiteml').addClass('orange');
			$('.Button1l, .Button2l').removeClass('active').addClass('inactive');
			$('.Button11l, .Button22l').removeClass('inactive').addClass('active');

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
				hejj: $('#hejj').attr('class'),
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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem2l').addClass('transformb bordered hideBefore');
			$('#itemitemkl').removeClass('transform bordered hideBefore');
			$('#itemiteml').addClass('green');
			$('.Button1l, .Button2l').removeClass('active').addClass('inactive');
			$('.Button11l, .Button22l').removeClass('inactive').addClass('active');

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
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem3l').addClass('transformc bordered hideBefore');
			$('#itemitem2l').removeClass('transformb bordered hideBefore');
			$('#itemitem2l').addClass('orange');
			$('.Button11l, .Button22l').removeClass('active').addClass('inactive');
			$('.Button111l, .Button222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem3l').addClass('transformc bordered hideBefore');
			$('#itemitem2l').removeClass('transformb bordered hideBefore');
			$('#itemitem2l').addClass('green');
			$('.Button11l, .Button22l').removeClass('active').addClass('inactive');
			$('.Button111l, .Button222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem4l').addClass('transformd bordered hideBefore');
			$('#itemitem3l').removeClass('transformc bordered hideBefore');
			$('#itemitem3l').addClass('orange');
			$('.Button111l, .Button222l').removeClass('active').addClass('inactive');
			$('.Button1111l, .Button2222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem4l').addClass('transformd bordered hideBefore');
			$('#itemitem3l').removeClass('transformc bordered hideBefore');
			$('#itemitem3l').addClass('green');
			$('.Button111l, .Button222l').removeClass('active').addClass('inactive');
			$('.Button1111l, .Button2222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange1111l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem5l').addClass('transforme bordered hideBefore');
			$('#itemitem4l').removeClass('transformd bordered hideBefore');
			$('#itemitem4l').addClass('orange');
			$('.Button1111l, .Button2222l').removeClass('active').addClass('inactive');
			$('.Button11111l, .Button22222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange2222l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem5l').addClass('transforme bordered hideBefore');
			$('#itemitem4l').removeClass('transformd bordered hideBefore');
			$('#itemitem4l').addClass('green');
			$('.Button1111l, .Button2222l').removeClass('active').addClass('inactive');
			$('.Button11111l, .Button22222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange11111l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem6l').addClass('transformf bordered hideBefore');
			$('#itemitem5l').removeClass('transforme bordered hideBefore');
			$('#itemitem5l').addClass('orange');
			$('.Button11111l, .Button22222l').removeClass('active').addClass('inactive');
			$('.Button111111l, .Button222222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange22222l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem6l').addClass('transformf bordered hideBefore');
			$('#itemitem5l').removeClass('transforme bordered hideBefore');
			$('#itemitem5l').addClass('green');
			$('.Button11111l, .Button22222l').removeClass('active').addClass('inactive');
			$('.Button111111l, .Button222222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange111111l').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem6l').addClass('transformf bordered hideBefore');
			$('#itemitem5l').removeClass('transforme bordered hideBefore');
			$('#itemitem5l').addClass('orange');
			$('.Button11111l, .Button22222l').removeClass('active').addClass('inactive');
			$('.Button111111l, .Button222222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('#jQueryColorChange222222k').click(function () {
			$('#hejnowessi').addClass('selected21');
			$('#itemitem6l').addClass('transformf bordered hideBefore');
			$('#itemitem5l').removeClass('transforme bordered hideBefore');
			$('#itemitem5l').addClass('green');
			$('.Button11111l, .Button22222l').removeClass('active').addClass('inactive');
			$('.Button111111l, .Button222222l').removeClass('inactive').addClass('active');

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
				itemitem2j: $('#itemitem2j').attr('class'),
				itemitem3j: $('#itemitem3j').attr('class'),
				itemitem4j: $('#itemitem4j').attr('class'),
				itemitem5j: $('#itemitem5j').attr('class'),
				itemitem6j: $('#itemitem6j').attr('class')
			};
			localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
		});
		$('.item').addClass('transform bordered hideBefore');
		$("#displayplayer").addClass('on');
		$("#audioplayer").addClass('off');
		$("#audioplayerA2").addClass('off');
		$("#audioplayerA3").addClass('off');
		$('#juzznam').addClass('hej2');
		$('#dalej').addClass('hej2');
		$('#trening').removeClass('hidden');
		$('#trening').addClass('hej3');
		$('#slowo').addClass('hidden');
		$('#story').addClass('hidden');
		$('.Button, .Button2').removeClass('inactive').addClass('active');
		$('#jQueryColorChange1, #jQueryColorChange2').prop('disabled', true);
		$('#znam').addClass('hej4');
		$('#slowoagain').addClass('hidden');
		$('#storyplay').addClass('hidden');

		// Sprawdź, czy w localStorage są zapisane klasy
		var savedClassesb = localStorage.getItem('savedClassesb');
		if (savedClassesb) {
			// Jeśli są zapisane klasy, zastosuj je do odpowiednich elementów
			var classes = JSON.parse(savedClassesb);
			$('#hej').addClass(classes.hej);
			$('#itemitem').addClass(classes.itemitem);
			$('#hejnowe').addClass(classes.hejnowe);
			$('#itemitem2').addClass(classes.itemitem2);
			$('#hejnowes').addClass(classes.hejnowes);
			$('#itemitem3').addClass(classes.itemitem3);
			$('#hejnowess').addClass(classes.hejnowess);
			$('#itemitem4').addClass(classes.itemitem4);
			$('#hejnowesss').addClass(classes.hejnowesss);
			$('#itemitem5').addClass(classes.itemitem5);
			$('#hejnowessss').addClass(classes.hejnowessss);
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
			$('#hejnowessssi').addClass(classes.hejnowessssi);
			$('#itemitem6i').addClass(classes.itemitem6i);
			$('#itemitemj').addClass(classes.itemitemj);
			$('#itemitem2j').addClass(classes.itemitem2j);
			$('#itemitem3j').addClass(classes.itemitem3j);
			$('#itemitem4j').addClass(classes.itemitem3j);
			$('#itemitem5j').addClass(classes.itemitem4j);
			$('#itemitem6j').addClass(classes.itemitem5j);
			$('#itemitemk').addClass(classes.itemitemk);
		} else {
			// Jeśli nie ma zapisanych klas, dodaj je na początku
			$('.Button1, .Button2').removeClass('active').addClass('inactive');
		}
		$('#jQueryColorChange111111, #jQueryColorChange222222').click(function () {
			createCustomAlert('Czas na...', 'powtórkę!', 'Zaczynajmy!'); // title, message, buttonText
			if (item1Clickedb) {
				$('#itemitem').addClass('transform bordered hideBefore');
				$('#itemitem6').removeClass('transformf bordered hideBefore');
				$('.Button1, .Button2').removeClass('inactive').addClass('active');
				$('#jQueryColorChange1, #jQueryColorChange2').prop('disabled', false);
				$('#jQueryColorChange1, #jQueryColorChange2').click(function () {
					if (item2Clickedb) {
						$('#itemitem2').addClass('transformb bordered hideBefore');
						$('#itemitem').removeClass('transform bordered hideBefore');
						$('.Button11, .Button22').removeClass('inactive').addClass('active');
						$('#jQueryColorChange11, #jQueryColorChange22').prop('disabled', false);
						$('#jQueryColorChange11, #jQueryColorChange22').click(function () {
							if (item3Clickedb) {
								$('#itemitem3').addClass('transformc bordered hideBefore');
								$('#itemitem2').removeClass('transformb bordered hideBefore');
								$('.Button111, .Button222').removeClass('inactive').addClass('active');
								$('#jQueryColorChange111, #jQueryColorChange222').prop('disabled', false);
								$('#jQueryColorChange111, #jQueryColorChange222').click(function () {
									if (item4Clickedb) {
										$('#itemitem4').addClass('transformd bordered hideBefore');
										$('#itemitem3').removeClass('transformc bordered hideBefore');
										$('.Button1111, .Button2222').removeClass('inactive').addClass('active');
										$('#jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', false);
										$('#jQueryColorChange1111, #jQueryColorChange2222').click(function () {
											if (item5Clickedb) {
												$('#itemitem5').addClass('transforme bordered hideBefore');
												$('#itemitem4').removeClass('transformd bordered hideBefore');
												$('.Button11111, .Button22222').removeClass('inactive').addClass('active');
												$('#jQueryColorChange11111, #jQueryColorChange22222').prop('disabled', false);
												$('#jQueryColorChange11111, #jQueryColorChange22222').click(function () {
													if (item6Clickedb) {
														$('#itemitem6').addClass('transformf bordered hideBefore');
														$('#itemitem5').removeClass('transforme bordered hideBefore');
														$('.Button111111, .Button222222').removeClass('inactive').addClass('active');
														$('#jQueryColorChange111111, #jQueryColorChange222222').prop('disabled', false);
														$('#jQueryColorChange111111, #jQueryColorChange222222').click(function () {
															alert("koniec powtórki");
														});
													}
												});
											}
										});
									}
								});
							}
						});
					}
				});
			}
		});
	});
});