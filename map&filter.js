// filter and map array methods.

let movies = [
    {
        title : "Mirzapur - 1",
        creator : "Amazon prime",
        rating : 8.9
    },
    
    {
        title : "the family man",
        creator : "Netflix",
        rating : 8.4
    },
    
    {
        title : "Gangs of wasipur",
        creator : "Netflix",
        rating : 8.8
    },
    
    {
        title : "Mirzapur - 2",
        creator : "Amazon prime",
        rating : 8.9
    }
    
    ];

// prints the title of movies using map.

movies.map((value) => {
    return value.title.toUpperCase();
});


// prints all the rating of movies which are > 8.5;

movies.filter((value) => {
    return value.rating  > 8.5;
});
