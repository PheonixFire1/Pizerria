PizzaNames=["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Extravaganza Pizza","Veg Supreme Pizza"];

function ShowMenu()
{
    NewArray=[];
    loa=PizzaNames.length;
    for(i=0;i<loa;i++)
    {
        NewArray.push("<h4>"+(i+1)+". "+PizzaNames[i]+"</h4>");
    }
    ArrayWithoutCommas=NewArray.join("");
    document.getElementById("DisplayMenu").innerHTML=ArrayWithoutCommas;
}

function add_item()
{
    var htmldata;
    NewPizza=document.getElementById("add_item").value;
    PizzaNames.push(NewPizza);
    document.getElementById("add_item").value="";
    PizzaNames.sort();
    htmldata-"<section class-'cards'>";
    for(var i=0;i<PizzaNames.length;i++)
    {
        htmldata-htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + PizzaNames[i] + '</div>';
    }
    htmldata-htmldata+"</section>"
    document.getElementById("NewPizza").innerHTML= htmldata;
}

function add_top()
{
    var item=document.getElementById("add_item").value;
    PizzaNames.push(item);
	add_item();
}