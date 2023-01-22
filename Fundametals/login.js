function login(input) {
    let username=input[0];
    let password="";
    for(let i = username.length - 1; i >=0; i--){
        password+=username[i]
        }
        let inccorectPasswordCount=0;

        for(i=1; i < input.length; i++){
            let tempPass=input[i];
            if(tempPass===password){
                console.log(`User ${username} logged in.`);
            }
            else{
                inccorectPasswordCount++;
                if(inccorectPasswordCount === 4){
                    console.log(`User ${username} blocked!`)
                break;
            }
                console.log("Incorrect password. Try again.");
            }
        }
}
login(['Acer', 'login', 'go','let me in', 'recA'])