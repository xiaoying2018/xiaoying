var oInt=document.getElementById('int');
	var aIntBtn=oInt.children;
	
	var oContent=document.getElementById('content3');
	var aContent=oContent.children;
	for(var i=0;i<aIntBtn.length;i++)
	{
		aIntBtn[i].index=i
		aIntBtn[i].onclick=function ()
		{
			for(var i=0;i<aIntBtn.length;i++)
			{
				aIntBtn[i].className='';
				aContent[i].style.display='none';	
			}
			this.className='on';
			aContent[this.index].style.display='block';
		};
	}