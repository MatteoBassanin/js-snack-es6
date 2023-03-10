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
console.log(...classifica)





function randomNumberGenerator(min,max){
    const randomNumber = Math.floor(Math.random()*(max - min + 1))+ min;
    return randomNumber;
}





for( let i = 0 ; i < classifica.length ; i++){
    classifica[i].punti = randomNumberGenerator(1,50);  
    classifica[i].falli = randomNumberGenerator(1,50);
   

}


// let nuovaClassifica = classifica.map(({ nome, punti, falli }) => ({ nome, punti ,falli }));



// console.log(nuovaClassifica)   


const {nome, punti, falli} = classifica; 

console.log(nome, punti, classifica);






