function getReceipt(runningTotal,sizeTotal) {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i =0; i< sizeArray.length; i++){
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza"){
        sizeTotal = 10;
    } else if (selectedSize === "Small Pizza"){
        sizeTotal = 14;
    } else if (selectedSize === "Medium Pizza"){
        sizeTotal = 18;
    } else if (selectedSize === "Large Pizza"){
        sizeTotal = 22;
    }else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 26;
    } else if (selectedSize === "Mystery Pizza"){
        sizeTotal = 30;
    } else if (selectedSize === "Happy Special Pizza"){
        sizeTotal = 34;
    }
    runningTotal = sizeTotal = buyngTotal;
    console.log(selectedSize+"= $"+sizeTotal+".00");
    console.log("size text1:"+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1){
    var toppingTotal = 0;
    var selectedTopping = []
    var toppingArray =document.getElementsByClassName("toppings");
    for (var j = 0; j <toppingArray.length; j++) {
        if (toppingArray[j].checked){
            selectedTopping.push (toppingArray[j].value);
            console.log("slected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
			var toppingCount = selectedTopping.length;
			if (toppingCount>1) {
				toppingTotal = (toppingCount - 1);
			} else {
				toppingTotal = 0;
			}
			runningTotal = (runningTotal + toppingTotal + buyngTotal);
			console.log("total selected topping items: "+toppingCount);
			console.log(toppingCount+"topping - 1 free topping = "+"$"+toppingTotal+".00");
			console.log("topping text1: "+text1);
			console.log("Purchase Total: "+"$"+runningTotal+".00");
			document.getElementById("showText").innerHTML=text1;
			document.getElementById("totalPrice").innerHTML="</h3>Total: <strong>$"+
			runningTotal+".00"+"</strong></h3>";
        }
	}
};
function getVegetables(buyngTotal,text1){
            var vegetableTotal = 0;
            var selectedVegetable = []
            var vegetableArray =document.getElementsByClassName("vegetable");
            for (var k = 0; k <vegetableArray.length; k++) {
                if (vegetableArray[k].checked){
                    selectedVegetable.push (vegetableArray[k].value);
                    console.log("slected vegetable item: ("+vegetableArray[k].value+")");
                    text1 = text1+vegetableArray[k].value+"<br>";
			
    var vegetableCount = selectedVegetable.length;
    if (vegetableCount>1) {
        vegetableTotal = (vegetableCount - 1);
    } else {
        vegetableTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal + buyngTotal);
    console.log("total selected vegetable items: "+vegetableCount);
    console.log(vegetableCount+"vegetable - 1 free topping = "+"$"+vegetableTotal+".00");
    console.log("vegetable text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="</h3>Total: <strong>$"+
    runningTotal+".00"+"</strong></h3>";
		}
	}
};
