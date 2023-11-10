// var Whatever="I said: \"Cau baby!\"" + "...and added a backslash like that \\", next_whatever=""Hello"
// document.write(Whatever);

varA = "This is the beginning of the string";
varB = " and this is the end of the string.";
document.write(varA + varB);
document.write("<br/>" + "<br/>")
document.write(33**2);
document.write("<br/>" + "<br/>")
alert("Done!");

function ChangeTextFunction() {
    var txt="You've changed the text by clicking!";
    document.getElementById("Button Text").innerHTML=txt;
};
function ConcatFunction() {
    var txt="I'm learning a lot,";
    txt+=" all right";
    document.getElementById("Concatenate").innerHTML=txt;
};
