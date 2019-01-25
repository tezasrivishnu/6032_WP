// var sec = "hello";
// var comment = [];
// var name = [];
// var val;
// var val1;
// function validate() {
//     var value3 = document.getElementById('key').value;
//     if (value3!=sec) {
//         alert("Secret Key didn't match")
//         document.getElementById("hide").style.display = 'block';
//     }else{
//         alert("Success!");
//         val = document.getElementById('comment').value;
//         val1 = document.getElementById('comment').value;
//         comment.push(val);
//         name.push(val1);
//     }
//     var ele = document.getElementById("com");
//     var text = document.createTextNode(val);
//     ele.appendChild(text);
//     var text1 = document.createTextNode(val1);
//     ele.appendChild(text1);
// }

var comment = new Array();
var names = new Array();
var key = "hello";
var i = 0;
function validate() {
    var com = document.getElementById('key').value;
    if (key!=com) {
        comment = new Array();
        names = new Array();
        i=0;
        alert("Secret Key didn't match")
    }else{
        i++;
        comment[i] = document.getElementById('comment').value;
        names[i] = document.getElementById('name').value;
        alert("Success!");
    }
    console.log(comment[i]);
    console.log(names[i]);
    var j;
    for(var j = 0; j<comment.length; j++){
        document.getElementById("com").innerHTML = 
        "<h2>"+comment[j]+"</h2>"+"<p>"+names[j]+"</p>";
        // var temp = document.getElementById("com");
        // var te = document.createTextNode(comment[i]);
        // var te1 = document.createTextNode(names[i]);
        // temp.appendChild(te);
        // temp.appendChild(te1);
        // console.log(comment[i]);
        // console.log(names[i]);
    }
}




