var score = 0;



var rando = Math.floor(Math.random() * (4 - 0) +0);
var randoBox = "box"+ rando;



function gameBoard(){
	var row1 = document.createElement("div");
	row1.setAttribute("id","row1");
		for (var i = 0; i < 4; i++) {
			var boxs = document.createElement("div");
			boxs.setAttribute("id","box"+ i);
			row1.appendChild(boxs);
	};
	console.log(row1);
	document.getElementById("gameBoard").appendChild(row1);
	var ranBox = document.getElementById(randoBox);
	ranBox.setAttribute("style","background-color: black;");
	ranBox.addEventListener("click",function(){

		score ++;
		console.log(score);
		var element = document.getElementById("row1");
		element.parentNode.removeChild(row1);
		console.log(row1);
		gameBoard();
		return score;
		
		

	});
	

	
}
gameBoard();


function scoreBoard(){
	var scorey = document.createElement("ol");
	scorey.setAttribute("id","scorey");
	console.log(scorey);
		for (var i = 0; i < 5; i++) {
			var scoreyy = document.createElement("li");
			scoreyy.setAttribute("id","score"+ i);
			scorey.appendChild(scoreyy);
	};
	
	document.getElementById("scoreBoard").appendChild(scorey);
}

scoreBoard();