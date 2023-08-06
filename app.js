class monsterStatistics{
    constructor(common, uncommon){
        this.income = [common.income, uncommon.income];
        this.blood = [common.blood, uncommon.blood];
        this.reproducibility = [common.reproducibility, uncommon.reproducibility];
        this.name = common.name;
        this.resource = common.resource;
        this.type = common.type;
        this.amount = 0;
        this.idle = 0;
    }

    get getType(){
        return this.type;
    }
    get getIncome(){
        return this.income;
    }
    get getBlood(){
        return this.income;
    }
    get getReproducibility(){
        return this.reproducibility;
    }
    get getAmount(){
        return this.amount;
    }
    get getIdle(){
        return this.idle;
    }


}



let money = 0;
let test2 = 0;
let myMonsterArray = [];
let allMonsterTypesByID = [Arguu/*, "Ladlu", "Tryon"*/];
let allMonsterStatistics = [new monsterStatistics(new Arguu("Common"), new Arguu("Uncommon"))];
let singleMonsterDisplay;

document.getElementById("mainButton").addEventListener("click",add_money);
document.getElementById("close-singleMonsterDisplay").addEventListener("click",function(){singleMonsterDisplayFunction(null)});


let monsterCards = document.getElementsByClassName("monsterCard");

for(let i = 0;i<monsterCards.length;i++){
 monsterCards[i].addEventListener("click", function(){singleMonsterDisplayFunction(monsterCards[i].children[0].innerHTML)});
}

update();

function update(){
    update_money;
    updateMonsterCards();
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
        let rightID;
        for(let i = 0;i< allMonsterTypesByID.length;i++){
            if(allMonsterTypesByID[i].name==monster){
                rightID = i;
                console.log(rightID);
            }
        }
        x.children[2].innerHTML = "Type: "+allMonsterStatistics[rightID].getType;
        x.children[3].innerHTML = "Income: "+allMonsterStatistics[rightID].getIncome;
        x.children[4].innerHTML = "Blood: "+allMonsterStatistics[rightID].getBlood;
        x.children[5].innerHTML = "Reproducibility: "+allMonsterStatistics[rightID].getReproducibility;
        x.children[6].innerHTML = "Amount: "+ allMonsterStatistics[rightID].getAmount;
        x.children[7].innerHTML = "Idle: "+ allMonsterStatistics[rightID].getAmount;

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
    let monsterCountingArray = [0];
    let idleMonsterCountingArray = [0];

    for(let i = 0;i<arrayLength;i++){//Counts how many of every type of monster there are
        monsterCountingArray[myMonsterArray[i].monsterId]++;
    }

    for(let i = 0;i<arrayLength;i++){//Counts how many of every type of monster there are that currently idle
        for(let j = 0;j<monsterCountingArray[i];j++){
            idleMonsterCountingArray[i]++;
        }
    }

    
    
    for(let i = 0;i<monsterCountingArray.length;i++){// Adds the name and amount to the monster cards
        allMonsterStatistics[i].amount = monsterCountingArray[i];
        allMonsterStatistics[i].idle = idleMonsterCountingArray[i];

        holder.children[i].children[0].innerHTML = allMonsterTypesByID[i].name;
        holder.children[i].children[1].innerHTML = "Amount: "+monsterCountingArray[i]+"X";
        holder.children[i].children[2].innerHTML = "Idle: "+idleMonsterCountingArray[i]+"X";
    }
}