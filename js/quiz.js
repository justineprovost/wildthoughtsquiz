// JavaScript Document

//Utilitaires pour modifier le DOM//

function changeTitle(title) {
  document.getElementById ("quest_title").innerHTML = title;
}

function changeAnimal(animal) {
	document.getElementById ("quest_animal").src = animal;
}

function appendAnswer(answer, index) {
  document.getElementById("quest_answer")
    .insertAdjacentHTML(
      'beforeend',
      '<input type="radio" name="answer" id="' + index + '" value="' + index + '" onclick="onAnswerChange(event)" required /> <label for="' + index + '">' + answer + '</label>',
    );
}



function clearAnswers() {
  document.getElementById ("quest_answer").innerHTML = '';
}

function goNext () {
  currentQuest++;
	if (currentQuest >=titles.length) {
	var total = 0;
		for (var indexQuest=0; indexQuest<userAns.length; indexQuest++){
			var indexAns = Number(userAns [indexQuest])
			total=total+points[indexQuest][indexAns]
		}
	if (total>=23) {
		document.getElementById ("naturalistic").style.display="grid";
			} 
			else if (total>=20) {
				document.getElementById ("ecologistic").style.display="grid";
			}
			else if (total>=18) {
				document.getElementById ("humanistic").style.display="grid";
			}
			else if (total>=15) {
                document.getElementById ("moralistic").style.display="grid";
                document.getElementById ("moralistic").classList.add("fade");
			}
			else if (total>=14) {
				document.getElementById ("scientistic").style.display="grid";
			}
			else if (total>=10) {
				document.getElementById ("aesthetic").style.display="grid";
			}
			else if (total>=7) {
				document.getElementById ("utilitarian").style.display="grid";
			}
			else if (total>=5) {
				document.getElementById ("dominionistic").style.display="grid";
			}
			else {
				document.getElementById ("negativistic").style.display="grid";
			}
//        document.getElementById("reveal-elements-att").style.display = "grid";
//        document.getElementById ("att_struc").style.display="grid";
	document.getElementById ("questions").style.display="none";
	document.getElementById ("start").style.display="none";
	} else {
		  render ();
	}
}

function render () {
  clearAnswers();
  
  changeTitle (titles[currentQuest]);
  var i; 
  for (i=0; i < answers[currentQuest].length; i++) {
    appendAnswer(answers[currentQuest][i], i);
  }
  document.getElementById("questions").className = "question"+ currentQuest;

	changeAnimal (animals[currentQuest]);
}

//Variables//

var titles = [
	'<h5>Question 1</h5><br> Finish the statement: I like squirrels because...', 
	'<h5>Question 2</h5><br>What adjective would you use to describe a coyote?', 
	'<h5>Question 3</h5><br>You are walking when you suddenly encounter a brown snake. You...',
	'<h5>Question 4</h5><br>It\'\s morning. There is house sparrow singing outside your bedroom window. You...',
	'<h5>Question 5</h5><br>You notice a family of raccoons at a city lookout. You...'
];

var answers = [
  ["They're cute", "They're good scavengers", "I don't like squirrels", "They bring life to the city", "They can be easily hunted"],
  ["Majestic", "Dangerous", "Mischevious", "Furry", "Fast"],
  ["Jump back, scream, and run away", "Pause and observe them", "You grab the nearest stick and and relocate them off the trail", "Contemplate how you could use their skin to make a purse", "Take a selfie with the snake and post it to your Instagram"],
  ["Look outside to try to locate them", "Sigh, roll over and cover your ears with a pillow", "You Google 'house sparrow meaning'", "You Google 'do house sparrows actually live in houses?'", "You Google 'house sparrow population in the city'"],
  ["Hope the city is monitoring raccoons around the lookout", "Think they are cute and quickly snap a photo", "Worry that they will attack people at the lookout spot", "Believe they would be better off outside the city", "Think about how lucky you are to see them"]
]

var points = [
    [4,3,0,5,1],
    [4,0,2,1,3],
    [0,3,5,1,4],
	[5,0,2,3,4],
	[4,3,0,1,2],
]

var userAns = [];
var currentAns;

var currentQuest = -1;

var animals = [
	'/../images/animated_squirrel.gif',
	'/../images/animated_coyote.gif',
	'/../images/animated_snek.gif',
	'/../images/animated_borb.gif',
	'/../images/animated_raccoon.gif'
]

//Events//

document.getElementById ("quest_form").onsubmit = function (e){
  e.preventDefault();
  userAns[currentQuest] = currentAns;
  
  goNext ();
}

function onAnswerChange(e) {
  currentAns = e.target.value;
}

goNext ();
