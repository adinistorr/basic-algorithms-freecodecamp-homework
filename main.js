// Problem 1: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// Problem 2: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0];
    }
    if (strokes <= par - 2) {
        return names[1];
    }
    if (strokes === par - 1) {
        return names[2];
    }
    if (strokes === par) {
        return names[3];
    }
    if (strokes === par + 1) {
        return names[4];
    }
    if (strokes === par + 2) {
        return names[5];
    }
    if (strokes >= par + 3) {
        return names[6];
    }
}

golfScore(5, 4);


// Problem 3: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--
            break;
    }

    return `${count} ${count > 0 ? 'Bet' : 'Hold'}`
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// Problem 4: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    const person = contacts.find(contact => contact.firstName === name);

    if (!person) {
        return 'No such contact';
    }
    return person.hasOwnProperty(prop) ? person[prop] : 'No such property';
}

lookUpProfile('Kristian', 'potato');


// Problem 5: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(object, id, prop, value) {
    if (prop !== 'tracks' && value) {
        object[id][prop] = value;
    }
    if (prop === 'tracks' && !object[id].tracks) {
        object[id].tracks = [value];
    }
    if (prop === 'tracks' && value) {
        object[id].tracks.push(value);
    }
    if (value === '') {
        delete object[id][prop];
    }
    return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');


// Problem 6: Convert Celsius to Fahrenheit
function convertToF(celsius) {
    return (celsius * (9 / 5) + 32)
}

convertToF(30);


// Problem 7: Reverse a String
function reverseString(str) {    
    return [...str].reverse().join('');
}

reverseString('hello!');


// Problem 8: Factorialize a Number
const factorialize = ((num) => num <= 1 ? 1 : num * factorialize(num - 1));

factorialize(5);


// Problem 9: Find the Longest Word in a String
function findLongestWordLength(str) {
    let longestWord = str.split(' ').reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, '');
    return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");



// Problem 10: Return Largest Numbers in Arrays
function largestOfFour(arrays) {
    const maxOfArrays = [];

    for (const array of arrays) {
        maxOfArrays.push(Math.max(...array));
    };

    return maxOfArrays;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Problem 11: Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {

    let repeatString = '';
    for (let i = 0; i < num; i++) {
        repeatString += str;
    }
    return repeatString;
}

repeatStringNumTimes('abc', 3);


// Problem 12: Title Case a Sentence
function titleCase(str) {
    const newStr = str.toLowerCase().split(' ');

    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }

    return newStr.join(' ');
}

titleCase("I'm a little tea pot");
  


// Problem 13: Slice and Splice
function frankenSplice(arr1, arr2, n) {

    const newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
    return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
  


// Problem 14: Where do I Belong
function getIndexToIns(arr, num) {

    arr.push(num);
    arr.sort((a, b) => a - b);

    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);



// Problem 15: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
function steamrollArray(arr) {

    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
