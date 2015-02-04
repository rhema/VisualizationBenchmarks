var seed = 1;


//http://stackoverflow.com/questions/521295/javascript-random-seeds
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

//Returms some bamds based on a timeline
function getData(time_scale)
{
	var ret = [];
	for(var i=0;i<time_scale; i+=1)
	{
		//Just add maybe by time.
		if(random() > .5)
		{
			ret.push({t:i,v:Math.floor(random()*10)});
		}
	}	
	return ret;
}
