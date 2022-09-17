var Animals = [ "Monkey", "Cat", "Giraf", "Elepahnt", "Snake",];
var Content ="";
var Y;
function for_Loop() {
    for (Y= 0; Y <Animals.length; Y++) {
        Content += Animals[Y] + "<br>";
    }
    document.getElementById("List_of_Animals").innerHTML = Content;
}

function cat_pics(){
    var Cat_Picture =[];
    Cat_Picture[0] = " sleeping";
    Cat_Picture[1] = " playng";
    Cat_Picture[2] = " eating";
    Cat_Picture[3] = " purring";
    document.getElementById("Cat").innerHTML = "In thi picture, the cat is" +
        Cat_Picture[2]+".";
    
}