// var savedClassesb = localStorage.getItem('userLearned');
// localStorage.setItem('currentActionIndex2', currentActionIndex2);

/* 
 * Nauczone
 */
let userLearned = []; // array z id's fiszek które user oznaczył, że zna np 1,2,3,10...

// dodajesz do listy nauczonych
function setAsLearned(fiszkaId) {
    userLearned.push(fiszkaId);
    localStorage.setItem('userLearned', userLearned);
    console.log('userLearned', userLearned);
}

// pobierz liste nauczonych
function getLearned () {
    return localStorage.getItem('userLearned');
}


/* 
 * Lekcje
 */

const maxFiszekInLesson = 6; // max X fiszek w lekcji

// fiszki do lekcji
let lessons = {
    1:  [],
    2:  [],
    3:  []
};

function addFiszkaToLesson(fiszkaId) {
    for (const lessonId in lessons) {
        if (lessons[lessonId].length < maxFiszekInLesson) {
            lessons[lessonId].push(fiszkaId);
            break;
        }
    }
    
    console.log('lessons', lessons  );
}


// fiszki nauczone
//let learned = [1,3,5,5,7]

