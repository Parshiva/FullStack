const Reciepies =
{
    name : "paluv" ,
    type : "breakfast",

    petersTeam : 
    function ()
    {
        // console.log(`I am having ${param1} for ${param2}`);
        console.log(`I am having ${this.name} for ${this.type}`);
    }
}

const lunch =
{
    name:"Rice and Samber",
    type: "lunch"
}

const supper =
{
    name:"Mudde and Upsaru",
    type: "Ratri Uta"
}

Reciepies.petersTeam();

Reciepies.petersTeam.call(lunch);
Reciepies.petersTeam.call(supper);


console.log("Apply Method ");
Reciepies.petersTeam.apply(lunch);
Reciepies.petersTeam.apply(supper);