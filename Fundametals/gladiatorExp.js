function gladiator(lostFight, helmPrice, swordPrice, shieldPrice, armorPrice ) {
    let sum= 0;
    for(let i=1; i<=lostFight; i++){
        if(i % 2 === 0){
        sum += helmPrice;
        }
        if(i % 3 === 0){
            sum += swordPrice;
        }
        if(i % 6 === 0){
            sum += shieldPrice;
        }
        if(i % 12 === 0){
            sum += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiator(23,12.5,21.5,40,200)