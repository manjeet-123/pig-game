/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScore , activePlayer , gameplaying;

init();




document.querySelector('.btn-roll').addEventListener('click',function(){
    //  block roll btn
    if(gameplaying){
        //  rolling number
    var dice1 = Math.floor(Math.random() * 6 )+ 1;
    var dice2 = Math.floor(Math.random() * 6 )+ 1;

    // display the result
    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';
document.getElementById('dice-1').src = 'dice-'+dice1+'.png';
    document.getElementById('dice-2').src = 'dice-'+dice2+'.png';

    // if roll 6 two time in a row

    if(dice1 !== 1 && dice2 !== 1){
     roundScore +=dice1 + dice2;
       document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        // next player
       nextPlayer();
    }
    


    }

    // move here to gamplaying./////////////////////////////

    // //  rolling number
    // dice = Math.floor(Math.random() * 6 )+ 1;

    // // display the result
    // var diceDom = document.querySelector('.dice');
    // diceDom.style.display='block';
    // diceDom.src = 'dice-'+dice+'.png';

    // // update the round score if the rolled number was NOT a 1.
    // if(dice !== 1){
    //  roundScore +=dice;
    //    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    // }else{
    //     // next player
    //    nextPlayer();
    // }
})


// hold button


document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gameplaying){
          //  add current score to global score...
    scores[activePlayer] +=roundScore;

    // update the UI
    document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer];

    var input = document.querySelector('.final-score').value;

    var winningScore;
    if(input){
        winningScore = input;
        }else{
            winningScore =100;
        }
    // check if player won the game 

    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-'+activePlayer).textContent = 'winner!';
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gameplaying = false ;

    }else{
     
          // next player
              nextPlayer();

    }

    }



    // // move here to gameplaying

    
    // //  add current score to global score...
    // scores[activePlayer] +=roundScore;

    // // update the UI
    // document.querySelector('#score-' + activePlayer).textContent =  scores[activePlayer];

    // // check if player won the game 

    // if(scores[activePlayer] >= 20){
    //     document.querySelector('#name-'+activePlayer).textContent = 'winner!';
    //     document.querySelector('.dice').style.display = 'none';
    //     document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    //     document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    //     gameplaying = false ;

    // }else{
     
    //       // next player
    //           nextPlayer();

    // }



})

// for next player
function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';

}
// for restart the game.....
document.querySelector('.btn-new').addEventListener('click',init);

function init() {

    scores =[0,0];
    activePlayer = 0;
    roundScore =0;
    gameplaying = true;

    
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent ='player 1';
    document.getElementById('name-1').textContent ='player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

