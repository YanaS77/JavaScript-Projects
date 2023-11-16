// var Whatever="I said: \"Cau baby!\"" + "...and added a backslash like that \\", next_whatever=""Hello"
// document.write(Whatever);

// varA = "This is the beginning of the string";
// varB = " and this is the end of the string.";
// document.write(varA + varB);
// document.write("<br/>" + "<br/>")
// document.write(33**2);
// document.write("<br/>" + "<br/>")
// alert("Done!");

function to_the_power(n,x) {
    n=2;
    x=3;
    var result=n**x;
    document.getElementById("Maths").innerHTML=n +"^" +x + "= "+ result;
};
function modulus(n,m) {
    n=22;
    m=3;
    var result=n%m;
    document.getElementById("Modulus").innerHTML= "When you divide " + n + " by "+m + ", you have a remainder of " + result;
};
function all_in_one(n,m) {
    // n=22;
    // m=3;
    s=Math.trunc(Math.random()*100)
    var result=-s--;
    document.getElementById("Other").innerHTML= "Your random is " + s + " and its negative is "+(-s) + " and decrement is " + result;
};