const person = { 
    name: 'Chris',
    age: 20,
    hobbies: ['games', 'cars', 'coding', 'drawing'],
};

for (let key in person) { 
    let value;

    // get the value
    value = person[key];

    console.log(key + " - " +  value); 
} 