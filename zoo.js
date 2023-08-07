class speedBonus{
    constructor(name, monsterId, appeal){
        this.name = name;
        this.baseSpeed = 20;
        this.baseMultiplier = 1.7;
        this.barProgress = 0;
        this.monsterId = monsterId;
        this.amount = 1;
        this.bar = document.getElementById("bar-"+monsterId);
        this.appeal = appeal;
    }
    let = speedBonus;
    updateSpeed(){
        this.speedBonus = this.base * this.baseMultiplier;
    }

    get getBaseSpeed(){
        return this.speedBonus;
    }
    get getSpeedBonus(){
        return this.baseSpeed;
    }
    get getBaseMultiplier(){
        return this.baseMultiplier;
    }
}

let speedStatistics = [new speedBonus("Arguu", 1, 3)];

function updateSpeedBonuses(){
    for(let i=0;i<speedStatistics.length;i++){
        speedStatistics[i].speedBonus = speedStatistics[i].baseSpeed * speedStatistics[i].baseMultiplier;
    }
}

function barProgresses(){
    for(let i=0;i<speedStatistics.length;i++){
        speedStatistics[i].barProgress = speedStatistics[i].barProgress + speedStatistics[i].speedBonus;
        speedStatistics[i].bar.style.width = speedStatistics[i].barProgress/10 +"%";
        if(speedStatistics[i].barProgress>=1000){
            speedStatistics[i].bar.style.width= 0;
            speedStatistics[i].barProgress = 0;
            money = money + speedStatistics[i].appeal * speedStatistics[i].amount;
        }
    }
}



function update(){
    updateSpeedBonuses();
    barProgresses();
}

setInterval(update, 100);
