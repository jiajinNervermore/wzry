
//  页头部分下拉菜单排行榜的悬停保住状态部分
 //DOM4步
  //1.查找触发事件的元素
var newGames=document.querySelectorAll("ul.newGames>li:not(:first-child)>div:first-child");
var hotGames=document.querySelectorAll("ul.hotGames>li:not(:first-child)>div:first-child");
var handTours=document.querySelectorAll("ul.handTours>li:not(:first-child)>div:first-child.ranking-score");
  //2.绑定事件处理函数
//因为得到的元素是数组形式，所以先遍历在绑定事件
// 左边部分
for(var rank1 of newGames){
    rank1.onmouseenter=function(){
    //3，(在事件处理函数中)查找要修改的元素
    // 获取 目标元素，此处在当前事件的下一个兄弟元素 
    var download=this.nextElementSibling;
    // 由于只能每一列只能打开一个图片并且必须打开一个，所以在改变自己的状态的同时要关闭其他的图片，恢复排名的那个状态
    // 获取当前元素所在的那一列的所有有可能打开的图片（所在的排行榜的那一列只能打开一张图片）
	var openSpan=document.querySelector(
		"ul.newGames>li>div.open"
	);
			//如果找到打开的那一个，才关闭它
	if(openSpan!==null){
		openSpan.className="";        
	}
	//才能打开自己！
	this.className="open"                                       
  }
}
// 中间部分
for(var rank2 of hotGames){
    rank2.onmouseenter=function(){
    //3，(在事件处理函数中)查找要修改的元素
    // 获取 目标元素，此处在当前事件的下一个兄弟元素 
    var download=this.nextElementSibling;
    // 由于只能每一列只能打开一个图片并且必须打开一个，所以在改变自己的状态的同时要关闭其他的图片，恢复排名的那个状态
    // 获取当前元素所在的那一列的所有有可能打开的图片（所在的排行榜的那一列只能打开一张图片）
	var openSpan=document.querySelector(
		"ul.hotGames>li>div.open"
	);
			//如果找到打开的那一个，才关闭它
	if(openSpan!==null){
		openSpan.className="";        
	}
	//才能打开自己！
	this.className="open"                                       
  }
}
// 右边部分
for(var rank3 of handTours){
    rank3.onmouseenter=function(){
    //3，(在事件处理函数中)查找要修改的元素
    // 获取 目标元素，此处在当前事件的下一个兄弟元素 
    // 由于只能每一列只能打开一个图片并且必须打开一个，所以在改变自己的状态的同时要关闭其他的图片，恢复排名的那个状态
    // 获取当前元素所在的那一列的所有有可能打开的图片（所在的排行榜的那一列只能打开一张图片）
	var openSpan=document.querySelector(
		"ul.handTours>li>div.open"
	);
			//如果找到打开的那一个，才关闭它
	if(openSpan!==null){
		openSpan.className="";        
	}
	//才能打开自己！
	this.className="open"                                       
  }
}
// 周免英雄栏大小图切换 
//DOM4步
  //1.查找触发事件的元素
 var weeklyHeros=document.querySelectorAll("div.weekly-left>ul>li>img:first-child") ;
  //2.绑定事件处理函数
  console.log(weeklyHeros);
for(var weeklyHero of weeklyHeros){
    weeklyHero.onmouseenter=function(){
    //3，(在事件处理函数中)查找要修改的元素
    // 获取 目标元素，此处在当前事件的下一个兄弟元素 
    // 由于只能打开一个图片并且必须打开一个，所以在改变自己的状态的同时要关闭其他的图片，恢复小图状态
    // 获取当前元素所在的那一列的所有有可能打开的图片
	var BigweeklyHero=document.querySelector(
		"div.weekly-left>ul>li>img.weekly-open"
	);
    var bigImg=BigweeklyHero.nextElementSibling;
    console.log(bigImg);
    //如果找到打开的那一个，才关闭它
	if(BigweeklyHero!==null){
		BigweeklyHero.className="";        
	}
	//修改元素，给第一个img的classopen才能打开自己！
	this.className="weekly-open" ; 
    console.log(bigImg);                                 
  }
}
