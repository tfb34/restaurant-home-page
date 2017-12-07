$(document).ready(function(){
	$('body')
    $('body').append('<h1 id="restaurant-name"><span>Fresh</span>Burg</h1>');

    $('body').append('<ul><li id="home">Home</li><li id="menu">Menu</li><li id="contact">Contact</li></ul>')
	$('body').append('<img id="main-pic" src="lamb-burger.jpg" alt="burger">');
	$('body').append('<div id="content"></div>');
	$('#content').append('<p id="headline">"Not just fresh but real damn good!" &mdash; everyone</p>');


	$('body').css({'background-color': '#8f3e97', 'padding':'0','margin':'0'});
	$('#restaurant-name').css({'color':'#35a4dc','font-weight':'bold','width':'20%','text-align':'center','margin-top':'5%','margin-left':'5%'});
	$('span').css({'background-color':'white','border-radius':'5px','padding-right':'5px','padding-left':'5px','margin-right':'5px'});
	$('ul').css({'list-style':'none','text-align':'center','background-color':'white','width':'99%'});
	

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
	$('#main-pic').css({'position':'absolute','top':'0','width':'100%','min-width':'1205px','z-index':'-1'});
	$('#headline').css({'color':'white','font-size':'30px','line-height':'2em','text-align':'center', 'margin-top':'23%','font-weight':'bold'});


	$( "#menu" ).click(function() {
		var menu = $('.menu-page');
		if(!menu.length){
	  	$('#content').empty();
	  	$('#content').append('<div class="menu-item"><img src="pineapple.jpg"><div class="food-description"><h5>Hawaiian Burger <span>with fries</span></h5><p>$7.99<br>Ingredients: Beef, Bacon, Lettuce, Pineapple, Whole Wheat bun</p></div></div>');
		$('#content').append('<div class="menu-item"><img src="lamb-burger.jpg"><div class="food-description"><h5>Squire Burger <span>with curly fries</span></h5><p>$10.50<br>Ingredients: Lamb, Spinach, Red Onion, Feta Cheese, Balsamic Vinegar, Whole Wheat bun</p></div></div>');
		$('#content').append('<div class="menu-item"><img src="portobello.jpg"><div class="food-description"><h5>Mushroom Burger <span>with fries</span></h5><p>$10.50<br>Ingredients: Mushroom, Cheese, Onions, Potato bread</p></div></div>');
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
		$('#content').append('<div class="home-page"></div>')
		$('#content').append('<p id="headline">"Not just fresh but real damn good!" &mdash;everyone</p>');
		$('#headline').css({'color':'white','font-size':'30px','line-height':'2em','text-align':'center', 'margin-top':'23%','font-weight':'bold'});
		$('#content').css({'background-color':'transparent','box-shadow':'none'});
	});

	$('#contact').click(function(){
		$('#content').empty();
		$('#content').append('<div class="contact-page"></div>')
		$('#content').append('<p>Contact us at (234)-dont-call or email us at dontBother@freshburg.com. We would love to hear your feedback!</p>');
		
		$('#content').css({'width':'80%','margin-left':'10%','margin-top':'5%','border-radius':'20px','box-sizing':'border-box','background-color':'rgba(212,198,155,0.9)','box-shadow':'0px 0px 15px #888888','padding':'50px'});
		$('#content p').css({'color':'black','font-size':'30px','line-height':'2em','text-align':'center', 'margin-top':'10%'});
		
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
	$('body').append('<h1>resizingPage function is called</h1>');
	console.log(width);

	if($('.home-page').length >0){
		console.log('resize home');
	}else if($('.menu-page').length > 0){
		mobileMenuCss();
	}else if($('.contact-page').length >0){
		mobileContactCss();
	}
};


var mobileMenuCss = function(){
	$('body').append('<h1>mobileMenuCss function is called</h1>');//debugging
	var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth; //for IE8 
	$('body').append('<h1>'+width+'</h1');//debugging
	if (width < 750) {
	   $('body').append('<h1>width less than 750</h1>');//debugging
		$('#content').css({'width':'90%','margin-left':'5%','padding':'10%'});
		$('.menu-item img').css({'float':'none'});
		$('.food-description').css({'padding-top':'1em','margin-left':'1em'});
	}
	else {
	  $('body').append('<h1>greater than 750</h1>');//debugging
		$('#content').css({'width':'80%','margin-left':'10%', 'padding':'10%', 'padding-top':'5%'});
		$('.menu-item img').css({'float':'left'});
		$('.food-description').css({'padding-top':'1em','margin-left':'15em'});
	}
};

var mobileContactCss = function(){
	var width = (window.innerWidth > 0)? window.innerWidth : document.documentElement.clientWidth;
	if(width < 608){
		$('#content p').css({'font-size':'16px'});
	}else{
		$('#content p').css({'font-size':'30px'});
	}
};
