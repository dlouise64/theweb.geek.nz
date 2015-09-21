var masonry = function(){
	var $container = $('#container');

  $container.imagesLoaded(function(){

  $container.masonry({

  itemSelector : '.box',

  isFitWidth: true,

  isAnimated: true

  });
}

$(document).ready(masonry);