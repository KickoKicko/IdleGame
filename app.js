let money = 0;
const mainButton = document.getElementById("mainButton");
mainButton.addEventListener("click",add_money);

function add_money(){
console.log("fff");
money = money+1;
console.log(money);
update_money();
}


function update_money(){
    var e = document.getElementById("moneyDisplay");
    e.innerHTML = money;
}
