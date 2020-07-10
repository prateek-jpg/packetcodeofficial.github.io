var container=document.querySelector("#container");
var h1=document.querySelector("h1");
var colors=getarray(6);
var pickcolor=colorpick();
var displaycol=document.querySelector("#disp");
displaycol.textContent=pickcolor;
var cont=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var resetbut=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
	h1.style.background="steelblue";
	hard.classList.remove("selected");
	easy.classList.add("selected");
	colors=getarray(3);
	pickcolor=colorpick();
	displaycol.textContent=pickcolor;
	for(var i=0;i<6;i++)
	{
		if(i<3)
		cont[i].style.background=colors[i];
	else
		cont[i].style.display="none";
	}
	
});
hard.addEventListener("click",function(){
	
	h1.style.background="steelblue";
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors=getarray(6);
	pickcolor=colorpick();
	displaycol.textContent=pickcolor;
	for(var i=0;i<colors.length;i++)
	{
		if(i>=3)
			cont[i].style.display="block";
		cont[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	
});

resetbut.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors=getarray(6);
	pickcolor=colorpick();
	displaycol.textContent=pickcolor;
	for(var i=0;i<colors.length;i++)
	{
		if(i>=3)
			cont[i].style.display="block";
		cont[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	resetbut.textContent="NEW COLOR";
	
});
for(var i=0;i<cont.length;i++)
{
	cont[i].style.backgroundColor=colors[i];
	
	cont[i].addEventListener("click",function(){
	var clickedcol=this.style.backgroundColor;
	if(clickedcol===pickcolor)
	{
		message.textContent="Correct";
		for(var j=0;j<cont.length;j++)
		{
			cont[j].style.background=clickedcol;
		}
		h1.style.background=clickedcol;
		resetbut.textContent="PLay Again";
	}
	else
	{this.style.backgroundColor="#232323";
      message.textContent="try again";
	}
	});
}

function colorpick(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
	
}
function getarray(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		
		arr.push(random());
	}
	
	return arr;
	
	
}
function random(){
	var a=Math.floor(Math.random()*255);
		var b=Math.floor(Math.random()*255);
		var c=Math.floor(Math.random()*255);
		return "rgb(" + a + ", " + b + ", " + c +")";
	
}