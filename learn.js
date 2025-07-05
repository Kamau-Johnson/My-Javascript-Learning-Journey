// NESTED OBJECTS............
// Setup
var myStorage = {
    "car" : {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); // Output: maps

// Exercise.....
var schoolPrisonStorage = {
    "school": {
        "student": "Johnson",
        "class": "8",
        "staffroom": "to the west"
    },
    "prison": {
        "in-mate": "Mark",
        "cell": "to the top building",
        "guards": "in black uniform"
    }
};
var infrastructureContents = schoolPrisonStorage.prison["cell"];
console.log(infrastructureContents); // Output: to the top building

// NESTED ARRAYS.......
var myUtensils = [
    {
        plates: "black",
        lists: [
            "plastic",
            "glass"
        ]
    },
    {
        cups: "glass",
        lists: [
            "nylon tea",
            "milk tea"
        ]
    }
];
var myRack = myUtensils[1].lists[0];
console.log(myRack); // Output: nylon tea

// Exercise.....
var myGames = [
    {
        adventure: "GTA",
        lists: [
            "Gta 5",
            "Gta San A"
        ]
    },
    {
        Multiplayer: "Racing",
        lists: [
            "Blur"
        ]
    }
];
var myHobby = myGames[0].lists[1];
console.log(myHobby); // Output: Gta San A

