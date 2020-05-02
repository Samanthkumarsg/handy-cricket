const playerHandsHolder = document.querySelector('.players_HandsHolder'); 
const playerHands = document.querySelectorAll('.hands');

const playerOneName = document.querySelector('.playerOne__name');
const playerTwoName = document.querySelector('.playerTwo__name');

const displayPlayerOne = document.querySelector('#display_playerOne');
const displayPlayerTwo = document.querySelector('#display_playerTwo');

const Alert = document.querySelector('.alert');

const PlayerOneprogress =document.querySelector('.playerOne-progress');
const PlayerTwoprogress =document.querySelector('.playerTwo-progress');
const finalScores = document.querySelector('.finalScores');

let hit=0;

let playerHandValue;
let playerOneHandValue;
let playerTwoHandValue;

let PlayerOnefinalScore=0;
let PlayerTwofinalScore=0;

let playerTurnIs=1;

let playerOneIs = "batting";
let playerTwoIs = "balling";

let PlayerOneScore = 0;
let PlayerTwoScore = 0;




playerHands.forEach(hands=>{
    hands.addEventListener('click',SelectHand);
    hands.classList.add("anim-pops");
});

function SelectHand(){
    playerHandValue = parseInt(this.textContent);
    playerTurn(playerHandValue);
    
}


function playerTurn(playerHandValue){
    playerTurnIs==1 ? playerOneTurn(playerHandValue) : playerTwoTurn(playerHandValue);
}

 function checkOut(){
     
    
    if(hit==2)
    {
        hit=0;

        console.log("player turn is",playerTurnIs);
        
        if(playerOneIs=="batting"){
  
            console.log("next round \n \n");
            checkWin();
            if(playerOneHandValue===playerTwoHandValue)
            {
                Alert.textContent=`${playerOneName.textContent} is out! `;
                console.log(`${playerOneName.textContent} is Out`);

                PlayerOnefinalScore=PlayerOneScore;
                PlayerOneprogress.style.width = `${PlayerOnefinalScore}%`;
                PlayerOneprogress.textContent = `${playerOneName.textContent} ${PlayerOnefinalScore}`;

                console.log(PlayerOnefinalScore)
                playerTurnIs=2;
                playerOneIs="balling";
                playerTwoIs="batting";
                PlayerOneScore=0;
                PlayerTwoScore=0;
                playerHandValue=0;
                
                displayPlayerOne.innerHTML = '';
                displayPlayerTwo.innerHTML = '';
                
            }
        }
        else if(playerOneIs=="balling"){
            checkWin();
            Alert.textContent=`${playerTwoName.textContent} is ${playerTwoIs}`;
            if(playerOneHandValue===playerTwoHandValue){
                console.log(`${playerTwoName.textContent} is Out`);

                PlayerTwofinalScore=PlayerTwoScore;

                playerTurnIs=1;
                playerOneIs="batting";
                playerTwoIs="balling";
                PlayerOneScore=0;
                PlayerTwoScore=0;
                playerHandValue=0;
                PlayerOnefinalScore=0;
                displayPlayerOne.innerHTML = '';
                displayPlayerTwo.innerHTML = '';
                
            }
        }
        else if(playerTwoIs=="batting"){
            checkWin();
            PlayerTwofinalScore=PlayerTwoScore;
            PlayerTwoprogress.style.width = `${PlayerTwofinalScore}%`;
            PlayerTwoprogress.textContent = `${playerTwoName.textContent} ${PlayerTwofinalScore}`;
            
        }
        else if(playerTwoIs=="balling"){
            checkWin();
            PlayerTwofinalScore=PlayerTwoScore;
            PlayerTwoprogress.style.width = `${PlayerTwofinalScore}%`;
            PlayerTwoprogress.textContent = `${playerTwoName.textContent} ${PlayerTwofinalScore}`;
            PlayerTwofinalScore=0;
            
        }
}

}

async function checkWin(){
    console.log(await PlayerOnefinalScore,await PlayerTwofinalScore)
    finalScores.textContent = await PlayerOnefinalScore + await PlayerTwofinalScore;
    // if(await PlayerTwofinalScore>PlayerOnefinalScore){
    //     console.log("player 2 wins")
        
    // }
    // else 
    // {
    //     console.log("player 1 wins");
        
    // }

};

checkWin();
console.log(checkWin)


function playerOneTurn(){
    // playerHandsHolder.classList.add("hide");

  //  playerHandsHolder.classList.contains("hide") ? playerHandsHolder.classList.remove("hide") && playerHandsHolder.classList.add("show")  : playerHandsHolder.classList.remove("show") && playerHandsHolder.classList.add("hide");
    playerOneName.style.color = "#dc3545";
    playerTwoName.style.color = "#444";

    playerOneHandValue = playerHandValue;
    PlayerOneScore += playerHandValue;

    console.log(`${playerOneName.textContent} \n is ${playerOneIs} Selected: ${playerHandValue} \n Score: ${PlayerOneScore} `);
    playerTurnIs=2;
    hit++;
    console.log(hit);
    
    Alert.textContent=`${playerOneName.textContent} is ${playerOneIs}`;

    if(playerOneIs=="batting" ){
        displayPlayerOne.innerHTML =  PlayerOneScore;
        PlayerOneprogress.style.width = `${PlayerOneScore}%`;
        PlayerOneprogress.textContent = `${playerOneName.textContent} ${PlayerOneScore}`;
    }
    else{
        displayPlayerOne.innerHTML =  '';

        
    }
    checkOut();
}


function playerTwoTurn(){
    // playerHandsHolder.classList.add("hide");

  //  playerHandsHolder.classList.contains("hide") ? playerHandsHolder.classList.remove("hide") && playerHandsHolder.classList.add("show")  : playerHandsHolder.classList.remove("show") && playerHandsHolder.classList.add("hide");
    // console.log(playerHandsHolder.classList);
    
    playerOneName.style.color = "#444";
    playerTwoName.style.color = "#dc3545";

    playerTwoHandValue = playerHandValue;
    PlayerTwoScore += playerHandValue;


    console.log(`${playerTwoName.textContent} \n is ${playerTwoIs} \n Selected: ${playerHandValue} \n Score: ${PlayerTwoScore} `);
    playerTurnIs=1;
    hit++;
    console.log(hit);
    Alert.textContent=`${playerTwoName.textContent} is ${playerTwoIs}`;

    if(playerTwoIs=="batting" ){
        displayPlayerTwo.innerHTML = PlayerTwoScore;
        PlayerTwoprogress.style.width = `${PlayerTwoScore}%`;
        PlayerTwoprogress.textContent = `${playerTwoName.textContent} ${PlayerTwoScore}`;
    }
    else{
        displayPlayerTwo.innerHTML = '';

        
    }

    checkOut();
}

