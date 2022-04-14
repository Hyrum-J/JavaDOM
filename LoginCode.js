function checkcreds(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var fullname = fname + " " + lname;
    var bnum = document.getElementById("bnumber").value;
    var fulllength = fullname.length;
    if(fulllength > 20 || fulllength < 5){
        document.getElementById("loginstatus").innerHTML = "Invalid Entry. Please Try Again";
    }else if(bnum > 999 || bnum < 1){
        document.getElementById("loginstatus").innerHTML = "Invalid Entry. Please Try Again";
    }else{
        document.getElementById("loginstatus").innerHTML = "Access Granted, Welcome " + fullname;
        alert("Access Granted, Welcome " + fullname);
        location.replace("./UAT.html");
    };
};