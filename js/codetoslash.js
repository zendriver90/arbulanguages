const kontener1 = document.getElementById("obrazek-container1");
        const kontener2 = document.getElementById("obrazek-container2");
        if (indexElementu) {
            if (clickText >= 8 && clickObrazek >= 4 || clickText >= 7 && clickObrazek >= 4 || clickText >= 6 && clickObrazek >= 5 || clickText >= 5 && clickObrazek >= 6 || clickText >= 4 && clickObrazek >= 6 || clickText >= 3 && clickObrazek >= 7 || clickText >= 2 && clickObrazek >= 7 || clickText >= 1 && clickObrazek >= 7) { ///gdy obrazki z dwóch kontenerów maja wiecej niz 10 doda do nastepnej listy
                console.log("Załadowano 5 obrazków.");
                var karta3 = document.getElementById("karta3");
                if (karta3) {
                    karta3.style.display = "none";
                }
                var karta3b = document.getElementById("karta3b");
                if (karta3b) {
                    karta3b.classList.add('active');
                    karta3b.style.visibility = "visible";
                }
            }
            if (clickText >= 8 && clickObrazek >= 5 || clickText >= 7 && clickObrazek >= 5 || clickText >= 6 && clickObrazek >= 6 || clickText >= 5 && clickObrazek >= 6 || clickText >= 4 && clickObrazek >= 7 || clickText >= 3 && clickObrazek >= 8 || clickText >= 2 && clickObrazek >= 8 || clickText >= 1 && clickObrazek >= 8 || clickText >= 0 && clickObrazek >= 9) { ///gdy obrazki z dwóch kontenerów maja wiecej niz 10 doda do nastepnej listy
                console.log("Załadowano 5 obrazków.");
                const lista = document.getElementById(listaId);
                const orangeDot = document.createElement('div');
                orangeDot.className = 'orange-dot';

                lista.appendChild(orangeDot);
                lista.appendChild(element);

                orangeDot.style.display = 'block';
                migotanieKropki(orangeDot);

                const word = document.createElement('span');
                word.className = 'word';
                word.textContent = expectedWordshej[indexElementu];
                lista.appendChild(word);
            }
        }
        if (indexElementu === 0) { // sprawdza czy wczesniej został klikniety obrazek ktory jest przed tasowaniem w dalszej czesci listy
            czyKliknietyObrazek0 = true;
            console.log(czyKliknietyObrazek0);
        }
        if (indexElementu === 1) {
            czyKliknietyObrazek1 = true;
            console.log(czyKliknietyObrazek1);
        }

        if (poprzedniObrazek) {
            const aktualnyObrazek = container.lastChild;

            console.log('Poprzedni indeks:', parseInt(poprzedniObrazek.src.split('obrazek')[1]));
            console.log('Aktualny indeks:', parseInt(aktualnyObrazek.src.split('obrazek')[1]));

            if (parseInt(aktualnyObrazek.src.split('obrazek')[1]) < parseInt(poprzedniObrazek.src.split('obrazek')[1])) { //sprawdza czy obrazki mają być przetasowane
                console.log('Dodaję klasę przesunięcia do aktualnego obrazka');
                aktualnyObrazek.classList.add('przesuniety');
                if (parseInt(aktualnyObrazek.src.split('obrazek')[1]) === 1 && parseInt(poprzedniObrazek.src.split('obrazek')[1]) === 2) {
                    setTimeout(() => {
                        aktualnyObrazek.classList.add('przesuniety2');
                        aktywujPustePole(container, indexElementu);
                    }, 100);
                    setTimeout(() => {
                        if (aktualnyObrazek) {
                            container.removeChild(aktualnyObrazek);
                        }
                    }, 1100);
                }
                if (parseInt(aktualnyObrazek.src.split('obrazek')[1]) === 2 && parseInt(poprzedniObrazek.src.split('obrazek')[1]) === 3 && !czyKliknietyObrazek0) {
                    setTimeout(() => {
                        aktualnyObrazek.classList.add('przesuniety2');
                        aktywujPustePole3(container, indexElementu);
                    }, 100);
                    setTimeout(() => {
                        if (aktualnyObrazek) {
                            container.removeChild(aktualnyObrazek);
                        }
                    }, 1100);
                }
                if (parseInt(aktualnyObrazek.src.split('obrazek')[1]) === 2 && parseInt(poprzedniObrazek.src.split('obrazek')[1]) === 3 && czyKliknietyObrazek0) {
                    setTimeout(() => {
                        if (ostatniElementWord) {
                            container.removeChild(ostatniElementWord);
                        }
                    }, 200);
                    setTimeout(() => {
                        if (ostatniElementDot) {
                            container.removeChild(ostatniElementDot);
                        }
                    }, 200);
                    setTimeout(() => {
                        aktualnyObrazek.classList.add('przesuniety1');
                        aktywujPustePole2(container, indexElementu);
                    }, 100);
                    setTimeout(() => {
                        if (aktualnyObrazek) {
                            container.removeChild(aktualnyObrazek);
                        }
                    }, 1100);
                }
                if (parseInt(aktualnyObrazek.src.split('obrazek')[1]) === 3 && parseInt(poprzedniObrazek.src.split('obrazek')[1]) === 4 && !czyKliknietyObrazek0 && !czyKliknietyObrazek1) {
                    setTimeout(() => {
                        aktualnyObrazek.classList.add('przesuniety2');
                        aktywujPustePole4(container, indexElementu);
                    }, 100);
                    setTimeout(() => {
                        if (aktualnyObrazek) {
                            container.removeChild(aktualnyObrazek);
                        }
                    }, 1100);
                }
                if (parseInt(aktualnyObrazek.src.split('obrazek')[1]) === 3 && parseInt(poprzedniObrazek.src.split('obrazek')[1]) === 4 && !czyKliknietyObrazek0 && czyKliknietyObrazek1) {
                    setTimeout(() => {
                        aktualnyObrazek.classList.add('przesuniety2');
                        aktywujPustePole4(container, indexElementu);
                    }, 100);
                    setTimeout(() => {
                        if (aktualnyObrazek) {
                            container.removeChild(aktualnyObrazek);
                        }
                    }, 1100);
                }
                if (parseInt(aktualnyObrazek.src.split('obrazek')[1]) === 3 && parseInt(poprzedniObrazek.src.split('obrazek')[1]) === 4 && czyKliknietyObrazek0 && !czyKliknietyObrazek1) {
                    setTimeout(() => {
                        aktualnyObrazek.classList.add('przesuniety2');
                        aktywujPustePole4(container, indexElementu);
                    }, 100);
                    setTimeout(() => {
                        if (aktualnyObrazek) {
                            container.removeChild(aktualnyObrazek);
                        }
                    }, 1100);
                }
                if (parseInt(aktualnyObrazek.src.split('obrazek')[1]) === 3 && parseInt(poprzedniObrazek.src.split('obrazek')[1]) === 4 && czyKliknietyObrazek0 && czyKliknietyObrazek1) {
                    setTimeout(() => {
                        aktualnyObrazek.classList.add('przesuniety2');
                        aktywujPustePole4(container, indexElementu);
                    }, 100);
                    setTimeout(() => {
                        if (aktualnyObrazek) {
                            container.removeChild(aktualnyObrazek);
                        }
                    }, 1100);
                }
            }
        }
        
        let poprzedniObrazek = null;
let czyKliknietyObrazek0 = false;
let czyKliknietyObrazek1 = false;