let money = 0;
let test2 = 0;
const mainButton = document.getElementById("mainButton");
mainButton.addEventListener("click",add_money);

function add_money(){
money = money+1;
update_money();
test();
}


function update_money(){
    var e = document.getElementById("moneyDisplay");
    e.innerHTML = "Money: "+money;
}

function test(){
    var e = document.getElementById("loader");
    test2 = test2 + 5;
    e.style.width = test2+"%";
}
