// array reduce methods in JavaScript.

// using reduce find the total of the pricing array.
// using reduce find the minimum price from the price array.
// using reduce find the maximum price from the price array.

// also find the sum of total using for of loops.


const itemPrices = [1450,782,783,1999,1232,300,299,919,599,1599];

// finding the total to item prices using for of loop/.
/*
let total  = 0; 

for(values of itemPrices){
   total += values;
};
console.log(total)
*/


// lets do this with reduce.
// reduce used two callbacks parameters one is accumelator and second is current value.

itemPrices.reduce((total, price) => {
    return total + price;
});

// lets find the min price from the above list.
 
 itemPrices.reduce((minValue, price) => {
     if(minValue < price){
         return minValue;  // 299
     }
     return price;
 });
 
 
 
 itemPrices.reduce((maxValue, price) => {
     if(maxValue > price){
         return maxValue; // 1999
     }
     return price;
 });


 let movies = [
    
    {
        title : "Superman",
        score : 91
    },
    
    {
        title : "Batman",
        score : 95
    },
    
    {
        title : "CaptinAmerice",
        score : 93
    },
    
    {
        title : "Justice League",
        score : 98
    }
    
    ]
    
    // find the best movie using filter and reduce.
    
    movies.filter((value) => {
        return value.score > 94;
    });
    
    // lets do this using reduce.
    
 let topRated = movies.reduce((bestMovie, currMovie) => {
        if(bestMovie.score  > currMovie.score){
            return bestMovie;
        }
        return currMovie;
    });
    
console.log(topRated);
    

// we can add a second arrgument within the reduce method and that arrgument will be treated as a inital value from where our reduce methods will be started.

const evenNums = [2,4,6,8,10];
evenNums.reduce((total, currNum) => total + currNum , 20);



