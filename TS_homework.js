var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
console.log(mountains);
function findNameOfTallestMountain(mountains) {
    var tallestmountain = '';
    var heightoftallest = 0;
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height > heightoftallest) {
            heightoftallest = mountains[i].height;
            tallestmountain = mountains[i].name;
        }
    }
    return tallestmountain;
}
var findtallest = findNameOfTallestMountain(mountains);
console.log(findtallest);
