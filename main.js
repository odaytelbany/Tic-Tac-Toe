let squares = document.querySelector(".container .squares");
let title = document.querySelector(".title")
let squareArray = [];


// End game fuction
function end(num1 , num2 ,num3){    
    title.innerHTML = `${(squareArray[num1]).toUpperCase()} is the winner`;
    document.getElementById("item"+ num1).style.background= "#191919";
    document.getElementById("item"+ num2).style.background= "#191919";
    document.getElementById("item"+ num3).style.background= "#191919";
    setInterval(function(){
        title.innerHTML += ".";
    }, 750)
    setTimeout(function(){
        location.reload();
    }, 2600)
}

// fuction to check equallity (winner)
function winner(){

    for (let i = 1; i<10; i++){
        squareArray[i] = document.getElementById("item"+i).innerHTML;
    }

    if (squareArray[1] == squareArray[2] && squareArray[2] == squareArray[3] && squareArray[1] != ""){
        end(1,2,3);
    }
    if (squareArray[4] == squareArray[5] && squareArray[5] == squareArray[6] && squareArray[4] != ""){
        end(4,5,6);
    }
    if (squareArray[7] == squareArray[8] && squareArray[8] == squareArray[9] && squareArray[7] != ""){
        end(7,8,9);
    }

    if (squareArray[1] == squareArray[4] && squareArray[4] == squareArray[7] && squareArray[1] != ""){
        end(1,4,7);
    }
    if (squareArray[2] == squareArray[5] && squareArray[5] == squareArray[8] && squareArray[2] != ""){
        end(2,5,8);   
    }
    if (squareArray[3] == squareArray[6] && squareArray[6] == squareArray[9] && squareArray[3] != ""){
        end(3,6,9);
    }

    if (squareArray[1] == squareArray[5] && squareArray[5] == squareArray[9] && squareArray[1] != ""){
        end(1,5,9);
    }
    if (squareArray[3] == squareArray[5] && squareArray[5] == squareArray[7] && squareArray[3] != ""){
        end(3,5,7);
    }
}



// main process to emplement the event
let turn = "x";
squares.addEventListener("click", function(e){
    if (e.target.classList.contains("square")){
        // console.log("done")
        if (turn == "x" && e.target.innerHTML == ""){
            e.target.innerHTML = "x";
            turn = "o";
        }
        else if(turn == "o" && e.target.innerHTML == ""){
            e.target.innerHTML = "o";
            turn = "x";
        }
        winner();
    }
});

