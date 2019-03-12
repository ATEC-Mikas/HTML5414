$(document).ready(function(){
    //Função para returnar ao topo antes de aplicar o event listener ao scroll
    $('html').animate({
        scrollTop: 0
     }, function(){
        //Função que liga o listener do evento scroll
        window.addEventListener('scroll', function (event) {
            //verificar se está visivel
            if (isInViewport($(".trigger-anim-open")[0])) {
                //retirar o start-size e adicionar a class de animação
                $(".apresentacao").removeClass("start-size").addClass("anim");
            }
        }, false);
        //TODO Melhorar esta função visto que só é chamada uma vez mas continua a aplicar a class "anim" 
     });
});



// Função para verificar se está visivel para o utilizador
// https://vanillajstoolkit.com/helpers/isinviewport/
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};