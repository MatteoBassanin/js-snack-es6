

const classifica = [
    {
        nome : "roma",
        punti : 0,
        falli : 0,
    },

    {
        nome : "napoli",
        punti : 0 ,
        falli : 0 ,

    },

    {
        nome : "milan",
        punti : 0,
        falli : 0 ,
    }
]

console.log(classifica)



for( let i = 0 ; i < classifica.length ; i++){
    classifica[i].punti = randomNumberGenerator(1,50);  
    classifica[i].falli = randomNumberGenerator(1,50);
   

}


function randomNumberGenerator(min,max){
    const randomNumber = Math.floor(Math.random()*(max - min + 1))+ min;
    return randomNumber;
}







// let nuovaClassifica = classifica.map(({ nome, punti, falli }) => ({ nome, punti ,falli }));



// console.log(nuovaClassifica)   





for (let i = 0 ; i < classifica.length ; i++){
    const {nome, punti, falli} = classifica[i]; 
    console.log(nome, punti, falli);

}







