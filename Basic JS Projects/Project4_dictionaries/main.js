// var Whatever="I said: \"Cau baby!\"" + "...and added a backslash like that \\", next_whatever=""Hello"
// document.write(Whatever);

// varA = "This is the beginning of the string";
// varB = " and this is the end of the string.";
// document.write(varA + varB);
// document.write("<br/>" + "<br/>")
// document.write(33**2);
// document.write("<br/>" + "<br/>")
// alert("Done!");

function my_Dictionary() {
    var Maths_Oper= {
        Addition: "+",
        Subtraction: "-",
        Multiplication: "*",
        Division: "/",
        Power: "**"
    };
    delete Maths_Oper.Addition;
    document.getElementById("Dictionary").innerHTML=Maths_Oper.Addition
};
document.write("<br/>" + "<br/>");
document.write(typeof 0/0);
document.write("<br/>" + "<br/>");
document.write(2e310);
document.write("<br/>" + "<br/>");
document.write(10>2,  " and ", 10<2);
document.write("<br/>" + "<br/>");
document.write(typeof (15 + "5"));
document.write("<br/>" + "<br/>");
document.write(15==5);
document.write("<br/>" + "<br/>");
document.write("pigeon"==="crow");
document.write("pigeon"==="pigeon");
document.write("NaN"===NaN);
document.write(5==="7");
document.write("<br/>" + "<br/>");
document.write(5>2 && 7>3, 5<2 || 7>3 , !5<2);
document.write("<br/>" + "<br/>");

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride= (Height <152) ?"You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
