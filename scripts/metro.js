
/* Perform a sliding effect of the elements children */
(function($){
	jQuery.fn.metroSlide = function(){
		this.each(function(){
			that = $(this);
			if(that.children().not('.noslide-js').length > 1){
				(function(that){
					setInterval(function(){
						that.children(':not(.noslide-js):nth-child(2)').show();
						that.children(':not(.noslide-js):first').slideUp(830,function(){
							that.append($(this));
						});
					},2000);
				})(that);
			}
		});
		return this;
	}
})(jQuery);