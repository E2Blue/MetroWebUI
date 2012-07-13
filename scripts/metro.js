
/* Perform a sliding effect of the elements children with class="sliding-js" */
$.fn.metroSlide = function(){
	that = $(this);
	if(that.children.length > 1){
		setInterval(function(){
			that.children(':nth-child(2)').show();
			that.children(':first').slideUp(700,function(){
				that.append($(this));
			});
		},2000);
	}
}