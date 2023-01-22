function excellent(grade) {
    if (grade>=5.50 && grade<=6.00){
        console.log(`Excellent`);
    }
    else if(grade<=5.49 && grade>=2.00){
        console.log(`Not excellent`);
    }
    else{
        console.log("Wrong input");
    }
}

excellent(1.49)