
var turn="X";
var playedCell=[];
var playedTime=0;




//Q1////////////
var countX =0;//compteur de victoires de x
var countO =0;//compteur de victoires de O


//creer un element html pour afficher countX
var winsX = document.createElement("p");
winsX.innerHTML="Victoires de X : "+countX;
document.body.appendChild(winsX);//pour affichier l'element a la fin

//creer un element html pour afficher countO
var winsO = document.createElement("p");
winsO.innerHTML="Victoires de O : "+countO;
document.body.appendChild(winsO);

///fin declarQ1 la suite dans haswon(play////)




  // create elements <table> and a <tbody>
var tbl = document.createElement("table");


var tblBody = document.createElement("tbody");

  // cells creation
var identifier=0;
for (var j = 0; j <= 2; j++) {
    // table row creation

  var row = document.createElement("tr");

  for (var i = 0; i <= 2; i++) {
    var cell = document.createElement("td");

    row.appendChild(cell);
    
    cell.setAttribute("width",120);
    cell.setAttribute("height",120);
    cell.setAttribute("align","center");
    cell.setAttribute("valign","center");
    cell.addEventListener("click",playTurn);
    cell.identifier=identifier;
    cell.classList.add("cell");
    identifier=identifier+1;


    cell.style.fontSize="xxx-large";
    cell.style.backgroundColor="grey";


  }

    //row added to end of table body
  tblBody.appendChild(row);
}

  // append the <tbody> inside the <table>
tbl.appendChild(tblBody);
  // put <table> in the <body>

document.getElementById("tictactoe").appendChild(tbl);

  //Q4 RESET BTN//
resetBtn.addEventListener('click', init)
function init(){
  playedTime=0;
  turn="X";
  playedCell=[];
  var allCells=document.getElementsByClassName("cell");
  for(let item of allCells){
    item.innerHTML="";
  }
}
  //fin Q4//


function playTurn(){

  	//1 check if the cell has been played before
 if(this.innerHTML==="X" || this.innerHTML==="O"){
  return;
}

playedTime=playedTime+1;
  	//2 add the new played tuen to the table playedCell
playedCell[this.identifier]=turn;
this.innerHTML=turn;

  	//3 check if the game has been won by one of the players
if (hasWon(turn)){
  alert("Player: "+turn+" has won the game");
  init();
  return;
}


var number =5;


   //4 switch to the other playerS
if(turn==="X") {
     // turn="O";
      autoPlay();//pour Q2
    }else
    turn="X";


    if (playedTime===9){
      alert("Draw game");
      init();

    }

  }



  //Q2//
  function autoPlay(){
    //1-trouver tous les cellules non jouer
    var unplayedCells = [];
    var allCells = document.getElementsByClassName("cell");//recuperer les elements qui ont la classe "cell"
    for(let item of allCells){//item c'est l'element qui indique la cellule
      if(item.innerHtml !== "X" && item.innerHTML !== "O"){//verifier s'il n'y a ni X ni O dans les cellules 
        unplayedCells.push(item);//ajouter la cellule non jouer au tab des cellules non jouer
      }
    } 

    //2-terminer le jeu dans le cas ou il n'y a pas de cellules vide
    if(unplayedCells.length == 0){
      alert("Drw game");
      init();
      return;
    }

    //3-choisire des cellule aliatoire pour O
    var randIndex = Math.floor(Math.random()*unplayedCells.length);
    unplayedCells[randIndex].innerHTML = "O";
    playedCell[unplayedCells[randIndex].identifier] = "O";//mettre O dans la cellule choisite avec randindex

    //4-verifier si O a ganier avans de le remettre
    if(hasWon("O")){
      alert("Player : O ,Has won the game");
      init();
      return;
    }
  }
 //fin Q2///////



  function hasWon(play){

    //pour la Q6//
    const line =document.getElementById("line").createElement('div');
    




    if(playedCell[0]===play && playedCell[1]===play && playedCell[2]===play ){
     //suiteQ1
      uopdateScore(play);

      return true;
    }


    if(playedCell[3]===play && playedCell[4]===play && playedCell[5]===play ){
     //suiteQ1
      uopdateScore(play);


      return true;
    }


    if(playedCell[6]===play && playedCell[7]===play && playedCell[8]===play ){
     //suiteQ1
      uopdateScore(play);


      return true;
    }


    if(playedCell[0]===play && playedCell[3]===play && playedCell[6]===play ){
    //suiteQ1
      uopdateScore(play);


      return true;
    }


    if(playedCell[1]===play && playedCell[4]===play && playedCell[5]===play ){
      //suiteQ1
      uopdateScore(play);


      return true;
    }


    if(playedCell[2]===play && playedCell[5]===play && playedCell[8]===play ){
      //suiteQ1
      uopdateScore(play);


      return true;
    }


    if(playedCell[0]===play && playedCell[4]===play && playedCell[8]===play ){
     //suiteQ1
      uopdateScore(play);


      return true;
    }



    if(playedCell[2]===play && playedCell[4]===play && playedCell[6]===play ){
    //suiteQ1
      uopdateScore(play);


      return true;
    }

    return false;
  }

  //suite Q1//
  function uopdateScore(play){
    if(play==="X"){
      countX++;
        winsX.innerHTML="Victoires de X : "+countX;//mettre a jour countX
      }else{
        countO++;
        winsO.innerHTML="Victoires de o : "+countO;//mettre a jour countO
      }
    }

    function init(){

      playedTime=0;
      turn="X";
      playedCell=[];
      var allCells=document.getElementsByClassName("cell");
      for(let item of allCells){
       item.innerHTML="";
     }

   }