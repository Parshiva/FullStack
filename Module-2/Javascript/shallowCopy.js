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

let Obj2=Obj1;

let Obj3 = {...Obj1};

Obj2.age=30;

console.log(Obj1)
console.log(Obj2)
console.log(Obj3);