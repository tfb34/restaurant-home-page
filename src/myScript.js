$(document).ready(function(){
    $('body').append('<h1 id="restaurant-name"><span>Fresh</span>Burg</h1>');

    $('body').append('<ul><li id="home">Home</li><li id="menu">Menu</li><li id="contact">Contact</li></ul>')
	
	$('body').append('<div id="main-pic"></div>');
	$('#main-pic').css({'background-image':'url(../assets/lamb-burger.jpg)','background-repeat':'no-repeat','background-size':'cover','position':'absolute','top':'0','width':'100%','z-index':'-1','height':'1000px'});

	$('body').append('<div id="content"></div>');
	$('#content').append('<p id="headline">"Not just fresh but real damn good!" <br>&mdash;everyone</p>');
	$('#content').append('<div class="home-page"></div>');

	$('body').css({'background-color': '#8f3e97', 'padding':'0','margin':'0'});
	$('#restaurant-name').css({'color':'#35a4dc','font-weight':'bold','width':'20%','text-align':'center','margin-top':'5%','margin-left':'5%'});
	$('span').css({'background-color':'white','border-radius':'5px','padding-right':'5px','padding-left':'5px','margin-right':'5px'});
	$('ul').css({'list-style':'none','text-align':'center','background-color':'white'});
	
	$('#restaurant-name').append('<a class="fa" title="source code" id="github-link" href="https://github.com/tfb34/restaurant-home-page">&#xf09b;</a>');

	var navBarItems = $('ul').children();

	$(navBarItems).css({'display':'inline','color':'white','font-size':'20px','color':'blue' });
	
	$(navBarItems)
		.mouseenter(function(){
			$(this).stop().animate({'font-size' : "25px","font-weight":'bold'});
		}).mouseleave(function(){
			$(this).stop().animate({'font-size' : "20px"});
		});
	
	$('#home').css({'background-color':'grey', 'color':'white', 'border-radius':'5px;'});

	$('ul li:nth-child(2)').css({'margin-left':'2em','margin-right':'2em'});
	
	$('#headline').css({'color':'white','font-size':'30px','line-height':'2em','text-align':'center', 'margin-top':'30%','font-weight':'bold','text-shadow':'4px 2px black'});


	$( "#menu" ).click(function() {
		var menu = $('.menu-page');
		if(!menu.length){
	  	$('#content').empty();
	  	$('#content').append('<div class="menu-item"><img src="../assets/pineapple.jpg"><div class="food-description"><h5>Hawaiian Burger <span>with fries</span></h5><p>$7.99<br>Ingredients: Beef, Bacon, Lettuce, Pineapple, Whole Wheat bun</p></div></div>');
		$('#content').append('<div class="menu-item"><img src="../assets/lamb-burger.jpg"><div class="food-description"><h5>Squire Burger <span>with curly fries</span></h5><p>$10.50<br>Ingredients: Lamb, Spinach, Red Onion, Feta Cheese, Balsamic Vinegar, Whole Wheat bun</p></div></div>');
		$('#content').append('<div class="menu-item"><img src="../assets/portobello.jpg"><div class="food-description"><h5>Mushroom Burger <span>with fries</span></h5><p>$10.50<br>Ingredients: Mushroom, Cheese, Onions, Potato bread</p></div></div>');
		$('#content').append('<div class="menu-page"></div>');

		$('#content').css({'width':'80%','margin-left':'10%','margin-top':'5%','border-radius':'20px','box-sizing':'border-box','background-color':'rgba(212,198,155,0.9)','box-shadow':'0px 0px 15px #888888','padding':'50px'});
		$('#content img').css({'width':'200px','height':'150px','border-radius':'100px'});
		$('.menu-item').css({'margin-bottom':'5em'});
		$('.menu-item img').css({'float':'left'});
		$('.menu-item:after').css({'content':'','display':'block','clear':'both'});
		$('.food-description').css({'padding-top':'1em','margin-left':'15em'});

		mobileMenuCss();
		}
	}); 

	$("#home").click(function(){
		$('#content').empty();
		$('#content').append('<div class="home-page"></div>');
		$('#content').append('<p id="headline">"Not just fresh but real damn good!"<br> &mdash;everyone</p>');
		$('#headline').css({'color':'white','font-size':'30px','line-height':'2em','text-align':'center', 'margin-top':'30%','font-weight':'bold','text-shadow':'4px 2px black'});
		$('#content').css({'background-color':'transparent','box-shadow':'none'});
	});

	$('#contact').click(function(){
		$('#content').empty();
		$('#content').append('<div class="contact-page"></div>')
		$('#content').append('<p>Contact us at (234)-xxx-xxx or email us at delicious@freshburg.com. We would love to hear your feedback!</p>');
		
		$('#content').css({'width':'80%','margin-left':'10%','margin-top':'5%','border-radius':'20px','box-sizing':'border-box','background-color':'rgba(212,198,155,0.9)','box-shadow':'0px 0px 15px #888888','padding':'50px'});
		$('#content p').css({'color':'black','font-size':'20px','line-height':'2em','text-align':'center', 'margin-top':'10%'});
		
		mobileContactCss();
	});

	$("ul li").click(function(){
		$("ul li").each(function(){
			$(this).css({"background-color":"transparent", 'color':'blue'});
		});
		$(this).css({"background-color":'grey','color':'white'});
	});

	
	window.onresize = resizePage;

});



var resizePage = function(){
	//cross browser solution
	var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth; //for IE8 
	if($('.menu-page').length > 0){
		mobileMenuCss();
	}else if($('.contact-page').length >0){
		mobileContactCss();
	}
};


var mobileMenuCss = function(){

	var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth; //for IE8 
	
	if (width < 750) {
		$('#content').css({'width':'90%','margin-left':'5%','padding':'10%'});
		$('.menu-item img').css({'float':'none','height':'100px','width':'130px','border-radius':'10px','margin-left':'8%'});
		$('.food-description').css({'padding-top':'1em','margin-left':'1em'});
	}
	else {
		$('#content').css({'width':'80%','margin-left':'10%', 'padding':'10%', 'padding-top':'5%'});
		$('.menu-item img').css({'float':'left','height':'150px','width':'200px','border-radius':'100px','margin-left':'0'});
		$('.food-description').css({'padding-top':'1em','margin-left':'15em'});
	}
};

var mobileContactCss = function(){
	var width = (window.innerWidth > 0)? window.innerWidth : document.documentElement.clientWidth;

	if(width < 608){
		$('#content p').css({'font-size':'16px'});
	}else{
		$('#content p').css({'font-size':'20px'});
	}
};


