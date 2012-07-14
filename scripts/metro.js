
/* Perform a sliding effect of the elements children */
(function($){
	jQuery.fn.metroSlide = function(){
		this.each(function(){
			that = $(this);
			if(that.children.length > 1){
				(function(that){
					setInterval(function(){
						that.children(':nth-child(2)').show();
						that.children(':first').slideUp(830,function(){
							that.append($(this));
						});
					},2000);
				})(that);
			}
		});
		return this;
	}
})(jQuery);