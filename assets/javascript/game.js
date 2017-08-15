var randomNum;
var userScroe=0;
var userWin=0;
var userLoss=0;
var attemp=0;
function onLoadFun()
{

		event.preventDefault();
		attemp=0;
		randomNum=0;
		userScroe=0;
		$('body').click();
		console.log(attemp);

	var listOfGifs= ['btn-primary','btn-success','btn-info','btn-danger'];
	 var btns='';
	for(l in listOfGifs )
	{
	
		var num=l+1;
		var numValu=listOfGifs[l];
		var  randm= getRandomInt(1, 12);
		 btns += '<button type="button" id="crystl_'+num+'" onclick="giveScore('+randm+' , this);" class="btn '+numValu+'">Crs-'+num+'</button>';
		

	}
	$('#Btns').html(btns);
	randomNum=getRandomInt(19, 120);
	$("#random").text(randomNum)	

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function giveScore(num, obj)
{
$(obj).attr('disabled',true);
	console.log(attemp +' -- ' +  num);
	attemp++;
	userScroe =userScroe + num;	
	$("#totscore").text(userScroe);
	if(attemp==4 && userScroe <= randomNum ){
		userWin =userWin+1;
		$('#tWins').text(userWin);
	
var r = confirm("Wow you win, Play Again!");
if (r == true) {
		onLoadFun();
} else {

}


		
	}
	if(attemp==4 && userScroe > randomNum)
	{
		userLoss=userLoss+1;
		$('#tLoss').text(userLoss);
		var r = confirm('Ummmm you Loss, Play Again!');
if (r == true) {
		$('.btn').attr('disabled',false);
		onLoadFun();
} else {

}



	
		
	}
}
