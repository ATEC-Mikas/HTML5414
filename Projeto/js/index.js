$(document).ready(function(){
    $('html').animate({
        scrollTop: 0
     }, function(){
        window.addEventListener('scroll', function (event) {
            if (isInViewport($(".trigger-anim-open")[0])) {
                $(".apresentacao").removeClass("start-size").addClass("teste");
            }
        }, false);
     });
});




var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};