document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('dalej');
    const button2 = document.getElementById('znam'); // Nowy przycisk
    const resetButton = document.getElementById('kasowanie');
    // Obs�uga zdarzenia klikni�cia na dokument
    let zmienTekstGotowaa = false;
    let zmienTekstGotowa = false;
    let zmienTekstGotowab = false;
    const actions2 = [
        () => {
            $('#itemitem').addClass('transform bordered hideBefore');
        },
        () => {
            zmienTekstGotowaa = false;
            zmienTekstGotowa = true; // Ustawienie zmiennej zmienTekstGotowa na true
            $("#audioplayerA2").removeClass('off');
            $("#audioplayerA2").addClass('add');
            $('#jQueryColorChange11, #jQueryColorChange22').prop('disabled', false);
            $('#jQueryColorChange1, #jQueryColorChange2, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
            $('#hej').addClass('selected1');
            $('#itemitem2').addClass('transformb bordered hideBefore');
            $('#itemitem').removeClass('transform bordered hideBefore');
            $('#itemitem').addClass('green');
            $('.Button1, .Button2').removeClass('active').addClass('inactive');
            $('.Button11, .Button22').removeClass('inactive').addClass('active');
            changeText1();
            changeText2();
            var clickCount1 = 0;
            var clickCount2 = 0;
            currentActionIndex = 1;
            var classesToSave = {
                hej: $('#hej').attr('class'),
                itemitem: $('#itemitem').attr('class'),
                itemitem2: $('#itemitem2').attr('class')
            };
            localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
        },
        () => {
            zmienTekstGotowa = false;
            zmienTekstGotowab = true;
            $("#audioplayerA3").removeClass('off');
            $("#audioplayerA3").addClass('add');
            $('#jQueryColorChange111, #jQueryColorChange222').prop('disabled', false);
            $('#hejnowe').addClass('selected3');
            $('#itemitem3').addClass('transformc bordered hideBefore');
            $('#itemitem2').removeClass('transformb bordered hideBefore');
            $('#itemitem2').addClass('green');
            $('.Button11, .Button22').removeClass('active').addClass('inactive');
            $('.Button111, .Button222').removeClass('inactive').addClass('active');
            currentActionIndex = 2;
            changeText1b();
            changeText2b();
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
            $('#hejnowes').addClass('selected5');
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
            $('#hejnowess').addClass('selected7');
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
                hejnowesss: $('#hejnowesss').attr('class'),
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
            $('#hejnowessss').addClass('selected11');
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
        },
        () => {
            $('#jQueryColorChange11i, #jQueryColorChange22i').prop('disabled', false);
            $('#heji').addClass('selected13');
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
            $('#hejnowei').addClass('selected15');
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
            $('#hejnowesi').addClass('selected17');
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
            $('#hejnowessi').addClass('selected29');
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
            $('#hejnowesssi').addClass('selected21');
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
            zmienTekstGotowa = true; // Ustawienie zmiennej zmienTekstGotowa na true
            $("#audioplayer").hide();
            $('#jQueryColorChange11, #jQueryColorChange22').prop('disabled', false);
            $('#jQueryColorChange1, #jQueryColorChange2, #jQueryColorChange1111, #jQueryColorChange2222').prop('disabled', true);
            $('#hej').addClass('selected2');
            $('#itemitem2').addClass('transformb bordered hideBefore');
            $('#itemitem').removeClass('transform bordered hideBefore');
            $('#itemitem').addClass('orange');
            $('.Button1, .Button2').removeClass('active').addClass('inactive');
            $('.Button11, .Button22').removeClass('inactive').addClass('active');
            changeText1();
            changeText2();
            zmienTekstGotowa = false;
            var clickCount1b = 0;
            var clickCount2b = 0;
            var classesToSave = {
                hej: $('#hej').attr('class'),
                itemitem: $('#itemitem').attr('class'),
                itemitem2: $('#itemitem2').attr('class')
            };
            localStorage.setItem('savedClassesb', JSON.stringify(classesToSave));
        },
        () => {
            zmienTekstGotowa = false;
            var clickCount1b = 0;
            var clickCount2b = 0;
            var textToShow1 = document.getElementById("trening");
            var textToShow2 = document.getElementById("storyplay");
            zmienTekstGotowab = true;
            $('#jQueryColorChange111, #jQueryColorChange222').prop('disabled', false);
            $('#hejnowe').addClass('selected4');
            $('#itemitem3').addClass('transformc bordered hideBefore');
            $('#itemitem2').removeClass('transformb bordered hideBefore');
            $('#itemitem2').addClass('orange');
            $('.Button11, .Button22').removeClass('active').addClass('inactive');
            $('.Button111, .Button222').removeClass('inactive').addClass('active');
            changeText1b();
            changeText2b();
            zmienTekstGotowab = false;
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
            $('#hejnowesss').addClass('selected10');
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
                hejnowesss: $('#hejnowesss').attr('class'),
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
            $('#hejnowessss').addClass('selected12');
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
    let lastStoppedIndex = -1; // Zmienna do �ledzenia ostatnio zatrzymanego indeksu

    function executeAction(actionIndex, activeActions) {
        if (actionIndex < activeActions.length) {
            activeActions[actionIndex]();
            if (activeActions === actions) {
                currentActionIndex = actionIndex;
                localStorage.setItem('currentActionIndex', currentActionIndex);
                lastStoppedIndex = currentActionIndex;
            } else if (activeActions === actions2) {
                currentActionIndex2 = actionIndex;
                localStorage.setItem('currentActionIndex2', currentActionIndex2);
                lastStoppedIndex = currentActionIndex2;
            }
        } else {
            console.log('Wszystkie akcje zosta�y wykonane');
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

        if (currentActionIndex < actions.length - 1) {
            currentActionIndex++;
            currentActionIndex2++; // Przechodzenie do kolejnego elementu w tablicy actions2
            executeAction(currentActionIndex, actions);
            lastStoppedIndex = currentActionIndex; // Zapisz ostatnio zatrzymany indeks
        } else {
            console.log('Wszystkie akcje zosta�y wykonane z actions2');
            // Tutaj mo�esz doda� odpowiedni kod lub komunikat, je�li osi�gni�to koniec tablicy
        }
    }

    function handleButton2Click() {
        if (lastStoppedIndex !== -1 && currentActionIndex2 !== lastStoppedIndex) {
            currentActionIndex2 = lastStoppedIndex;
        }

        if (currentActionIndex2 < actions2.length - 1) {
            currentActionIndex2++; // Przechodzenie do kolejnego elementu w tablicy actions2
            currentActionIndex++;
            executeAction(currentActionIndex2, actions2);
            lastStoppedIndex = currentActionIndex2; // Zapisz ostatnio zatrzymany indeks
        } else {
            console.log('Wszystkie akcje zosta�y wykonane z actions2');
            // Tutaj mo�esz doda� odpowiedni kod lub komunikat, je�li osi�gni�to koniec tablicy
        }
    }

    var clickCount1 = 0;
    var clickCount2 = 0;
    var clickCount1b = 0;
    var clickCount2b = 0;
    function changeText1() {
        var textToShow1 = document.getElementById("trening");
        var textToShow2 = document.getElementById("storyplay");
        var textToShow2aa2 = document.getElementById("trening2");
        clickCount1++;
// Liczba dost�pnych tekst�w dla Treningu
        if (clickCount1 === 1 && zmienTekstGotowa) {
            textToShow1.textContent = 'IS';
            textToShow2.textContent = "...";
            textToShow2aa2.textContent = "";
            $('#juzznam').removeClass('hej3');
            $('#dalej').removeClass('hej3');
            $('#juzznam').addClass('hej2');
            $('#dalej').addClass('hej2');
            textToShow2aa2.classList.add("enlarged2b");
            textToShow2aa2.textContent = "UCZ� SI�";
        } else if (clickCount1 === 1 && zmienTekstGotowa) {
            textToShow1.classList.add("enlarged");
            textToShow1.style.backgroundImage = 'url(img/play.png)'; // �cie�ka do obrazka
            textToShow1.style.backgroundSize = 'contain'; // Obrazek b�dzie mie�ci� si� w kontenerze
            textToShow1.style.backgroundPosition = 'right bottom'; // Przesuni�cie obrazka w prawo i w d�
            textToShow1.style.backgroundRepeat = 'no-repeat'; // Zapobiegnie powtarzaniu si� obrazka
            var obrazekTekstContainer = document.getElementById("obrazek-i-tekst-container");
            obrazekTekstContainer.style.paddingLeft = '10px'; // Przyk�adowe ustawienie wype�nienia dla przesuni�cia w prawo
            obrazekTekstContainer.style.paddingTop = '65px'; // Przyk�adowe ustawienie wype�nienia dla przesuni�cia w d�
            textToShow1.textContent = 'IS';
            textToShow2.textContent = "...";
            changeText2();
            playB2();
            $('#hej').addClass('selected4');
            $('#itemitem2').addClass('orange');
            $('#juzznam').removeClass('hej2');
            $('#dalej').removeClass('hej2');
            $('#juzznam').addClass('hej3');
            $('#dalej').addClass('hej3');
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount1 === 2 && zmienTekstGotowa) {
            $('#juzznam').removeClass('hej2');
            $('#dalej').removeClass('hej2');
            $('#juzznam').addClass('hej3');
            $('#dalej').addClass('hej3');
            textToShow1.classList.add("enlarged2a");
            textToShow1.textContent = "IS";
            playB2();
            $('#hejnowe').addClass('selected4');
            $('#itemitem2').addClass('orange');
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
            textToShow2aa2.classList.add("enlarged2b");
            textToShow2aa2.textContent = "POWT�RZ";
            textToShow2.textContent = "FISZKA IS";
        } else if (clickCount1 === 3 && zmienTekstGotowa) {
            textToShow1.classList.add("enlarged2");
            textToShow1.textContent = "IS+";
            playB2();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount1 === 4 && zmienTekstGotowa) {
            textToShow1.textContent = "IS++";
            playB2();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        }
    }

    function changeText2() {
        var textToShow2 = document.getElementById("storyplay");
// Liczba dost�pnych tekst�w dla Storyplay
        clickCount2++;
        if (clickCount2 === 2 && zmienTekstGotowa) {
            textToShow2.textContent = "FISZKA IS";
            playA2();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount2 === 3 && zmienTekstGotowa) {
            textToShow2.textContent = "FISZKA IS+";
            playA2();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount2 === 4 && zmienTekstGotowa) {
            textToShow2.textContent = "FISZKA IS++";
            playA2();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount2 === 5 && zmienTekstGotowa) {
            textToShow2.textContent = "FISZKA IS+++";
            playA2();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        }
    }

    function changeText1b() {
        var textToShow1b = document.getElementById("trening");
        var textToShow2b = document.getElementById("storyplay");
        var textToShow2aa2 = document.getElementById("trening2");
        clickCount1b++;
// Liczba dost�pnych tekst�w dla Treningu
        if (clickCount1b === 1 && zmienTekstGotowab) {
            textToShow1b.classList.add("enlarged2d");
            textToShow1b.textContent = 'OBEDIENT';
            textToShow2b.textContent = "...";
            textToShow2aa2.textContent = "";
            $('#juzznam').removeClass('hej3');
            $('#dalej').removeClass('hej3');
            $('#juzznam').addClass('hej2');
            $('#dalej').addClass('hej2');
            textToShow2aa2.classList.add("enlarged2b");
            textToShow2aa2.textContent = "UCZ� SI�";
        } else if (clickCount1b === 1 && zmienTekstGotowab) {
            textToShow1b.classList.add("enlarged2d");
            textToShow1.style.backgroundImage = 'url(img/play.png)'; // �cie�ka do obrazka
            textToShow1.style.backgroundSize = 'contain'; // Obrazek b�dzie mie�ci� si� w kontenerze
            textToShow1.style.backgroundPosition = 'right bottom'; // Przesuni�cie obrazka w prawo i w d�
            textToShow1.style.backgroundRepeat = 'no-repeat'; // Zapobiegnie powtarzaniu si� obrazka
            var obrazekTekstContainer = document.getElementById("obrazek-i-tekst-container");
            obrazekTekstContainer.style.paddingLeft = '10px'; // Przyk�adowe ustawienie wype�nienia dla przesuni�cia w prawo
            obrazekTekstContainer.style.paddingTop = '65px'; // Przyk�adowe ustawienie wype�nienia dla przesuni�cia w d�
            textToShow1b.textContent = 'OBEDIENT';
            textToShow2b.textContent = "...";
            changeText2b();
            playB3();
            $('#hejnowes').addClass('selected6');
            $('#itemitem3').addClass('orange');
            $('#juzznam').removeClass('hej2');
            $('#dalej').removeClass('hej2');
            $('#juzznam').addClass('hej3');
            $('#dalej').addClass('hej3');
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount1b === 2 && zmienTekstGotowab) {
            $('#juzznam').removeClass('hej2');
            $('#dalej').removeClass('hej2');
            $('#juzznam').addClass('hej3');
            $('#dalej').addClass('hej3');
            textToShow1b.classList.add("enlarged2c");
            textToShow1b.textContent = "OBEDIENT";
            playB3();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
            textToShow2aa2.classList.add("enlarged2b");
            textToShow2aa2.textContent = "POWT�RZ";
            textToShow2b.textContent = "FISZKA OBEDIENT";
        } else if (clickCount1b === 3 && zmienTekstGotowab) {
            textToShow1b.classList.add("enlarged2");
            textToShow1b.textContent = "OBEDIENT+";
            playB3();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
            changeText2b();
        } else if (clickCount1b === 4 && zmienTekstGotowab) {
            textToShow1b.classList.add("enlarged2");
            textToShow1b.textContent = "OBEDIENT++";
            playB3();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        }
    }

    function changeText2b() {
        var textToShow2b = document.getElementById("storyplay");
// Liczba dost�pnych tekst�w dla Storyplay
        clickCount2b++;
        if (clickCount2b === 2 && zmienTekstGotowab) {
            textToShow2b.textContent = "FISZKA OBEDIENT";
            playA3();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount2b === 3 && zmienTekstGotowab) {
            textToShow2b.textContent = "FISZKA OBEDIENT+";
            playA3();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount2b === 4 && zmienTekstGotowab) {
            textToShow2b.textContent = "FISZKA OBEDIENT++";
            playA3();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount2b === 5 && zmienTekstGotowab) {
            textToShow2b.textContent = "FISZKA OBEDIENT+++";
            playA3();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        }
    }

    button2.addEventListener('click', handleButton2Click);
    button.addEventListener('click', function () {
        handleButtonClick();
    });
    trening.addEventListener('click', function () {
        if (zmienTekstGotowaa) {
            changeTextaa();
        }
        if (zmienTekstGotowa) {
            changeText1();
        }
        if (zmienTekstGotowab) {
            changeText1b();
        }
    });
    storyplay.addEventListener('click', function () {
        if (zmienTekstGotowaa) {
            changeText2aa();
        }
        if (zmienTekstGotowa) {
            changeText2();
        }
        if (zmienTekstGotowab) {
            changeText2b();
        }
    });

    resetButton.addEventListener('click', function () {
        resetCurrentActionIndexes();
        // Dodaj tutaj inne czynno�ci, kt�re maj� by� wykonywane po klikni�ciu przycisku resetuj�cego
    });

    // Funkcja do zapisywania klas do localStorage
    function bindColorChangeButton(buttonId, actionIndex, actionSet) {
        $(buttonId).click(function () {
            executeAction(actionIndex, actionSet);
            const classesToSave = {
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
    }

    // Dodaj tutaj inne wywo�ania funkcji bindColorChangeButton dla przycisk�w actions2
    bindColorChangeButton('#jQueryColorChange1', 1, actions);
    bindColorChangeButton('#jQueryColorChange2', 1, actions2);
    bindColorChangeButton('#jQueryColorChange11', 2, actions);
    bindColorChangeButton('#jQueryColorChange22', 2, actions2);
    bindColorChangeButton('#jQueryColorChange111', 3, actions);
    bindColorChangeButton('#jQueryColorChange222', 3, actions2);
    bindColorChangeButton('#jQueryColorChange1111', 4, actions);
    bindColorChangeButton('#jQueryColorChange2222', 4, actions2);
    bindColorChangeButton('#jQueryColorChange11111', 5, actions);
    bindColorChangeButton('#jQueryColorChange22222', 5, actions2);
    bindColorChangeButton('#jQueryColorChange111111', 6, actions);
    bindColorChangeButton('#jQueryColorChange222222', 6, actions2);
    bindColorChangeButton('#jQueryColorChangei', 7, actions);
    bindColorChangeButton('#jQueryColorChange2i', 7, actions2);
    bindColorChangeButton('#jQueryColorChange11i', 8, actions);
    bindColorChangeButton('#jQueryColorChange22i', 8, actions2);
    bindColorChangeButton('#jQueryColorChange111i', 9, actions);
    bindColorChangeButton('#jQueryColorChange222i', 9, actions2);
    bindColorChangeButton('#jQueryColorChange1111i', 10, actions);
    bindColorChangeButton('#jQueryColorChange2222i', 10, actions2);
    bindColorChangeButton('#jQueryColorChange11111i', 11, actions);
    bindColorChangeButton('#jQueryColorChange22222i', 11, actions2);
    bindColorChangeButton('#jQueryColorChange111111i', 12, actions);
    bindColorChangeButton('#jQueryColorChange222222i', 12, actions2);

    var clickCountaa = 0;
    var clickCount2aa = 0;

    function changeTextaa() {
        var textToShowaa = document.getElementById("trening");
        var textToShow2aa = document.getElementById("storyplay");
        var textToShow2aa2 = document.getElementById("trening2");
        clickCountaa++;
        if (clickCountaa === 0 && zmienTekstGotowaa) {
            textToShow.textContent = "Trening nr 1";
        } else if (clickCountaa === 1 && zmienTekstGotowaa) {
            textToShowaa.classList.add("enlarged");
            // Ustawienie t�a dla kontenera tekstu
            textToShowaa.style.backgroundImage = 'url(img/play.png)'; // �cie�ka do obrazka
            textToShowaa.style.backgroundSize = 'contain'; // Obrazek b�dzie mie�ci� si� w kontenerze
            textToShowaa.style.backgroundPosition = 'right bottom'; // Przesuni�cie obrazka w prawo i w d�
            textToShowaa.style.backgroundRepeat = 'no-repeat'; // Zapobiegnie powtarzaniu si� obrazka
            var obrazekTekstContainer = document.getElementById("obrazek-i-tekst-container");
            obrazekTekstContainer.style.paddingLeft = '10px'; // Przyk�adowe ustawienie wype�nienia dla przesuni�cia w prawo
            obrazekTekstContainer.style.paddingTop = '65px'; // Przyk�adowe ustawienie wype�nienia dla przesuni�cia w d�
            textToShowaa.textContent = "HE";
            textToShow2aa.textContent = "...";
            textToShow2aa2.classList.add("enlarged2b");
            textToShow2aa2.textContent = "UCZ� SI�";
            changeText2aa();
        } else if (clickCountaa === 2 && zmienTekstGotowaa) {
            $('#juzznam').addClass('hej3');
            $('#dalej').addClass('hej3');
            textToShowaa.classList.add("enlarged2a");
            textToShowaa.textContent = "HE";
            textToShow2aa2.classList.add("enlarged2b");
            textToShow2aa2.textContent = "POWT�RZ";
            textToShow2aa.textContent = "FISZKA HE";
            playB();
            $('#hej').addClass('selected2');
            $('#itemitem').addClass('orange');
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCountaa === 3 && zmienTekstGotowaa) {
            textToShowaa.classList.add("enlarged2");
            textToShowaa.textContent = "HE+";
            playB();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCountaa === 4 && zmienTekstGotowaa) {
            textToShowaa.textContent = "HE++";
            playB();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        }
    }

    function changeText2aa() {
        var textToShow2aa = document.getElementById("storyplay");
// Liczba dost�pnych tekst�w dla Storyplay
        clickCount2aa++;
        if (clickCount2aa === 2 && zmienTekstGotowaa) {
            textToShow2aa.textContent = "...";
        } else if (clickCount2aa === 3 && zmienTekstGotowaa) {
            textToShow2aa.textContent = "FISZKA HE+";
            playA();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount2aa === 4 && zmienTekstGotowaa) {
            textToShow2aa.textContent = "FISZKA HE++";
            playA();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        } else if (clickCount2aa === 5 && zmienTekstGotowaa) {
            textToShow2aa.textContent = "FISZKA HE+++";
            playA();
            $('#story').removeClass('hidden');
            $('#story').addClass('hej3');
        }
    }

    $('#startButton8').click(function () {
        startScrollingall();
        $('#startButton8').hide();
        $("#displayplayer").removeClass('on');
        $("#displayplayer").addClass('off');
        $("#audioplayer").addClass('add');
        $('#itemitem').addClass('transform bordered hideBefore');
        zmienTekstGotowaa = true;
        var textToShowaa = document.getElementById("trening");
        var textToShow2aa = document.getElementById("storyplay");
        changeTextaa();
        changeText2aa();
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
});