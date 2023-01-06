var question;
var enter = document.getElementById("askMe");
const points = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes, definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy, try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no"
];

console.log(points);

// function myFunction() {
//   points.sort(function(){return 0.5 - Math.random()});
//   document.getElementById("response").innerHTML = points[0];
//   document.getElementById("response").style.fontSize = "18px";
//   setTimeout(delay, 4000);

//   function delay() {
//     document.getElementById('response').innerHTML = "8";
//     document.getElementById("response").style.fontSize = "120px";
//     document.getElementById("clear").value = "";
//   }
// };

function generateAnswer() {

  var response;

    for (let i = 0; i < points; i++); {
      var random = Math.floor(Math.random() * points.length);
      console.log(random);
    };

    function delay() {
      document.getElementById('response').innerHTML = "8";
      document.getElementById("response").style.fontSize = "120px";
      document.getElementById("clear").value = "";
    };
    return response;
};

function response() {
  var answer = generateAnswer();
  var answerText = document.getElementById("clear");
};

enter.addEventListener("click", points);