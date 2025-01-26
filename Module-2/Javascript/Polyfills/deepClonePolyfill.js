
const deepClone = (object) =>
{
    let clonedObject = Array.isArray(object)?[]:{};

    for (let prop in object)
    {
        if (typeof object[prop]==="object")
        {
            clonedObject[prop] = deepClone(object[prop]);
        }
        else
        {
            clonedObject[prop]=object[prop];
        }
    }

    return clonedObject;
}

// const Obj =
// {
//     name : "Shiva",
//     age : 30
// }

// console.log(typeof Obj=="Object");

// const arr=[1,2,3,4,5]

// console.log(typeof arr);

const Object = 
{
    name : "parashiva",
    age:28 , 
    address : 
    {
        city : "Tumkur",
        state : "karnataka"
    }
};

const Object1 = deepClone(Object);

Object1.address.city="Kyathsandra";
console.log(Object);
console.log(Object1);