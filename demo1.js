var saa = 'hello';
console.log(saa);
console.log(3 + 5);
console.log('a');
var pet1 = {
    name: 'Sally',
    age: 2
};
console.log(pet1);
var allpets = [
    { name: 'fred', age: 3 },
    { name: 'Julie', age: 6 },
    { name: 'Dylan', age: 5 }
];
console.log(allpets);
function showpet(thepet) {
    console.log("Name: " + thepet.name + " Age: " + thepet.age);
}
showpet(allpets[1]);
function findOldest(pets) {
    var biggestage = 0;
    var currentname = '';
    for (var i = 0; i < pets.length; i++) {
        if (pets[i].age > biggestage) {
            biggestage = pets[i].age;
            currentname = pets[i].name;
        }
    }
    return currentname;
}
var oldestname = findOldest(allpets);
