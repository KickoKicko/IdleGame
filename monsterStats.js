class Monster{
    constructor(){
        this.name = "Empty";
        this.type = "Empty";
        this.income = "Empty";
        this.resource = "Empty";
        this.reproducibility = "Empty";
        this.blood = "Empty";
        this.rarity = "Empty";
    }

    show(){
        console.log(this.name + this.type + this.resource + this.rarity);
    }
}

class Arguu extends Monster{
    constructor(rarity, income, reproducibility, blood){
        super(rarity, income, reproducibility, blood);
        this.name = "Arguu";
        this.type = "Fire";
        this.income = income;
        this.resource = "Gunpowder";
        this.reproducibility = reproducibility;
        this.blood = blood;
        this.rarity = rarity;
    }
}
let arguuCommon = new Arguu("Common" ,3 ,1.12 ,43);
let arguuUncommon = new Arguu("Uncommon" ,4 ,1.18 ,54);
arguuCommon.show();
arguuUncommon.show();