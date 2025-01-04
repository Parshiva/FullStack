

console.log("hello from ",this);

const captainAmerica =
{
    name: "Steve Rogers",
    isAvenger: true,
    address: {
      city: "brooklyn",
      state: "new york",
    },
    movies: ["first avenger", "civil war", "infinity war"],
    saveTheWorld: function () {
      console.log("On the way ! consider it done", this);
    },
}

//the below line this will be pointing to calling object
captainAmerica.saveTheWorld();

function abc() {
    console.log("Inside abc", this);
  }
  
  //this mentioned in the abc() function will be pointing to window object
  abc();

  const ThreeIdiots = {
    
    moviename : "3Idiots" ,
    Actors : ["Amir khan" ,"Madhavan","Chatur"],

    AllIsWell : function()
    {
        console.log("All is Well..!", this);

        const Virus = () =>{console.log("Viru Sahastrabuddi",this);}
        Virus();
    }
  };

console.log(ThreeIdiots.Actors);
ThreeIdiots.AllIsWell();


//4. arrow function doesnt have this, how does this in this context
// it refers to parent context this
const cde = () => {
    console.log("arrow function", this);
  };
  
  cde();