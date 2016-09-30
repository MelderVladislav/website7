window.onload = loader;


function loader()
{
    var Counter = 0;
   
    var PictureMassiv = ["/Resourses/photos/001.jpg", 
	"/Resourses/photos/002.jpg", "/Resourses/photos/101.jpg", 
	"/Resourses/photos/102.jpg", "/Resourses/photos/201.jpg", "/Resourses/photos/202.jpg"];
	 /*
    var PictureMassiv = ["Resourses/photos/001.jpg", 
	"Resourses/photos/002.jpg", "Resourses/photos/101.jpg", 
	"Resourses/photos/102.jpg", "Resourses/photos/201.jpg", "Resourses/photos/202.jpg"];*/
	 var ImgNumber = PictureMassiv.length;
    var Image = document.getElementById("logoImg");
    Image.src = PictureMassiv[Counter];
    var leftBtn = document.getElementById("LeftButton");
    var rightBtn = document.getElementById("RightButton");
    var isBig=false;
	rightBtn.addEventListener("click", NextPhoto, false)
    leftBtn.addEventListener("click", PreviousPhoto, false)
	Image.addEventListener("click",IncreasePhoto2,false);
	document.body.addEventListener("click", ReducePhoto, false);
	document.addEventListener("click", ReducePhoto2, false);
	var currentWidth=400;
	var currentHeight=270;
	var usualRel=currentHeight/currentWidth;
	var velocity=3;
	var timer;
	function ReducePhoto2(e)
	{
		if (e.source!=Image)
			ReducePhoto();
	}
	
			function IncreasePhoto(e)
		{
			if(isBig===false)
			{
				
		Image.style.width="600px";
		Image.style.height="420px";
		isBig=true;
			}
			else  
				NextPhoto();
			e.stopPropagation();
			
		}
		function ReducePhoto(e)
		{
			if(isBig)
			{
		Image.style.width="400px";
		Image.style.height="270px";
		currentWidth=400;
		currentHeight=270;
		isBig=false;	
			
			}
			
			
		}
	function IncreasePhoto2(e)
	{
		if(isBig===false)
		{
				
			timer=setInterval(Increase, 4);
		
			function Increase()
				{
							
							if (currentHeight>=420 || currentWidth>=600)
							{	
							clearInterval(timer);
							isBig=true;
							}
							else 
								{
								currentHeight+=velocity*usualRel;
								currentWidth+=velocity;
								Image.style.width=currentWidth+"px";
								Image.style.height=currentHeight+"px";	
								}
				
						
				}
		
		}
			
		else  
		NextPhoto(e);
	e.stopPropagation();
		
	}
	
    function NextPhoto(e)
    {
      
        Counter = Counter + 1;
        if (Counter === PictureMassiv.length) Counter = 0;
        Image.src = PictureMassiv[Counter];
		e.stopPropagation();
    }
	
    function PreviousPhoto(e)
    {
        if (Counter === 0) Counter = ImgNumber - 1;
        else
            Counter = Counter-1;
        Image.src = PictureMassiv[Counter];
		e.stopPropagation();
    }
}