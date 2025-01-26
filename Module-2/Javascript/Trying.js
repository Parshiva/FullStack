// let users = [{
//     name: "Rajneesh",
//     age: 34,
//     address: {
//         local: "22 Alaknanda",
//         city: "Dehradun",
//         state: "UK",
//     },
//     orders: [{
//         id: 1,
//         name: "GOT Book Series"
//     }],
// },
// {
//     name: "Bhavesh",
//     age: 37,
//     address: {
//         local: "48 DT Row",
//         city: "Hyderabad",
//         state: "AP",
//     },
// }
// ];

// let userObject = {
//     name: "Pandi",
//     age: 27,
//     address: {
//       local: "KuvempuNagar",
//       city: "Tumkur",
//       state: "Karnataka",
//     },
//   };

//   let existingindex = users.findIndex((user) => user.name== userObject.name);

//   console.log(existingindex);

//   if (existingindex ===-1)
//   {
//     let newUser = {...userObject , orders: {id: 1 , item : "item-1" }};
//     users.push(newUser);
//   }

//   let exisitingUser = users[1];
//   console.log(exisitingUser);

//   console.log(users);



function flattenArray(array)
{
    let flattenedArray=[];
    for (let i=0;i<array.length ;i++)
    {
    let element = array[i];
    if (Array.isArray(element))
    {
        //let temp = flattenArray(element);
        flattenedArray.push(...element);
    }
    else
    {
        flattenedArray.push(element);
    }
    }
    return flattenedArray;
}


let array = [1,2,3,[4,5],[6,7,8,[9,10,11]]];
console.log(array);
let result=flattenArray(array);
console.log(result)