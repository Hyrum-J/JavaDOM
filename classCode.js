class Rocket{

    constructor(

        fuelType,

        weight,

        power

    ){

        this.fuelType = fuelType;

        this.weight = weight;

        this.power = power;

    };

    launch(){

        console.log("Launch sequence started");

        alert("Warning! Launch Sequence Started");

        return true;

    };

    refuel(){

        console.log("Refueling has begun");

        alert("Refueling has Begun");

        return true;

    };

    detachThruster(thrusterID){

        console.log("detaching the thruster");

        alert("Thruster " + this.thrusterID + " is being detached");

        return true;

    };

};

class Mission{

    constructor(

        objective,

        O2levels,

        launchdateday,

        launchdatemonth,

        launchdateyear,

        spaceCraft,

        numOfAstronauts,

    ){

        this.objective = objective;

        this.O2levels = O2levels;

        this.launchdateday = launchdateday;

        this.launchdatemonth = launchdatemonth;

        this.launchdateyear = launchdateyear;

        this.spaceCraft = spaceCraft;

        this.numOfAstronauts = numOfAstronauts;

    };

    displayMissionParameters(){

        alert("The Spacecraft " + this.spaceCraft + " will launch on " + this.launchdateday + "/" + this.launchdatemonth + "/" + this.launchdateyear + " with O2 levels of " + this.O2levels + "%");

    };

    launch(){

        console.log("launch sequence started");

        alert("launch sequence has begun");

    };

};

function launchFall(){

    console.log("launchFall started");

    fallLaunch.launch();

};

function displayFall(){

    console.log("get Displayed");

    fallLaunch.displayMissionParameters();

};

function launchSpring(){

    console.log("launchSpring started");

    springLaunch.launch();

}

function displaySpring(){

    console.log("get Displayed");

    springLaunch.displayMissionParameters();

};