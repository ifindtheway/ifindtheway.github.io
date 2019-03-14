var scrollFirstTime = true;
document.addEventListener("load", function(){
	window.scroll(0,100);
})
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	if(window.pageYOffset>1000){
		return;
	}
var currentScrollPos = window.pageYOffset;
var height = document.getElementsByClassName('hContainer')[0].offsetHeight;
  if (prevScrollpos > currentScrollPos) {
	document.getElementsByClassName('hContainer')[0].style.top = "0";
  } else {
		if(window.pageYOffset > 500){
			document.getElementsByClassName('hContainer')[0].style.top = "-"+height+"px";
		}
  }
  prevScrollpos = currentScrollPos;
}