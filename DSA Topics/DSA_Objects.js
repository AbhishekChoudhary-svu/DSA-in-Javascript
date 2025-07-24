// shallow Copy

const person = { name : "Abhishek"}
// const person2 = person
// in Shallow copy if i change person2 name it will also reflect in the person obj
// person2.name= "vivek"

// console.log(person) /// result = name : "vivek"

// Deep Copy 

// const person2 = Object.assign({}, person)
// // if i cahnge person2 then the person name will not change
// person2.name= "vivek"

// console.log(person)  /// result = name : "Abhishek"



// seal Method

// let obj = { value: 10 };
// Object.seal(obj);
// obj.value = 20;      // This works, value is updated.
// delete obj.value;    // Does not work, property cannot be deleted.
// obj.newKey = 30;     // Does not work, cannot add new properties.


// freeze method

// let obj = { value: 10 };
// Object.freeze(obj);
// obj.value = 20;      // Does not work, value stays at 10.
// delete obj.value;    // Does not work.
// obj.newKey = 30;     // Does not work.


function areObjectsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
// console.log(areObjectsEqual({ x: 5 }, { x: 5 })); // true


const data = {
    id:1,
    name:["P1","P2"],
    next:{
            id:2,
        name:["P1","P3"],
        next:{
                    id:3,
                name:["P2","P3"],
                next:{
                            id:4,
                        name:["P1","P3"],
                        next:null
                }
        }
    }
}

function countAllPlayers(data, result) {
    if (data === null) return;
   
    for (var i = 0; i < data.name.length; i++) {
        var player = data.name[i];
        if (result[player] === undefined) {
            result[player] = 1;
        } else {
            result[player] = result[player] + 1;
        }
    }
    
    countAllPlayers(data.next, result);
}

var playerCounts = {};
countAllPlayers(data, playerCounts);

console.log(playerCounts);
