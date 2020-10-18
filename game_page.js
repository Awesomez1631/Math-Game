player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2_name;
function send(){
    get_1 = document.getElementById("n1stN").value;
    get_2 = document.getElementById("n2ndN").value;
    question_word = "<h4 id = 'word_display'> Q." + get_1 + "X" + get_2 + "</h4>";
    input_box = "<br> Answer : <input type = 'text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' id='check' onclick = 'check()'> CHECK </button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row ;
    document.getElementById("n1stN").value = "";
    document.getElementById("n2ndN").value = "";
    answer = parseInt(get_1)*parseInt(get_2);
}
get_1 = document.getElementById("n1stN").value;
get_2 = document.getElementById("n2ndN").value;
answer = parseInt(get_1)*parseInt(get_2);
question_turn="player1";
answer_turn = "player2";
question_turn="player1";
answer_turn = "player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
console.log("answer = "+get_answer);
if (get_answer == answer){
    if (answer_turn == "player1"){
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else{
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
    document.getElementById("output").innerHTML = "";
}
if (get_answer != answer){
    document.getElementById("output").innerHTML = "Try Again In Your Next Turn!";
}
if (question_turn == "player1"){
question_turn = "player2";
document.getElementById("player_question").innerHTML = "Question Turn - "+player2_name;
}
else{
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
}
if (answer_turn == "player1"){
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+player1_name;
    }
    
}


