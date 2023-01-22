function rounding(number, precision) {
    if (precision>15){
        precision=15;
    }
    console.log(parseFloat(number.toFixed(precision)));
}

rounding(3.143421314134134134134134,2)
rounding(10.5,3)