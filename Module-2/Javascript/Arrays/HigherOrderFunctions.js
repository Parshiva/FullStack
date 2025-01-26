const names=['Loksha' , 'Anju' ,'Pavan'];

// names.forEach(function(e)
// {
//     console.log(e);
// }
// );

names.forEach((e)=>{console.log(e)} );

//Polyfills for foreach

Array.prototype.MyforEach = function(cb)
{
    for (let i=0;i<this.length;i++)
    {
        cb(this[i]);
    }   
}

function callback(e)
{
    console.log(e)
}

names.MyforEach(callback);


//map method

const numArray=[1,2,3,4,5];

const squaredArray = numArray.map((n) =>{return n*n});

console.log("num Array --> ",numArray);
console.log("Squared Array --> ",squaredArray);

//polyfill for map

Array.prototype.Mymap = function(cb)
{
    let result=[];

    for (let i=0;i<this.length;i++)
    {
        result.push(cb(this[i]));
    }

    return result;
}

function mapCallback(n)
{
    return n*n;
}

let mapPolyfillArray = numArray.Mymap(mapCallback);

console.log("mapPolyfillArray --> ",mapPolyfillArray);


//filter method

let filterArray = [1,2,3,4,5,6,7,8];

let resultFilter = filterArray.filter((num)=>{return num%2==0});

console.log("resultFilter Array -->", resultFilter);

//polyfill for filter functions

Array.prototype.myfilter = function(cb)
{
    let result=[];

    for (let i=0;i<this.length;i++)
    {
        if (cb(this[i]))
        {   
            result.push(this[i]);
        }
    }
    return result;
}

function filtercallback(num)
{
    return (num%2==0);
}

let polyfillFilterArray = filterArray.myfilter(filtercallback);

console.log("polyfillFilterArray --> ",polyfillFilterArray);