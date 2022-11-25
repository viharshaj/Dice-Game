//funtion to get a random number
function randnumber(num){
    var x = Math.floor(Math.random()*num) + 1;//give randoms upto num including num
    return x;
}

var begin = randnumber(2);
var player1 = 0;
var player2 = 0;

//Funtion to display the text
function displayText(){
    var x = document.getElementById("winner");
    if(player1 >= 100){ 
        x.innerHTML = "Congratulations!! Winner is player 1";//If player 1 get 100 or more than 100 it will display this
    }
    else{
        x.innerHTML = "Congratulations!! Winner is player 2";//If player 2 get 100 or more than 100 it will display this
    }
    
    document.getElementById("winner").style.display = 'block';
    setTimeout(hideElement,3000);
}

//Funtion to restart the game
function restart(){
    player1 = 0;
    player2 = 0;

    document.getElementById("res-1").innerHTML = player1;
    document.getElementById("res-2").innerHTML = player2;
    document.getElementById("btn").disabled = false;
}

function hideElement(){
    var x = document.getElementById("winner");
    if(x=='none'){
        x.style.display = 'block';//set the display property and the element is displayed as a block
    }
    else{
        x.style.display = 'none';//Element will not be displayed
    }
    restart();
}

//function to get results
function getResults(num1, num2){
    //player 1 play the game
    if(begin == 1){
        player1 = player1 + num1 + num2;
        document.getElementById("res-1").innerHTML = player1;//This will print the total of player 1

        
        if(num1 == num2){
            if(num1 == 1 && num2 == 1){ //If both the numbers equal to 1 then the total of the player will be 0
                player1 = 0;
                document.getElementById("res-1").innerHTML = player1;
                begin = 2;//player 2 will get a chance to play
            }
            else{
                begin = 1;//If the both numbers are equal but not to 1, then player 1 will get another chance to play
            }
        }
        else{
            begin = 2;//if both numbers are not equal then the player 2 will get the chance to play
        }

        //if  player 1 get 100 or more than 100 the button will be disabled
        if(player1 >= 100){
            document.getElementById("btn").disabled = true;
            setTimeout(displayText,200);//After 200 milliseconds displayText function will be called
        }
        
    }
    else{
        player2 = player2 + num1 + num2;
        document.getElementById("res-2").innerHTML = player2;
        if(num1 == num2){
            if(num1 == 1 && num2 == 1){
                player2 = 0;
                document.getElementById("res-2").innerHTML = player2;
                begin = 1;
            }
            else{
                begin = 2;
            }
        }
        else{
            begin = 1;
        }

        if(player2 >= 100){
            document.getElementById("btn").disabled = true;
            setTimeout(displayText,200);
        }
    }
}

document.getElementById("btn").addEventListener("click",()=>{
    var a = randnumber(6);//Get a random number from 1 to 6
    var b = randnumber(6);//Get a random number from 1 to 6

    document.getElementById("dice-1").src = "./assets/dice_" + a + ".png";
    document.getElementById("dice-2").src = "./assets/dice_" + b + ".png";

    getResults(a, b);
})