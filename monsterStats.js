class Monster{
    constructor(){
        this.name = "Empty";
        this.type = "Empty";
        this.income = "Empty";
        this.resource = "Empty";
        this.reproducibility = "Empty";
        this.blood = "Empty";
        this.rarity = "Empty";
        this.monsterId = "Empty";
        this.status = "Idle";
    }

    get getName(){
        return this.name;
    }
    get getMonsterId(){
        return this.monsterId;
    }
    get getStatus(){
        return this.status;
    }
    set setStatus(s){
        this.status = s;
    }
    

    show(){
        console.log(this.name + this.type + this.resource + this.rarity+this.income);
    }
}

class Arguu extends Monster{
    constructor(rarity){
        super(rarity);
        this.name = "Arguu";
        this.type = "Fire";
        this.resource = "Gunpowder";
        this.monsterId = 0;
        this.rarity = rarity;

        if(rarity == "Common"){
            this.income = 3;
            this.reproducibility = 1.12;
            this.blood = 43;
        }
        else if(rarity == "Uncommon"){
            this.income = 4;
            this.reproducibility = 1.18;
            this.blood = 54;
        }
        
        
    }
}
let arguuCommon = new Arguu("Common");
let arguuUncommon = new Arguu("Uncommon");
arguuCommon.show();
arguuUncommon.show();