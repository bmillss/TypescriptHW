interface Mountain {
    name:string;
    height:number;
}

let mountains:Mountain[] = [

    {name:'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];
console.log(mountains);

function findNameOfTallestMountain(mountains: Mountain[]):string{

    let tallestmountain:string = '';
    let heightoftallest:number = 0;
    for (let i = 0; i<mountains.length; i++)
    {
        if (mountains[i].height > heightoftallest)
        {
            heightoftallest = mountains[i].height;
            tallestmountain = mountains[i].name;
        }
    }
    return tallestmountain;
}

let findtallest:string = findNameOfTallestMountain(mountains);

console.log(findtallest);