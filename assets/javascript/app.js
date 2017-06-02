// starts when page loads
window.onload = function() {
  $("#start").click(run);
  $("#start").html("Push to Start the Game!")
  // $("#submit").click(stop);
  $("#nextQuestion").click(nextQuestion);

  $("#questionSheet").hide();
  $("#button1").hide();
  $("#button2").hide();
  $("#button3").hide();
  $("#button4").hide();
  $("#nextQuestion").hide();

  $("#button1").click(buttonClicked);
  $("#button2").click(buttonClicked);
  $("#button3").click(buttonClicked);
  $("#button4").click(buttonClicked);

  $("#nextQuestion").hide();

};


// variables
var number = 30;
var startGame;
var displayQuestion = false;
var correctGuess = 0;
var incorrectGuess = 0;
var noResponse = 10;
var currentQuestion = 0;
// var userInput = event.key;
var questionCounter = 0;


var questions = [{
    question: "What does TGS stand for?",
    choices: ["That Great Show", "The Girlie Show", "The Green Show", "The Gray Shadow"],
    correctAnswer: 1
}, {
    question: "Who does Liz Lemon end up marrying?",
    choices: ["Criss Cross", "Dennis Duffy", "Carol, the Pilot", "Floyd"],
    correctAnswer: 0
}, {
    question: "Who are the Stars of TGS?",
    choices: ["Frank and Toofer", "Kenneth and Pete", "Jenna Maroney and Tracy Morgan", "Jennifer Maroney and Tracy Jordon"],
    correctAnswer: 2
}, {
    question: "Who is Liz Lemon's mentor?",
    choices: ["Jack Donaghy", "Avery Jessup", "Pete Hornberger", "Hank Hooper"],
    correctAnswer: 1
}, {
    question: "Jenna gains weight while working on what musical?",
    choices: ["The Rural Juror", "Charlie and the Chocolate Factory: The Musical", "Annie", "Mystic Pizza: The Musical"],
    correctAnswer: 3
}, {
    question: "What is the name of the hit party song Tracy has a gold record for?",
    choices: ["Ghost Party", "Bewitched", "Werewolf Bar Mitzvah", "Monster Mash"],
    correctAnswer: 2
}, {
    question: "What town is Kenneth Parcell, the NBC page, from?",
    choices: ["Green Mountain, Georgia", "Stone Mountain, Georgia", "Little Mountain, Mississippi", "Red Mountain, Mississippi"],
    correctAnswer: 1
}, {
    question: "What Sport did NBC not make up during the Olympics to make people believe America won more medals?",
    choices: ["Lawn Bowling", "Octoples Tennis", "Olympic Tetherball", "Synchronized Running"],
    correctAnswer: 0
}, {
    question: "What meal does Lutz instits upon ordering for TGS's last episode?",
    choices: ["Subway", "Gas Station Hot Dogs", "Marshmallows", "Blimpies"],
    correctAnswer: 3
}, {
    question: "Who does Liz Lemon dress up as to get out of jury duty?",
    choices: ["Princess Leia", "Wonder Woman", "Catwoman", "Batman"],
    correctAnswer: 0   
}];

// countdown functions
function run() {
  startGame = setInterval(decrement, 1000);
  $("#start").hide();
  $("#button1").show();
  $("#button2").show();
  $("#button3").show();
  $("#button4").show();

  displayCurrentQuestion();
}

function decrement() {
  number--;
  $("#show-number").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    alert("Time Up!");
  }
}

function buttonClicked(e){
  //get value of button index 
  var value = $(this).attr("index");

  //compare button index value with questions[questionCounter].correctAnswer
  if (value == questions[questionCounter].correctAnswer){
    correctGuess++;
    clearInterval(startGame);
    submitCorrectAnswer();
  }

  else {
    incorrectGuess++;
    clearInterval(startGame);
    submitIncorrectAnswer();
  }

    questionCounter++;
    console.log(questionCounter);

    //load in new question
}


function displayCurrentQuestion () {
  if (questionCounter > 10){
    stop();
  }
  else{
    console.log(questions[questionCounter].question);
    $("#question").html(questions[questionCounter].question);
    $("#button1").html(questions[questionCounter].choices[0]);
    $("#button2").html(questions[questionCounter].choices[1]);
    $("#button3").html(questions[questionCounter].choices[2]);
    $("#button4").html(questions[questionCounter].choices[3]);
  }
}

function submitIncorrectAnswer () {
  $("#nextQuestion").show();
  $("#nextQuestion").html("Next Question");
  $("#button1").hide();
  $("#button2").hide();
  $("#button3").hide();
  $("#button4").hide();
  $("#question").hide();

    var incorrectAnswerDiv = $("<div>");
    incorrectAnswerDiv.html("Sorry, you're wrong!");
    $("#question").append(incorrectAnswerDiv);
    incorrectAnswerDiv.attr("class", "answerDisplay");

    // var incorrectAnswerDiv = $("<div>");
    // photoDiv.html();
    // $("#questionSheet").append(photoDiv);
    // incorrectAnswerDiv.attr("class", "photoDisplay");

}

function submitCorrectAnswer () {
  $("#nextQuestion").show();
  $("#nextQuestion").html("Next Question");
  $("#button1").hide();
  $("#button2").hide();
  $("#button3").hide();
  $("#button4").hide();
  $("#question").hide();

    var correctAnswerDiv = $("<div>");
    correctAnswerDiv.html("You got it right!!");
    $("#question").append(correctAnswerDiv);
    correctAnswerDiv.attr("class", "answerDisplay");

    // var incorrectAnswerDiv = $("<div>");
    // photoDiv.html();
    // $("#questionSheet").append(photoDiv);
    // incorrectAnswerDiv.attr("class", "photoDisplay");
}

function nextQuestion () {
  number = 30;
  // $("#submit").show();
  run();
}

function stop() {
  $("#button1").hide();  
  $("#button2").hide();
  $("#button3").hide();
  $("#button4").hide();
  $("#start").hide();
  $("#sumbit").hide();
  $("#nextQuestion").hide();

  var updateCorrectGuess = "<p>You got " + correctGuess + " answers correct!</p>";
  var updateIncorrectGuess = "<p>You got " + incorrectGuess + " answers wrong!</p>";
  var updateNoResponse = "<p>Unanswered questions: " + noResponse + "</p> ";

  $("#scores").html(updateCorrectGuess + updateIncorrectGuess + updateNoResponse);

}


