//make an array of 6 elements
var colorArr = [6]; getColors(6);
var pickedColor ;
//generate a random no from 0 to 5 and select that element from the color array
var selectedColor = colorArr[Math.floor(Math.random()*5 + 1)]; 
var squares=document.querySelectorAll(".square");
var span=document.querySelector("h1 span");
var h1=document.querySelector("h1");
var tex=document.querySelector("#text");
var but1=document.querySelector("#playAgain");
var easyBut=document.querySelector("#easy");
var hardBut=document.querySelector("#hard");

span.textContent= selectedColor;

//new colors event
but1.addEventListener("click",function(){
	getColors(6);
	for(var i=0;i<6;i++){
		squares[i].style.background = colorArr[i];
	}
	selectedColor = colorArr[Math.floor(Math.random()*5 + 1)]; 
	span.textContent= selectedColor;
});

//easy button event
easyBut.addEventListener("click",function(){
	getColors(6);
	for(var i=0;i<6;i++){
		squares[i].style.background = colorArr[i];
	}
	for(var i=3;i<6;i++){
		squares[i].style.display="none";
	}
	selectedColor = colorArr[Math.floor(Math.random()*2 + 1)]; 
	span.textContent= selectedColor;
	hardBut.classList.remove("selected");
	easyBut.classList.add("selected");
});

//hard button event
hardBut.addEventListener("click",function(){
	getColors(6);
	for(var i=0;i<6;i++){
		squares[i].style.background = colorArr[i];
	}
	for(var i=3;i<6;i++){
		squares[i].style.display="block";
	}
	selectedColor = colorArr[Math.floor(Math.random()*5 + 1)]; 
	span.textContent= selectedColor;
	easyBut.classList.remove("selected");
	hardBut.classList.add("selected");
});

//assign those random colors to the square boxes
for(var i=0;i<6;i++){
	squares[i].style.background = colorArr[i];
	squares[i].addEventListener("click",function(){
		//check whether the clicked color matches the selected color
		if(this.style.background===selectedColor){
		     changeAllSquare();
		     h1.style.background=selectedColor;
		     tex.textContent="Correct";
		     but1.textContent="play again!";
		     but1.addEventListener("click",function(){
		     	but1.textContent="NEW COLORS";
		     	h1.style.background="steelblue";
		     	tex.textContent="";
		     });
		}
	else{
			this.style.background = "#262626";
			tex.textContent="Try Again !";		
	}
	});
}


//change all square color to the selected color
function changeAllSquare(){
		for(var i=0;i<6;i++){
			squares[i].style.background = selectedColor ;
		}
}

//push random colors into the color array
function getColors(len){
	for(var i=0 ; i<len ; i++ )
	{
		colorArr[i]=generateColor();
	}
}

//ganerate 6 random pair of three numbers and push them to the color array
function generateColor(){
	var i,j,k;
	 i=Math.floor(Math.random()*255 + 1);
	 j=Math.floor(Math.random()*255 + 1);
	 k=Math.floor(Math.random()*255 + 1);

	 
	 return "rgb(" + i + ", " + j +", " + k + ")" ;
}

//generate a random no from 0 to 5 and select that element from the color array
/*function playAgain(){
	getColors(6);
	for(var i=0;i<6;i++){
		squares[i].style.background = colorArr[i];
	}
}*/