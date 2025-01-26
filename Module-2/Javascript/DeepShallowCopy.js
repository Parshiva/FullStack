const Obj1 =
{
    name :"Parashiva",
    age : 28 ,

    Address :
    {
        city : "Tumkur",
        state: "Karnataka"
    }

}


//shallow copy

let Obj2=Obj1;
let Obj3 = {...Obj1};
let Obj4= Object.assign({},Obj1);
Obj2.age=30;

// console.log(Obj1);
// console.log(Obj2);
// console.log(Obj3);
// console.log(Obj4);

//deep copy

let obj5 = JSON.parse(JSON.stringify(Obj1));
obj5.name="Pandi";
console.log(Obj1);
console.log(obj5);