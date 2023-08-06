let money = 0;
let test2 = 0;
let myMonsterArray = [];
let allMonsterTypesByID = ["Arguu", "Ladlu", "Tryon"];
let singleMonsterDisplay = "a";

document.getElementById("mainButton").addEventListener("click",add_money);
document.getElementById("close-singleMonsterDisplay").addEventListener("click",function(){singleMonsterDisplayFunction(null)});


let monsterCards = document.getElementsByClassName("monsterCard");

for(let i = 0;i<monsterCards.length;i++){
 monsterCards[i].addEventListener("click", function(){singleMonsterDisplayFunction(monsterCards[i].children[0].innerHTML)});
}




function add_money(){
money++;
update_money();
test();
myMonsterArray.push(new Arguu("Common"));
updateMonsterCards();
}


function update_money(){
    var e = document.getElementById("moneyDisplay");
    e.innerHTML = "Money: "+money;
}

function singleMonsterDisplayFunction(monster){
    console.log(monster);
    let x = document.getElementById("singleMonsterDisplay");
    if(monster == null){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
        x.children[1].innerHTML = monster;
    }
}

function test(){
    var e = document.getElementById("loader");
    test2 = test2 + 5;
    e.style.width = test2+"%";
}

function updateMonsterCards(){
    let arrayLength = myMonsterArray.length;
    let holder = document.getElementById("allMonsterHolder");
    let monsterCountingArray = [0,0,0];
    let idleMonsterCountingArray = [0,0,0];

    for(let i = 0;i<arrayLength;i++){//Counts how many of every type of monster there are
        monsterCountingArray[myMonsterArray[i].monsterId-1]++;
    }

    for(let i = 0;i<arrayLength;i++){//Counts how many of every type of monster there are that currently idle
        for(let j = 0;j<monsterCountingArray[i];j++){
            idleMonsterCountingArray[i]++;
        }
    }

    
    
    for(let i = 0;i<monsterCountingArray.length;i++){// Adds the name and amount to the monster cards
        holder.children[i].children[0].innerHTML = allMonsterTypesByID[i];
        holder.children[i].children[1].innerHTML = "Amount: "+monsterCountingArray[i]+"X";
        holder.children[i].children[2].innerHTML = "Idle: "+idleMonsterCountingArray[i]+"X";
    }
}