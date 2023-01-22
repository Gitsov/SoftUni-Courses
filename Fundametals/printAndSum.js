function printAndSum(start, end){
    let buffNum= "";
    let sum=0;
    for (let i = start; i <= end; i++){
        buffNum+= i + " ";
        sum+=i;
    }  
    console.log(buffNum.trim());
    console.log("Sum: " + sum);

}
printAndSum(5,10)
console.log("--------------------------")
printAndSum(50,60)