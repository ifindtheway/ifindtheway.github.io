var isFirstScroll = true;

window.addEventListener("load", function(){
	window.scroll(0,100);
})

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	if(window.pageYOffset>(document.documentElement.clientHeight - 200) || isFirstScroll){
		isFirstScroll = false;
		return;
	}
	var height = document.getElementsByClassName('hContainer')[0].offsetHeight;
	var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
		document.getElementsByClassName('hContainer')[0].style.top = "0";
  } else if(window.pageYOffset>document.documentElement.clientHeight-400){
			document.getElementsByClassName('hContainer')[0].style.top = "-"+height+"px";
	}
  prevScrollpos = currentScrollPos;
}