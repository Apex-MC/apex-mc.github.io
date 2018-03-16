$('html').bind('keypress', function(e)
{
   if(e.keyCode == 13)
   {
      return false;
   }
});
function generateEq(){
    var num1 = Math.floor(Math.random() * 1000);
    var num2 = Math.floor(Math.random() * 1000);
    document.getElementById("one").innerHTML = num1;
    document.getElementById("two").innerHTML = num2;
    document.getElementById("form").innerHTML = `<br><form method="post" id="mathForm"><input type="number" id="answer"><button type='button' class="waves-effect waves-light btn" onclick="checkMath()">Submit</button></form>`;
}

function checkMath(){
    var num1 = parseInt(document.getElementById("one").innerHTML, 10);
    var num2 = parseInt(document.getElementById("two").innerHTML, 10);
    var answer = parseInt(document.getElementById("answer").value, 10);
    var correctAnswer = num1 + num2;
    if (!answer) {
        return;
    }
    if (answer === correctAnswer) {
        document.getElementById("form").innerHTML = `<br><form method="post" id="mathForm"><input type="number" placeholder="${correctAnswer}" id="answer" disabled><button class="waves-effect waves-light btn" onclick="generateEq()">Next</button><i class="material-icons right">done</i>`;
        return;
    } else {
        document.getElementById("form").innerHTML = `<br><form method="post" id="mathForm"><input type="number" id="answer"><button type='button' class="waves-effect waves-light btn" onclick="checkMath()">Submit</button></form><i class="material-icons right">clear</i>`;
        return;
    }
}

function load(){
    document.getElementById("seperator").innerHTML = " + ";
    return generateEq();
}
