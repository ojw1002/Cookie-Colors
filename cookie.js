/*Cookie Color Script*/

function changeCookie() {

    //creating the 3 random values for rgb coloring
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);

    //creating the format of the rgb coloring
    var color = "rgb(" + x + "," + y + "," + z +")";
    
    //logs the color onto the console when button is clicked
    console.log(color);

    //gets the cookie element and styles the color
    document.getElementById('cookie').style.color=color;

    //styling the rgb badge (color + text)
    document.getElementById('colorTxt').style.background=color;
    document.getElementById('colorTxt').innerHTML=color;
}
