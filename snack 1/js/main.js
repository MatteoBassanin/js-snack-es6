let bikeArray = [
    {
        name : "yellow",
        weight : 2,
    },

    {
        name : "red",
        weight : 6,
    },


    {
        name : "black",
        weight : 5,
    },

    {
        name : "blue",
        weight : 1,
    }
]




let sampleBike = bikeArray[0].weight;
console.log(sampleBike);


let lighterBike;


for ( let i = 0; i < bikeArray.length ; i ++){
    if(bikeArray[i].weight < sampleBike){
        lighterBike = bikeArray[i];
        
    }
}


let DomlighterBike = document.getElementById("bike_result");
DomlighterBike.innerHTML = `la bici più leggera è ${lighterBike.name} con un peso di ${lighterBike.weight} kg` ;





